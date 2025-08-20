-- UMEDIFY Database Schema
-- Educational platform for Algerian students

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Universities table
CREATE TABLE universities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  wilaya TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Departments table
CREATE TABLE departments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Profiles table (extends auth.users)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  university_id UUID REFERENCES universities(id),
  department_id UUID REFERENCES departments(id),
  is_premium BOOLEAN DEFAULT FALSE,
  premium_start TIMESTAMP,
  premium_end TIMESTAMP,
  language TEXT DEFAULT 'fr' CHECK (language IN ('fr', 'ar', 'en')),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Resources table
CREATE TABLE resources (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT,
  description TEXT,
  file_type TEXT,
  type TEXT CHECK (type IN ('Course', 'TD', 'TP')),
  file_url TEXT,
  year INT CHECK (year BETWEEN 1 AND 7),
  is_premium BOOLEAN DEFAULT FALSE,
  visibility TEXT DEFAULT 'public' CHECK (visibility IN ('public', 'private_to_department')),
  university_id UUID REFERENCES universities(id),
  department_id UUID REFERENCES departments(id),
  uploader UUID REFERENCES profiles(id),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Payments table
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id),
  method TEXT CHECK (method IN ('baridimob', 'la_poste')),
  amount INT CHECK (amount IN (0, 500, 1000)),
  proof_url TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'verified', 'rejected')),
  created_at TIMESTAMP DEFAULT NOW()
);

-- AI Chats table
CREATE TABLE ai_chats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id),
  question TEXT,
  answer TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Row Level Security (RLS) Policies

-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_chats ENABLE ROW LEVEL SECURITY;
ALTER TABLE universities ENABLE ROW LEVEL SECURITY;
ALTER TABLE departments ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view their own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles" ON profiles
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Admins can update all profiles" ON profiles
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Resources policies
CREATE POLICY "Everyone can view public resources" ON resources
  FOR SELECT USING (
    visibility = 'public' AND is_premium = FALSE
  );

CREATE POLICY "Premium users can view all public resources" ON resources
  FOR SELECT USING (
    visibility = 'public' AND 
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND (is_premium = TRUE OR role = 'admin')
    )
  );

CREATE POLICY "Department members can view private department resources" ON resources
  FOR SELECT USING (
    visibility = 'private_to_department' AND
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() 
      AND department_id = resources.department_id
      AND (is_premium = TRUE OR role = 'admin')
    )
  );

CREATE POLICY "Users can create resources" ON resources
  FOR INSERT WITH CHECK (auth.uid() = uploader);

CREATE POLICY "Users can update their own resources" ON resources
  FOR UPDATE USING (auth.uid() = uploader);

CREATE POLICY "Admins can manage all resources" ON resources
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Payments policies
CREATE POLICY "Users can view their own payments" ON payments
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own payments" ON payments
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins can manage all payments" ON payments
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- AI Chats policies
CREATE POLICY "Premium users can view their own chats" ON ai_chats
  FOR SELECT USING (
    auth.uid() = user_id AND
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND (is_premium = TRUE OR role = 'admin')
    )
  );

CREATE POLICY "Premium users can create chats" ON ai_chats
  FOR INSERT WITH CHECK (
    auth.uid() = user_id AND
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND (is_premium = TRUE OR role = 'admin')
    )
  );

-- Universities and Departments are read-only for regular users
CREATE POLICY "Everyone can view universities" ON universities FOR SELECT TO authenticated USING (true);
CREATE POLICY "Everyone can view departments" ON departments FOR SELECT TO authenticated USING (true);

CREATE POLICY "Admins can manage universities" ON universities
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Admins can manage departments" ON departments
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Functions

-- Function to automatically create a profile when a user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on user creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to check and update premium status
CREATE OR REPLACE FUNCTION public.check_premium_status()
RETURNS void AS $$
BEGIN
  UPDATE profiles
  SET is_premium = FALSE
  WHERE premium_end < NOW() AND is_premium = TRUE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Insert sample data

-- Sample universities (major Algerian universities)
INSERT INTO universities (name, wilaya) VALUES
('Université d''Alger 1 - Benyoucef Benkhedda', 'Alger'),
('Université d''Oran 1 - Ahmed Ben Bella', 'Oran'),
('Université de Constantine 1 - Frères Mentouri', 'Constantine'),
('Université de Annaba - Badji Mokhtar', 'Annaba'),
('Université de Tlemcen - Abou Bakr Belkaïd', 'Tlemcen'),
('Université de Sétif 1 - Ferhat Abbas', 'Sétif'),
('Université de Batna 1 - Hadj Lakhdar', 'Batna'),
('École Nationale Polytechnique (ENP)', 'Alger'),
('Université des Sciences et de la Technologie Houari Boumediene (USTHB)', 'Alger'),
('Université de Boumerdès - M''Hamed Bougara', 'Boumerdès');

-- Sample departments (major academic fields)
INSERT INTO departments (name) VALUES
('Médecine'),
('Pharmacie'),
('Dentaire'),
('Sciences Exactes'),
('Informatique'),
('Mathématiques'),
('Physique'),
('Chimie'),
('Biologie'),
('Génie Civil'),
('Génie Mécanique'),
('Génie Électrique'),
('Génie Informatique'),
('Architecture'),
('Droit'),
('Sciences Économiques'),
('Sciences Commerciales'),
('Sciences Politiques'),
('Littérature Française'),
('Littérature Arabe'),
('Histoire'),
('Géographie'),
('Philosophie'),
('Psychologie'),
('Sociologie'),
('Sciences Islamiques'),
('Langues Étrangères');

-- Create admin user function (to be called after first user registration)
CREATE OR REPLACE FUNCTION public.make_admin(user_email TEXT)
RETURNS void AS $$
BEGIN
  UPDATE profiles
  SET role = 'admin'
  WHERE id = (SELECT id FROM auth.users WHERE email = user_email);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
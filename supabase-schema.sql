-- UMEDIFY Database Schema
-- Run this in your Supabase SQL editor

-- Enable necessary extensions
create extension if not exists "uuid-ossp";

-- Universities table
create table public.universities (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  wilaya text,
  created_at timestamp with time zone default now()
);

-- Departments table
create table public.departments (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  created_at timestamp with time zone default now()
);

-- Profiles table (extends auth.users)
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role text default 'user' check (role in ('user', 'admin')),
  university_id uuid references public.universities(id),
  department_id uuid references public.departments(id),
  is_premium boolean default false,
  premium_start timestamp with time zone,
  premium_end timestamp with time zone,
  language text default 'fr' check (language in ('fr', 'ar', 'en')),
  created_at timestamp with time zone default now()
);

-- Resources table
create table public.resources (
  id uuid primary key default gen_random_uuid(),
  title text,
  description text,
  file_type text,
  type text check (type in ('Course', 'TD', 'TP')),
  file_url text,
  year int check (year between 1 and 7),
  is_premium boolean default false,
  visibility text check (visibility in ('public', 'private_to_department')) default 'public',
  university_id uuid references public.universities(id),
  department_id uuid references public.departments(id),
  uploader uuid references public.profiles(id),
  created_at timestamp with time zone default now()
);

-- Payments table
create table public.payments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id),
  method text check (method in ('baridimob', 'la_poste')),
  amount int check (amount in (0, 500, 1000)),
  proof_url text,
  status text check (status in ('pending', 'verified', 'rejected')) default 'pending',
  created_at timestamp with time zone default now()
);

-- AI Chats table
create table public.ai_chats (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id),
  question text,
  answer text,
  created_at timestamp with time zone default now()
);

-- Row Level Security (RLS) Policies

-- Enable RLS on all tables
alter table public.profiles enable row level security;
alter table public.resources enable row level security;
alter table public.payments enable row level security;
alter table public.ai_chats enable row level security;
alter table public.universities enable row level security;
alter table public.departments enable row level security;

-- Profiles policies
create policy "Users can view own profile" on public.profiles
  for select using (auth.uid() = id);

create policy "Users can update own profile" on public.profiles
  for update using (auth.uid() = id);

create policy "Admins can view all profiles" on public.profiles
  for all using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- Resources policies
create policy "Anyone can view public resources" on public.resources
  for select using (
    visibility = 'public' or
    (visibility = 'private_to_department' and 
     exists (
       select 1 from public.profiles
       where id = auth.uid() and 
             (is_premium = true or department_id = resources.department_id)
     ))
  );

create policy "Authenticated users can upload resources" on public.resources
  for insert with check (auth.uid() = uploader);

create policy "Users can update own resources" on public.resources
  for update using (auth.uid() = uploader);

create policy "Admins can manage all resources" on public.resources
  for all using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- Payments policies
create policy "Users can view own payments" on public.payments
  for select using (auth.uid() = user_id);

create policy "Users can create own payments" on public.payments
  for insert with check (auth.uid() = user_id);

create policy "Admins can manage all payments" on public.payments
  for all using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- AI Chats policies
create policy "Premium users can access AI chats" on public.ai_chats
  for select using (
    auth.uid() = user_id and
    exists (
      select 1 from public.profiles
      where id = auth.uid() and is_premium = true
    )
  );

create policy "Premium users can create AI chats" on public.ai_chats
  for insert with check (
    auth.uid() = user_id and
    exists (
      select 1 from public.profiles
      where id = auth.uid() and is_premium = true
    )
  );

-- Universities and departments are public read-only
create policy "Anyone can view universities" on public.universities
  for select using (true);

create policy "Anyone can view departments" on public.departments
  for select using (true);

create policy "Admins can manage universities" on public.universities
  for all using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

create policy "Admins can manage departments" on public.departments
  for all using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- Functions

-- Function to create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, language)
  values (new.id, new.raw_user_meta_data->>'full_name', coalesce(new.raw_user_meta_data->>'language', 'fr'));
  return new;
end;
$$ language plpgsql security definer;

-- Trigger to create profile on signup
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Function to check premium status
create or replace function public.is_user_premium(user_uuid uuid)
returns boolean as $$
begin
  return exists (
    select 1 from public.profiles
    where id = user_uuid 
    and is_premium = true
    and premium_end > now()
  );
end;
$$ language plpgsql security definer;

-- Sample Data (Optional)

-- Insert sample universities
insert into public.universities (name, wilaya) values
  ('Université des Sciences et de la Technologie Houari Boumediene', 'Alger'),
  ('Université des Sciences et Technologies d''Oran Mohamed Boudiaf', 'Oran'),
  ('Université Mouloud Mammeri de Tizi-Ouzou', 'Tizi Ouzou'),
  ('Université Frères Mentouri Constantine 1', 'Constantine'),
  ('Université d''Oran 1 Ahmed Ben Bella', 'Oran');

-- Insert sample departments
insert into public.departments (name) values
  ('Médecine'),
  ('Informatique'),
  ('Génie Civil'),
  ('Droit'),
  ('Économie'),
  ('Mathématiques'),
  ('Physique'),
  ('Chimie'),
  ('Biologie'),
  ('Génie Électrique');

-- Storage setup for file uploads
insert into storage.buckets (id, name, public) values ('resources', 'resources', false);
insert into storage.buckets (id, name, public) values ('payment-proofs', 'payment-proofs', false);

-- Storage policies
create policy "Users can upload resources" on storage.objects
  for insert with check (bucket_id = 'resources' and auth.uid()::text = (storage.foldername(name))[1]);

create policy "Users can view accessible resources" on storage.objects
  for select using (
    bucket_id = 'resources' and (
      -- Public resources
      exists (
        select 1 from public.resources
        where file_url = storage.objects.name and visibility = 'public'
      ) or
      -- Private resources for premium users or same department
      exists (
        select 1 from public.resources r
        join public.profiles p on p.id = auth.uid()
        where r.file_url = storage.objects.name 
        and r.visibility = 'private_to_department'
        and (p.is_premium = true or p.department_id = r.department_id)
      )
    )
  );

create policy "Users can upload payment proofs" on storage.objects
  for insert with check (bucket_id = 'payment-proofs' and auth.uid()::text = (storage.foldername(name))[1]);

create policy "Users can view own payment proofs" on storage.objects
  for select using (bucket_id = 'payment-proofs' and auth.uid()::text = (storage.foldername(name))[1]);

create policy "Admins can view all payment proofs" on storage.objects
  for select using (
    bucket_id = 'payment-proofs' and
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );
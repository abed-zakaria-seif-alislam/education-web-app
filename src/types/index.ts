import { User } from '@supabase/supabase-js';

export interface University {
  id: string;
  name: string;
  wilaya: string | null;
  created_at: string;
}

export interface Department {
  id: string;
  name: string;
  created_at: string;
}

export interface Profile {
  id: string;
  full_name: string | null;
  role: 'user' | 'admin';
  university_id: string | null;
  department_id: string | null;
  is_premium: boolean;
  premium_start: string | null;
  premium_end: string | null;
  language: 'fr' | 'ar' | 'en';
  created_at: string;
  university?: University | null;
  department?: Department | null;
}

export interface Resource {
  id: string;
  title: string | null;
  description: string | null;
  file_type: string | null;
  type: 'Course' | 'TD' | 'TP';
  file_url: string | null;
  year: number | null;
  is_premium: boolean;
  visibility: 'public' | 'private_to_department';
  university_id: string | null;
  department_id: string | null;
  uploader: string | null;
  created_at: string;
}

export interface Payment {
  id: string;
  user_id: string | null;
  method: 'baridimob' | 'la_poste';
  amount: number;
  proof_url: string | null;
  status: 'pending' | 'verified' | 'rejected';
  created_at: string;
}

export interface AIChat {
  id: string;
  user_id: string | null;
  question: string | null;
  answer: string | null;
  created_at: string;
}

export interface DashboardProps {
  user: User;
  profile: Profile | null;
}

export interface AuthError {
  message: string;
  status?: number;
}
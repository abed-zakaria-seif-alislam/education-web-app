import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database Types
export interface Database {
  public: {
    Tables: {
      universities: {
        Row: {
          id: string
          name: string
          wilaya: string | null
          created_at?: string
        }
        Insert: {
          id?: string
          name: string
          wilaya?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          wilaya?: string | null
          created_at?: string
        }
      }
      departments: {
        Row: {
          id: string
          name: string
          created_at?: string
        }
        Insert: {
          id?: string
          name: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          created_at?: string
        }
      }
      profiles: {
        Row: {
          id: string
          full_name: string | null
          role: string
          university_id: string | null
          department_id: string | null
          is_premium: boolean
          premium_start: string | null
          premium_end: string | null
          language: string
          created_at?: string
        }
        Insert: {
          id: string
          full_name?: string | null
          role?: string
          university_id?: string | null
          department_id?: string | null
          is_premium?: boolean
          premium_start?: string | null
          premium_end?: string | null
          language?: string
          created_at?: string
        }
        Update: {
          id?: string
          full_name?: string | null
          role?: string
          university_id?: string | null
          department_id?: string | null
          is_premium?: boolean
          premium_start?: string | null
          premium_end?: string | null
          language?: string
          created_at?: string
        }
      }
      resources: {
        Row: {
          id: string
          title: string | null
          description: string | null
          file_type: string | null
          type: 'Course' | 'TD' | 'TP'
          file_url: string | null
          year: number | null
          is_premium: boolean
          visibility: 'public' | 'private_to_department'
          university_id: string | null
          department_id: string | null
          uploader: string | null
          created_at?: string
        }
        Insert: {
          id?: string
          title?: string | null
          description?: string | null
          file_type?: string | null
          type: 'Course' | 'TD' | 'TP'
          file_url?: string | null
          year?: number | null
          is_premium?: boolean
          visibility?: 'public' | 'private_to_department'
          university_id?: string | null
          department_id?: string | null
          uploader?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          title?: string | null
          description?: string | null
          file_type?: string | null
          type?: 'Course' | 'TD' | 'TP'
          file_url?: string | null
          year?: number | null
          is_premium?: boolean
          visibility?: 'public' | 'private_to_department'
          university_id?: string | null
          department_id?: string | null
          uploader?: string | null
          created_at?: string
        }
      }
      payments: {
        Row: {
          id: string
          user_id: string | null
          method: 'baridimob' | 'la_poste'
          amount: 0 | 500 | 1000
          proof_url: string | null
          status: 'pending' | 'verified' | 'rejected'
          created_at?: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          method: 'baridimob' | 'la_poste'
          amount: 0 | 500 | 1000
          proof_url?: string | null
          status?: 'pending' | 'verified' | 'rejected'
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          method?: 'baridimob' | 'la_poste'
          amount?: 0 | 500 | 1000
          proof_url?: string | null
          status?: 'pending' | 'verified' | 'rejected'
          created_at?: string
        }
      }
      ai_chats: {
        Row: {
          id: string
          user_id: string | null
          question: string | null
          answer: string | null
          created_at?: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          question?: string | null
          answer?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          question?: string | null
          answer?: string | null
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
export type Enums<T extends keyof Database['public']['Enums']> = Database['public']['Enums'][T]
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import DashboardContent from '@/components/dashboard/DashboardContent';

export default async function DashboardPage() {
  const supabase = await createClient();
  
  const { data: { session }, error } = await supabase.auth.getSession();
  
  if (error || !session) {
    redirect('/auth/login');
  }

  // Get user profile
  const { data: profile } = await supabase
    .from('profiles')
    .select(`
      *,
      university:universities(name, wilaya),
      department:departments(name)
    `)
    .eq('id', session.user.id)
    .single();

  return (
    <div className="min-h-screen bg-umedify-background">
      <DashboardContent user={session.user} profile={profile} />
    </div>
  );
}
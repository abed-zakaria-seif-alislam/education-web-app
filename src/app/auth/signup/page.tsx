"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Eye, EyeOff, Mail, Lock, User, ArrowLeft, GraduationCap } from 'lucide-react';
import { University, Department, AuthError } from '@/types';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    universityId: '',
    departmentId: '',
    language: 'fr'
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [universities, setUniversities] = useState<University[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loadingData, setLoadingData] = useState(true);
  const router = useRouter();

  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = async () => {
    try {
      const [universitiesRes, departmentsRes] = await Promise.all([
        supabase.from('universities').select('*').order('name'),
        supabase.from('departments').select('*').order('name')
      ]);

      if (universitiesRes.data) setUniversities(universitiesRes.data);
      if (departmentsRes.data) setDepartments(departmentsRes.data);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoadingData(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères');
      setLoading(false);
      return;
    }

    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
            university_id: formData.universityId,
            department_id: formData.departmentId,
            language: formData.language
          }
        }
      });

      if (signUpError) throw signUpError;

      if (data.user) {
        // Update the profile with additional information
        const { error: profileError } = await supabase
          .from('profiles')
          .update({
            full_name: formData.fullName,
            university_id: formData.universityId || null,
            department_id: formData.departmentId || null,
            language: formData.language
          })
          .eq('id', data.user.id);

        if (profileError) {
          console.error('Profile update error:', profileError);
        }

        router.push('/dashboard');
      }
    } catch (error) {
      const authError = error as AuthError;
      setError(authError.message);
    } finally {
      setLoading(false);
    }
  };

  if (loadingData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-umedify-primary mx-auto"></div>
          <p className="mt-4 text-umedify-text">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Back to home */}
        <Link 
          href="/" 
          className="flex items-center justify-center text-umedify-primary hover:text-umedify-secondary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour à l'accueil
        </Link>

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-umedify-primary to-umedify-accent rounded-lg p-3">
              <span className="text-white font-bold text-2xl">U</span>
            </div>
            <span className="text-3xl font-bold gradient-text">UMEDIFY</span>
          </div>
        </div>

        <h2 className="text-center text-3xl font-bold text-umedify-text">
          Créer votre compte
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Ou{' '}
          <Link
            href="/auth/login"
            className="font-medium text-umedify-primary hover:text-umedify-secondary"
          >
            connectez-vous à votre compte existant
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl rounded-3xl sm:px-10 border border-purple-100">
          <form className="space-y-6" onSubmit={handleSignUp}>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-2xl text-sm">
                {error}
              </div>
            )}

            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-umedify-text mb-2">
                Nom complet
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="appearance-none rounded-2xl relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-umedify-text focus:outline-none focus:ring-2 focus:ring-umedify-primary focus:border-umedify-primary focus:z-10 sm:text-sm"
                  placeholder="Votre nom complet"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-umedify-text mb-2">
                Adresse email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="appearance-none rounded-2xl relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-umedify-text focus:outline-none focus:ring-2 focus:ring-umedify-primary focus:border-umedify-primary focus:z-10 sm:text-sm"
                  placeholder="votre.email@exemple.com"
                />
              </div>
            </div>

            {/* University */}
            <div>
              <label htmlFor="university" className="block text-sm font-medium text-umedify-text mb-2">
                Université (optionnel)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <GraduationCap className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  id="university"
                  value={formData.universityId}
                  onChange={(e) => handleInputChange('universityId', e.target.value)}
                  className="appearance-none rounded-2xl relative block w-full pl-10 pr-3 py-3 border border-gray-300 text-umedify-text focus:outline-none focus:ring-2 focus:ring-umedify-primary focus:border-umedify-primary focus:z-10 sm:text-sm"
                >
                  <option value="">Choisir une université</option>
                  {universities.map((university) => (
                    <option key={university.id} value={university.id}>
                      {university.name} - {university.wilaya}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Department */}
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-umedify-text mb-2">
                Département (optionnel)
              </label>
              <select
                id="department"
                value={formData.departmentId}
                onChange={(e) => handleInputChange('departmentId', e.target.value)}
                className="appearance-none rounded-2xl relative block w-full px-3 py-3 border border-gray-300 text-umedify-text focus:outline-none focus:ring-2 focus:ring-umedify-primary focus:border-umedify-primary focus:z-10 sm:text-sm"
              >
                <option value="">Choisir un département</option>
                {departments.map((department) => (
                  <option key={department.id} value={department.id}>
                    {department.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-umedify-text mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="appearance-none rounded-2xl relative block w-full pl-10 pr-10 py-3 border border-gray-300 placeholder-gray-500 text-umedify-text focus:outline-none focus:ring-2 focus:ring-umedify-primary focus:border-umedify-primary focus:z-10 sm:text-sm"
                  placeholder="Au moins 6 caractères"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-umedify-primary" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-umedify-primary" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-umedify-text mb-2">
                Confirmer le mot de passe
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  className="appearance-none rounded-2xl relative block w-full pl-10 pr-10 py-3 border border-gray-300 placeholder-gray-500 text-umedify-text focus:outline-none focus:ring-2 focus:ring-umedify-primary focus:border-umedify-primary focus:z-10 sm:text-sm"
                  placeholder="Retapez votre mot de passe"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-umedify-primary" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-umedify-primary" />
                  )}
                </button>
              </div>
            </div>

            {/* Language Preference */}
            <div>
              <label htmlFor="language" className="block text-sm font-medium text-umedify-text mb-2">
                Langue préférée
              </label>
              <select
                id="language"
                value={formData.language}
                onChange={(e) => handleInputChange('language', e.target.value)}
                className="appearance-none rounded-2xl relative block w-full px-3 py-3 border border-gray-300 text-umedify-text focus:outline-none focus:ring-2 focus:ring-umedify-primary focus:border-umedify-primary focus:z-10 sm:text-sm"
              >
                <option value="fr">🇫🇷 Français</option>
                <option value="ar">🇩🇿 العربية</option>
                <option value="en">🇬🇧 English</option>
              </select>
            </div>

            {/* Terms and conditions */}
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-umedify-primary focus:ring-umedify-primary border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                J'accepte les{' '}
                <Link href="/terms" className="text-umedify-primary hover:text-umedify-secondary">
                  conditions d'utilisation
                </Link>{' '}
                et la{' '}
                <Link href="/privacy" className="text-umedify-primary hover:text-umedify-secondary">
                  politique de confidentialité
                </Link>
              </label>
            </div>

            {/* Submit button */}
            <div>
              <Button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-2xl text-white bg-umedify-primary hover:bg-umedify-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-umedify-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Création du compte...' : 'Créer mon compte'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
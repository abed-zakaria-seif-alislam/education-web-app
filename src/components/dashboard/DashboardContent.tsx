"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { 
  BookOpen, 
  Upload, 
  User, 
  CreditCard, 
  MessageSquare, 
  Settings,
  LogOut,
  Search,
  Filter,
  Crown
} from 'lucide-react';
import Link from 'next/link';

interface DashboardContentProps {
  user: any;
  profile: any;
}

export default function DashboardContent({ user, profile }: DashboardContentProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  const isPremium = profile?.is_premium || profile?.role === 'admin';

  return (
    <div className="flex h-screen bg-umedify-background">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg border-r border-purple-100">
        <div className="p-6">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 mb-8">
            <div className="bg-gradient-to-r from-umedify-primary to-umedify-accent rounded-lg p-2">
              <span className="text-white font-bold text-lg">U</span>
            </div>
            <span className="text-xl font-bold gradient-text">UMEDIFY</span>
          </Link>

          {/* User Profile */}
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-4 mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-umedify-primary rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-umedify-text truncate">
                  {profile?.full_name || 'Utilisateur'}
                </h3>
                <div className="flex items-center space-x-2">
                  {isPremium ? (
                    <div className="flex items-center space-x-1 text-xs text-umedify-primary">
                      <Crown className="w-3 h-3" />
                      <span>Premium</span>
                    </div>
                  ) : (
                    <span className="text-xs text-gray-500">Gratuit</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            <Link 
              href="/dashboard"
              className="flex items-center space-x-3 px-4 py-3 rounded-2xl bg-umedify-primary text-white"
            >
              <BookOpen className="w-5 h-5" />
              <span>Ressources</span>
            </Link>
            
            <Link 
              href="/dashboard/upload"
              className="flex items-center space-x-3 px-4 py-3 rounded-2xl text-umedify-text hover:bg-purple-50 transition-colors"
            >
              <Upload className="w-5 h-5" />
              <span>Upload</span>
            </Link>
            
            {isPremium && (
              <Link 
                href="/dashboard/ai-chat"
                className="flex items-center space-x-3 px-4 py-3 rounded-2xl text-umedify-text hover:bg-purple-50 transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Dr. Medibot</span>
                <Crown className="w-4 h-4 text-umedify-primary" />
              </Link>
            )}
            
            <Link 
              href="/dashboard/subscription"
              className="flex items-center space-x-3 px-4 py-3 rounded-2xl text-umedify-text hover:bg-purple-50 transition-colors"
            >
              <CreditCard className="w-5 h-5" />
              <span>Abonnement</span>
            </Link>
            
            <Link 
              href="/dashboard/profile"
              className="flex items-center space-x-3 px-4 py-3 rounded-2xl text-umedify-text hover:bg-purple-50 transition-colors"
            >
              <Settings className="w-5 h-5" />
              <span>Profil</span>
            </Link>
          </nav>

          {/* Logout */}
          <div className="absolute bottom-6 left-6 right-6">
            <Button
              onClick={handleLogout}
              variant="ghost"
              className="w-full flex items-center justify-start space-x-3 px-4 py-3 text-red-600 hover:bg-red-50"
            >
              <LogOut className="w-5 h-5" />
              <span>Déconnexion</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-purple-100 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-umedify-text">
                Tableau de bord
              </h1>
              <p className="text-gray-600">
                {profile?.university?.name && (
                  <span>{profile.university.name} • </span>
                )}
                {profile?.department?.name && (
                  <span>{profile.department.name}</span>
                )}
              </p>
            </div>

            {!isPremium && (
              <Link href="/dashboard/subscription">
                <Button className="bg-gradient-to-r from-umedify-primary to-umedify-secondary text-white">
                  <Crown className="w-4 h-4 mr-2" />
                  Passer au Premium
                </Button>
              </Link>
            )}
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6">
          {/* Search and Filters */}
          <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher des cours, TDs, TPs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-umedify-primary focus:border-umedify-primary"
                />
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    value={selectedFilter}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                    className="pl-10 pr-8 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-umedify-primary focus:border-umedify-primary"
                  >
                    <option value="all">Tous les types</option>
                    <option value="Course">Cours</option>
                    <option value="TD">TDs</option>
                    <option value="TP">TPs</option>
                  </select>
                </div>
                
                <Button className="bg-umedify-primary hover:bg-umedify-secondary">
                  Rechercher
                </Button>
              </div>
            </div>
          </div>

          {/* Welcome Message or Premium Upgrade */}
          {!isPremium ? (
            <div className="bg-gradient-to-r from-umedify-primary to-umedify-secondary rounded-2xl p-6 text-white mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    Débloquez tout le potentiel d'UMEDIFY !
                  </h2>
                  <p className="text-purple-100 mb-4">
                    Accédez à toutes les ressources premium, à l'assistant IA et bien plus encore.
                  </p>
                  <Link href="/dashboard/subscription">
                    <Button className="bg-white text-umedify-primary hover:bg-gray-100">
                      <Crown className="w-4 h-4 mr-2" />
                      Découvrir Premium
                    </Button>
                  </Link>
                </div>
                <div className="hidden md:block">
                  <Crown className="w-24 h-24 text-white opacity-20" />
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white mb-6">
              <div className="flex items-center space-x-3">
                <Crown className="w-8 h-8" />
                <div>
                  <h2 className="text-xl font-bold">Bienvenue, membre Premium !</h2>
                  <p className="text-emerald-100">
                    Vous avez accès à toutes les fonctionnalités d'UMEDIFY.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Resources Grid/List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Resource Card Placeholder */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-purple-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-umedify-primary" />
                </div>
                <span className="text-xs bg-purple-100 text-umedify-primary px-2 py-1 rounded-full">
                  Cours
                </span>
              </div>
              <h3 className="font-semibold text-umedify-text mb-2">
                Exemple de Cours
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Description du cours ou du document...
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">L2 • Informatique</span>
                <Button size="sm" className="bg-umedify-primary hover:bg-umedify-secondary">
                  Télécharger
                </Button>
              </div>
            </div>

            {/* More placeholders */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-purple-100 opacity-50">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-gray-400" />
                </div>
                <span className="text-xs bg-gray-100 text-gray-400 px-2 py-1 rounded-full">
                  Premium
                </span>
              </div>
              <h3 className="font-semibold text-gray-400 mb-2">
                Contenu Premium
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Disponible avec l'abonnement premium...
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">L3 • Médecine</span>
                <Button size="sm" disabled className="bg-gray-300">
                  Premium
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 border border-purple-100 opacity-50">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-gray-400" />
                </div>
                <span className="text-xs bg-gray-100 text-gray-400 px-2 py-1 rounded-full">
                  Premium
                </span>
              </div>
              <h3 className="font-semibold text-gray-400 mb-2">
                Plus de contenu
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Découvrez des milliers de ressources...
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">Tous niveaux</span>
                <Button size="sm" disabled className="bg-gray-300">
                  Premium
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
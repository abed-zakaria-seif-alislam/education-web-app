import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { 
  BookOpen, 
  Upload, 
  Download, 
  Star,
  TrendingUp,
  FileText,
  FlaskConical,
  Crown
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  // Mock data - in real app, this would come from Supabase
  const stats = {
    totalDownloads: 42,
    uploadedResources: 8,
    premiumDaysLeft: 87,
    favoriteResources: 23
  }

  const recentResources = [
    { id: 1, title: "Analyse Mathématique - Chapitre 3", type: "Cours", department: "Mathématiques", downloadCount: 156, isPremium: false },
    { id: 2, title: "TD Algorithmes - Tri et Recherche", type: "TD", department: "Informatique", downloadCount: 89, isPremium: true },
    { id: 3, title: "TP Chimie Organique - Synthèse", type: "TP", department: "Chimie", downloadCount: 234, isPremium: false },
    { id: 4, title: "Cours Physiologie - Système Nerveux", type: "Cours", department: "Médecine", downloadCount: 178, isPremium: true },
  ]

  const recommendedResources = [
    { id: 5, title: "Exercices Corrigés - Calcul Intégral", type: "TD", department: "Mathématiques", rating: 4.8 },
    { id: 6, title: "TP Base de Données - MySQL", type: "TP", department: "Informatique", rating: 4.9 },
    { id: 7, title: "Cours Droit Constitutionnel", type: "Cours", department: "Droit", rating: 4.7 },
  ]

  return (
    <DashboardLayout>
      <div className="px-4 py-8 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-umedify-text">
            Bonjour, Utilisateur! 👋
          </h1>
          <p className="text-gray-600 mt-2">
            Bienvenue sur votre tableau de bord UMEDIFY. Voici un aperçu de votre activité.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-100">
                  <Download className="h-5 w-5 text-blue-600" />
                </div>
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-umedify-text">{stats.totalDownloads}</div>
                <div className="text-sm text-gray-600">Téléchargements</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-green-100">
                  <Upload className="h-5 w-5 text-green-600" />
                </div>
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-umedify-text">{stats.uploadedResources}</div>
                <div className="text-sm text-gray-600">Ressources partagées</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-umedify-primary/20">
                  <Crown className="h-5 w-5 text-umedify-primary" />
                </div>
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-umedify-primary">{stats.premiumDaysLeft}</div>
                <div className="text-sm text-gray-600">Jours Premium</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-yellow-100">
                  <Star className="h-5 w-5 text-yellow-600" />
                </div>
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-umedify-text">{stats.favoriteResources}</div>
                <div className="text-sm text-gray-600">Favoris</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Resources */}
          <div className="bg-white rounded-2xl shadow-md">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-umedify-text">Ressources Récentes</h2>
            </div>
            <div className="p-6 space-y-4">
              {recentResources.map((resource) => {
                const IconComponent = resource.type === 'Cours' ? BookOpen : resource.type === 'TD' ? FileText : FlaskConical
                
                return (
                  <div key={resource.id} className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-umedify-primary/10">
                        <IconComponent className="h-4 w-4 text-umedify-primary" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-medium text-umedify-text text-sm">{resource.title}</h3>
                          {resource.isPremium && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-umedify-accent/20 text-umedify-primary">
                              Premium
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-600">{resource.department} • {resource.downloadCount} téléchargements</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Voir
                    </Button>
                  </div>
                )
              })}
            </div>
            <div className="px-6 pb-6">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/explore">
                  Voir toutes les ressources
                </Link>
              </Button>
            </div>
          </div>

          {/* Recommended Resources */}
          <div className="bg-white rounded-2xl shadow-md">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-umedify-text">Recommandé pour vous</h2>
            </div>
            <div className="p-6 space-y-4">
              {recommendedResources.map((resource) => {
                const IconComponent = resource.type === 'Cours' ? BookOpen : resource.type === 'TD' ? FileText : FlaskConical
                
                return (
                  <div key={resource.id} className="flex items-center justify-between p-4 rounded-xl bg-umedify-primary/5 hover:bg-umedify-primary/10 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-umedify-primary/20">
                        <IconComponent className="h-4 w-4 text-umedify-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-umedify-text text-sm">{resource.title}</h3>
                        <div className="flex items-center space-x-2">
                          <p className="text-xs text-gray-600">{resource.department}</p>
                          <div className="flex items-center">
                            <Star className="h-3 w-3 text-yellow-500 fill-current" />
                            <span className="text-xs text-gray-600 ml-1">{resource.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button size="sm">
                      Télécharger
                    </Button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Button asChild className="h-auto p-6 flex-col space-y-2">
            <Link href="/dashboard/upload">
              <Upload className="h-8 w-8" />
              <span>Télécharger une ressource</span>
            </Link>
          </Button>
          
          <Button asChild variant="outline" className="h-auto p-6 flex-col space-y-2">
            <Link href="/dashboard/ai-chat">
              <TrendingUp className="h-8 w-8" />
              <span>Assistant IA</span>
            </Link>
          </Button>
          
          <Button asChild variant="outline" className="h-auto p-6 flex-col space-y-2">
            <Link href="/explore">
              <BookOpen className="h-8 w-8" />
              <span>Explorer</span>
            </Link>
          </Button>
          
          <Button asChild variant="outline" className="h-auto p-6 flex-col space-y-2">
            <Link href="/dashboard/subscription">
              <Crown className="h-8 w-8" />
              <span>Mon Abonnement</span>
            </Link>
          </Button>
        </div>

        {/* Premium CTA (if user is not premium) */}
        <div className="mt-8 bg-gradient-to-r from-umedify-primary to-umedify-accent rounded-2xl p-8 text-center">
          <Crown className="h-12 w-12 text-white mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">
            Passez au Premium
          </h2>
          <p className="text-white/90 mb-6">
            Accédez à toutes les ressources exclusives et à l&apos;assistant IA
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/pricing">
              Découvrir Premium
            </Link>
          </Button>
        </div>
      </div>
    </DashboardLayout>
  )
}
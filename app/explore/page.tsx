import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Search, Filter, BookOpen, FileText, FlaskConical } from "lucide-react"

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-umedify-background">
      <Navbar />
      
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-umedify-text mb-4">
            Explorer les Ressources
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Découvrez des milliers de ressources éducatives partagées par la communauté étudiante
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-2xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-umedify-primary focus:border-umedify-primary sm:text-sm"
                placeholder="Rechercher des cours, TDs, TPs..."
              />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-umedify-primary" />
              <span className="font-medium text-umedify-text">Filtres:</span>
            </div>
            <select className="rounded-xl border-gray-300 focus:border-umedify-primary focus:ring-umedify-primary">
              <option>Toutes les universités</option>
              <option>USTHB</option>
              <option>USTO</option>
              <option>UMMTO</option>
            </select>
            <select className="rounded-xl border-gray-300 focus:border-umedify-primary focus:ring-umedify-primary">
              <option>Toutes les spécialités</option>
              <option>Médecine</option>
              <option>Informatique</option>
              <option>Génie Civil</option>
            </select>
            <select className="rounded-xl border-gray-300 focus:border-umedify-primary focus:ring-umedify-primary">
              <option>Toutes les années</option>
              <option>1ère année</option>
              <option>2ème année</option>
              <option>3ème année</option>
            </select>
            <select className="rounded-xl border-gray-300 focus:border-umedify-primary focus:ring-umedify-primary">
              <option>Tous les types</option>
              <option>Cours</option>
              <option>TD</option>
              <option>TP</option>
            </select>
          </div>
        </div>

        {/* Resource Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Sample Resource Cards */}
          {[
            { title: "Analyse Mathématique - Chapitre 1", type: "Cours", year: "1ère année", specialty: "Mathématiques", icon: BookOpen, isPremium: false },
            { title: "TD Algorithmes et Structures de Données", type: "TD", year: "2ème année", specialty: "Informatique", icon: FileText, isPremium: true },
            { title: "TP Chimie Organique", type: "TP", year: "3ème année", specialty: "Chimie", icon: FlaskConical, isPremium: false },
            { title: "Cours de Physiologie Humaine", type: "Cours", year: "2ème année", specialty: "Médecine", icon: BookOpen, isPremium: true },
            { title: "TD Mécanique des Fluides", type: "TD", year: "4ème année", specialty: "Génie Civil", icon: FileText, isPremium: false },
            { title: "TP Électronique Analogique", type: "TP", year: "3ème année", specialty: "Électronique", icon: FlaskConical, isPremium: true },
          ].map((resource, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-umedify-primary/10">
                      <resource.icon className="h-4 w-4 text-umedify-primary" />
                    </div>
                    <span className="ml-2 text-sm font-medium text-umedify-primary">{resource.type}</span>
                  </div>
                  {resource.isPremium && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-umedify-accent/20 text-umedify-primary">
                      Premium
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-umedify-text mb-2 line-clamp-2">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{resource.specialty} • {resource.year}</p>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-xs text-gray-500">
                    Téléchargé 245 fois
                  </div>
                  <Button size="sm" variant={resource.isPremium ? "default" : "outline"}>
                    {resource.isPremium ? "Premium" : "Télécharger"}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Charger plus de ressources
          </Button>
        </div>

        {/* Premium CTA */}
        <div className="mt-16 bg-gradient-to-r from-umedify-primary to-umedify-accent rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Accédez à toutes les ressources premium
          </h2>
          <p className="text-white/90 mb-6">
            Plus de 1000 ressources exclusives et l&apos;assistant IA pour vous accompagner
          </p>
          <Button variant="secondary" size="lg">
            Découvrir Premium
          </Button>
        </div>
      </div>
    </div>
  )
}
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Brain } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-umedify-text leading-tight">
              <span className="gradient-text">Explorez, Apprenez</span>
              <br />
              et <span className="gradient-text">Réussissez</span>
              <br />
              avec UMEDIFY
            </h1>
            
            <p className="text-xl text-gray-600 mt-6 leading-relaxed">
              Votre plateforme éducative de confiance pour les étudiants algériens — 
              Cours, TDs et TPs pour toutes les filières.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-umedify-primary hover:bg-umedify-secondary text-white px-8 py-3 rounded-2xl text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
                asChild
              >
                <Link href="/auth/signup">
                  Commencer Maintenant
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-umedify-primary text-umedify-primary hover:bg-umedify-primary hover:text-white px-8 py-3 rounded-2xl text-lg font-semibold transition-all duration-200"
                asChild
              >
                <Link href="#features">
                  Parcourir les Ressources
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-purple-200">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">1000+</div>
                <div className="text-sm text-gray-600">Étudiants</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">500+</div>
                <div className="text-sm text-gray-600">Ressources</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">50+</div>
                <div className="text-sm text-gray-600">Universités</div>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="space-y-6">
                {/* Mock Resource Cards */}
                <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-2xl">
                  <div className="w-12 h-12 bg-umedify-primary rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-umedify-text">Cours de Mathématiques</div>
                    <div className="text-sm text-gray-600">Analyse • L1 Informatique</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-indigo-50 rounded-2xl">
                  <div className="w-12 h-12 bg-umedify-secondary rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-umedify-text">TP Chimie Organique</div>
                    <div className="text-sm text-gray-600">Médecine • L2</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-2xl">
                  <div className="w-12 h-12 bg-umedify-accent rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-umedify-text">Assistant IA</div>
                    <div className="text-sm text-gray-600">Premium • Tous niveaux</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-umedify-primary rounded-full opacity-80"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-umedify-accent rounded-full opacity-60"></div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-umedify-primary to-umedify-accent opacity-10 rounded-3xl -z-10 transform translate-x-4 translate-y-4"></div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-gradient-to-br from-umedify-primary/10 to-transparent rounded-full"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-gradient-to-tr from-umedify-accent/10 to-transparent rounded-full"></div>
      </div>
    </section>
  );
}
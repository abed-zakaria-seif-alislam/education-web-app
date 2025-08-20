import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Users, BookOpen, Star } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-r from-umedify-primary to-umedify-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Rejoignez des Milliers d'Étudiants
            <br />
            qui Utilisent <span className="text-purple-200">UMEDIFY</span> Quotidiennement
          </h2>
          
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ne ratez plus vos opportunités d'apprentissage. Accédez dès maintenant à la plus grande 
            bibliothèque de ressources éducatives pour étudiants algériens.
          </p>

          {/* Stats Row */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12 mb-12">
            <div className="flex items-center space-x-3 text-white/90">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-purple-200">Étudiants Actifs</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-white/90">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-purple-200">Ressources Premium</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-white/90">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold">4.9/5</div>
                <div className="text-purple-200">Note Moyenne</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-umedify-primary hover:bg-gray-100 px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200 group"
              asChild
            >
              <Link href="/auth/signup" className="flex items-center space-x-2">
                <span>S'inscrire Maintenant</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-umedify-primary px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-200"
              asChild
            >
              <Link href="#pricing">
                Voir les Abonnements
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-purple-200 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
              <span>Inscription gratuite en 2 minutes</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
              <span>Aucun engagement à long terme</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
              <span>Support 24/7 en français et arabe</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Circles */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 right-20 w-32 h-32 bg-white/5 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/5 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        
        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-umedify-primary/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-umedify-secondary/20 to-transparent"></div>
        
        {/* Wave Pattern */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              className="fill-current text-white/10"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
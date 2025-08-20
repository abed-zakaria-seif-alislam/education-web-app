import { UserPlus, Search, CreditCard, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Inscrivez-vous et Choisissez votre Filière",
    description: "Créez votre compte gratuit, sélectionnez votre université, département et année d'étude pour personnaliser votre expérience.",
    color: "from-purple-500 to-purple-600"
  },
  {
    number: "02",
    icon: Search,
    title: "Explorez et Téléchargez du Contenu",
    description: "Parcourez notre bibliothèque organisée de cours, TDs et TPs. Téléchargez les ressources publiques ou contribuez en uploadant vos propres documents.",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Passez au Premium pour un Accès Complet",
    description: "Abonnez-vous via BaridiMob ou CCP pour débloquer toutes les ressources premium, l'assistant IA et le support prioritaire.",
    color: "from-purple-600 to-pink-600"
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Chattez avec l'IA et Excellez",
    description: "Posez vos questions à Dr. Medibot, notre assistant IA multilingue, et bénéficiez d'un accompagnement personnalisé dans vos études.",
    color: "from-emerald-500 to-emerald-600"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-umedify-text">
            Comment <span className="gradient-text">Ça Marche</span>
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            Quatre étapes simples pour transformer votre expérience d'apprentissage
          </p>
        </div>

        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="relative h-0.5 bg-gradient-to-r from-umedify-primary via-umedify-accent to-umedify-secondary opacity-30"></div>
            <div className="absolute inset-0 h-0.5 bg-gradient-to-r from-umedify-primary via-umedify-accent to-umedify-secondary animate-pulse"></div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 1;

              return (
                <div
                  key={index}
                  className={`relative group ${isEven ? 'lg:mt-16' : ''}`}
                >
                  {/* Step Card */}
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100 relative z-10">
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-umedify-primary to-umedify-secondary rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">
                        {step.number}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-umedify-text mb-4 text-center group-hover:text-umedify-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed text-center">
                      {step.description}
                    </p>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-umedify-primary/5 to-umedify-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Arrow for Mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-8">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-umedify-primary to-umedify-accent"></div>
                      <div className="absolute mt-6 w-2 h-2 bg-umedify-primary rounded-full transform -translate-x-0.5"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Success Stories Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-umedify-text mb-4">
                Témoignages d'Étudiants
              </h3>
              <p className="text-gray-600 text-lg">
                Découvrez comment UMEDIFY transforme l'expérience d'apprentissage
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-umedify-primary to-umedify-accent rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">A</span>
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-umedify-text">Ahmed</div>
                    <div className="text-sm text-gray-600">L2 Médecine, Alger</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "UMEDIFY m'a sauvé pendant mes examens. L'assistant IA répond à toutes mes questions complexes en anatomie !"
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-umedify-primary to-umedify-accent rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">F</span>
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-umedify-text">Fatima</div>
                    <div className="text-sm text-gray-600">L3 Informatique, Oran</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Interface claire, ressources bien organisées. Je trouve tous mes TPs et corrigés en quelques clics."
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-umedify-primary to-umedify-accent rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">K</span>
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-umedify-text">Karim</div>
                    <div className="text-sm text-gray-600">M1 Droit, Constantine</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Le système multilingue est parfait. Je peux étudier en français et poser mes questions en arabe."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
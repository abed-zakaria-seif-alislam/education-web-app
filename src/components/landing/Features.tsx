import { GraduationCap, Shield, Brain, CreditCard } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Organisé par Filière, Année, Université",
    description: "Trouvez facilement vos ressources classées par université, département et année d'étude. Accès structuré pour tous les domaines : Médecine, Ingénierie, Droit, et plus.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Shield,
    title: "Ressources Gratuites & Premium",
    description: "Accédez aux ressources publiques gratuitement ou déverrouillez tout le contenu avec un abonnement premium. Contrôle de qualité et modération par nos admins.",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    icon: Brain,
    title: "Assistant IA Intelligent (Premium)",
    description: "Posez vos questions d'étude à notre assistant IA multilingue \"Dr. Medibot\". Obtenez des réponses personnalisées en français, arabe ou anglais.",
    color: "from-purple-600 to-pink-600"
  },
  {
    icon: CreditCard,
    title: "Système de Paiement Simple",
    description: "Abonnements flexibles via BaridiMob ou CCP. Paiement manuel vérifié par nos admins pour votre sécurité. Tarifs adaptés aux étudiants algériens.",
    color: "from-emerald-500 to-emerald-600"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-umedify-text">
            Fonctionnalités <span className="gradient-text">Puissantes</span>
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            Découvrez tout ce que UMEDIFY offre pour améliorer votre parcours éducatif
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-umedify-text mb-4 group-hover:text-umedify-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-umedify-primary/5 to-umedify-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Corner Decoration */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-umedify-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-umedify-text mb-4">
              Prêt à commencer votre parcours d'apprentissage ?
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Rejoignez des milliers d'étudiants algériens qui utilisent UMEDIFY quotidiennement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-umedify-primary">
                <div className="w-2 h-2 bg-umedify-primary rounded-full"></div>
                <span className="font-semibold">Inscription gratuite</span>
              </div>
              <div className="flex items-center space-x-2 text-umedify-primary">
                <div className="w-2 h-2 bg-umedify-primary rounded-full"></div>
                <span className="font-semibold">Accès immédiat aux ressources publiques</span>
              </div>
              <div className="flex items-center space-x-2 text-umedify-primary">
                <div className="w-2 h-2 bg-umedify-primary rounded-full"></div>
                <span className="font-semibold">Support multilingue</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Button } from "@/components/ui/button";
import { Check, Star, Crown } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    name: "Gratuit",
    price: "0",
    period: "DZD",
    description: "Parfait pour commencer",
    features: [
      "Accès aux ressources publiques",
      "Navigation par filière et université",
      "Téléchargements limités",
      "Support communautaire",
      "Interface multilingue"
    ],
    cta: "Commencer Gratuitement",
    href: "/auth/signup",
    popular: false,
    icon: Star
  },
  {
    name: "Semestriel",
    price: "500",
    period: "DZD / 4 mois",
    description: "Idéal pour un semestre",
    features: [
      "Tout du plan gratuit",
      "Accès à toutes les ressources premium",
      "Assistant IA \"Dr. Medibot\"",
      "Téléchargements illimités",
      "Support prioritaire",
      "Contenu exclusif par département",
      "Accès aux examens et corrigés"
    ],
    cta: "Choisir Semestriel",
    href: "/auth/signup?plan=semester",
    popular: true,
    icon: Crown
  },
  {
    name: "Annuel",
    price: "1000",
    period: "DZD / 12 mois",
    description: "Meilleur rapport qualité-prix",
    features: [
      "Tout du plan semestriel",
      "Économisez 500 DZD par rapport à 3 abonnements semestriels",
      "Accès anticipé aux nouvelles fonctionnalités",
      "Sessions de mentorat en ligne",
      "Certificats de completion",
      "Groupes d'étude privés",
      "Statistiques d'apprentissage avancées"
    ],
    cta: "Choisir Annuel",
    href: "/auth/signup?plan=yearly",
    popular: false,
    icon: Crown
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-umedify-text">
            Tarifs <span className="gradient-text">Adaptés</span> aux Étudiants
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            Choisissez le plan qui correspond le mieux à vos besoins académiques
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                  plan.popular 
                    ? 'border-umedify-primary shadow-2xl scale-105' 
                    : 'border-purple-100'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-umedify-primary to-umedify-secondary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Le plus populaire
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-umedify-primary to-umedify-secondary' 
                      : 'bg-gradient-to-r from-gray-400 to-gray-500'
                  }`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-umedify-text mb-2">
                    {plan.name}
                  </h3>
                  
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-umedify-text">
                      {plan.price}
                    </span>
                    <span className="text-gray-500 ml-2">
                      {plan.period}
                    </span>
                  </div>
                  
                  <p className="text-gray-600">
                    {plan.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                        plan.popular 
                          ? 'bg-umedify-primary' 
                          : 'bg-gray-200'
                      }`}>
                        <Check className={`w-3 h-3 ${
                          plan.popular ? 'text-white' : 'text-gray-600'
                        }`} />
                      </div>
                      <span className="text-gray-700 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={`w-full py-3 rounded-2xl font-semibold text-lg transition-all duration-200 ${
                    plan.popular
                      ? 'bg-umedify-primary hover:bg-umedify-secondary text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                      : 'bg-gray-100 text-umedify-text hover:bg-umedify-primary hover:text-white'
                  }`}
                  asChild
                >
                  <Link href={plan.href}>
                    {plan.cta}
                  </Link>
                </Button>
              </div>
            );
          })}
        </div>

        {/* Payment Methods */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-umedify-text mb-8">
            Méthodes de Paiement Acceptées
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-3 bg-white rounded-2xl px-6 py-4 shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <span className="text-green-600 font-bold text-lg">B</span>
              </div>
              <div>
                <div className="font-semibold text-umedify-text">BaridiMob</div>
                <div className="text-sm text-gray-600">Paiement mobile</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 bg-white rounded-2xl px-6 py-4 shadow-md">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <span className="text-yellow-600 font-bold text-lg">CCP</span>
              </div>
              <div>
                <div className="font-semibold text-umedify-text">La Poste</div>
                <div className="text-sm text-gray-600">Virement CCP</div>
              </div>
            </div>
          </div>
          
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Téléchargez votre preuve de paiement après la transaction. 
            Nos admins vérifieront et activeront votre compte premium sous 24h.
          </p>
        </div>
      </div>
    </section>
  );
}
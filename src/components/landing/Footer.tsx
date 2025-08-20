import Link from "next/link";
import { Globe, Mail, MapPin, Phone } from "lucide-react";

const languages = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ar', name: 'العربية', flag: '🇩🇿' },
  { code: 'en', name: 'English', flag: '🇬🇧' }
];

const footerLinks = {
  platform: {
    title: "Plateforme",
    links: [
      { name: "Fonctionnalités", href: "#features" },
      { name: "Tarifs", href: "#pricing" },
      { name: "Comment ça marche", href: "#how-it-works" },
      { name: "Assistant IA", href: "/ai-chat" }
    ]
  },
  resources: {
    title: "Ressources",
    links: [
      { name: "Parcourir les Cours", href: "/dashboard" },
      { name: "TDs & TPs", href: "/dashboard" },
      { name: "Examens", href: "/dashboard" },
      { name: "Uploader du Contenu", href: "/dashboard/upload" }
    ]
  },
  support: {
    title: "Support",
    links: [
      { name: "Centre d'Aide", href: "/help" },
      { name: "Contact", href: "/contact" },
      { name: "FAQ", href: "/faq" },
      { name: "Signaler un Problème", href: "/report" }
    ]
  },
  legal: {
    title: "Légal",
    links: [
      { name: "Conditions d'Utilisation", href: "/terms" },
      { name: "Politique de Confidentialité", href: "/privacy" },
      { name: "Cookies", href: "/cookies" },
      { name: "Mentions Légales", href: "/legal" }
    ]
  }
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="bg-gradient-to-r from-umedify-primary to-umedify-accent rounded-lg p-2">
                  <span className="text-white font-bold text-xl">U</span>
                </div>
                <span className="text-2xl font-bold text-white">UMEDIFY</span>
              </Link>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                La plateforme éducative de référence pour les étudiants algériens. 
                Accédez à des milliers de ressources académiques et bénéficiez 
                d'un accompagnement IA personnalisé.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4" />
                  <span>Alger, Algérie</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4" />
                  <span>contact@umedify.dz</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4" />
                  <span>+213 xxx xxx xxx</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key}>
                <h3 className="text-white font-semibold text-lg mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <Link 
                        href={link.href}
                        className="text-gray-300 hover:text-umedify-accent transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-300 text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} UMEDIFY. Tous droits réservés.</p>
              <p className="text-sm text-gray-400 mt-1">
                Développé avec ❤️ pour les étudiants algériens
              </p>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <Globe className="w-4 h-4" />
                <span className="text-sm">Langue:</span>
              </div>
              <div className="flex items-center space-x-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className="flex items-center space-x-1 px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200 text-sm"
                  >
                    <span>{lang.flag}</span>
                    <span className="text-gray-300">{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Banner */}
        <div className="border-t border-gray-800 py-6">
          <div className="bg-gradient-to-r from-umedify-primary/20 to-umedify-accent/20 rounded-2xl p-6">
            <div className="text-center">
              <h4 className="text-white font-semibold text-lg mb-2">
                🎓 Plateforme Étudiante 100% Algérienne
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                UMEDIFY est conçu spécifiquement pour les étudiants algériens, 
                avec un support multilingue (français, arabe, anglais) et des tarifs adaptés. 
                Rejoignez notre communauté grandissante d'apprenants passionnés !
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
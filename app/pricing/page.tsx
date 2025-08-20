import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Check, Crown, Star } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-umedify-background">
      <Navbar />
      
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-umedify-text mb-4">
            Choisissez votre abonnement
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Accédez aux meilleures ressources éducatives pour réussir vos études
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid max-w-4xl mx-auto gap-8 lg:grid-cols-3 lg:gap-6">
          {/* Free Plan */}
          <div className="bg-white rounded-2xl shadow-md p-8 border-2 border-transparent">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-umedify-text">Gratuit</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-umedify-text">0</span>
                <span className="text-lg text-gray-600 ml-1">DZD</span>
              </div>
              <p className="text-gray-600 mt-2">Pour commencer</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Accès aux ressources publiques</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Téléchargement limité (5/jour)</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Support communautaire</span>
              </li>
              <li className="flex items-center text-gray-400">
                <span className="h-5 w-5 mr-3">✕</span>
                <span>Assistant IA</span>
              </li>
              <li className="flex items-center text-gray-400">
                <span className="h-5 w-5 mr-3">✕</span>
                <span>Ressources premium</span>
              </li>
            </ul>

            <Button variant="outline" className="w-full" size="lg" asChild>
              <Link href="/auth/signup">
                Commencer gratuitement
              </Link>
            </Button>
          </div>

          {/* Semester Plan */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-umedify-primary relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-umedify-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                Populaire
              </span>
            </div>
            
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-6 w-6 text-umedify-primary mr-2" />
                <h3 className="text-2xl font-bold text-umedify-text">Semestriel</h3>
              </div>
              <div className="mt-4">
                <span className="text-4xl font-bold text-umedify-primary">500</span>
                <span className="text-lg text-gray-600 ml-1">DZD</span>
              </div>
              <p className="text-gray-600 mt-2">Pour ~4 mois</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-umedify-primary mr-3" />
                <span className="text-gray-700 font-medium">Tout du plan gratuit</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-umedify-primary mr-3" />
                <span className="text-gray-700">Accès à toutes les ressources premium</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-umedify-primary mr-3" />
                <span className="text-gray-700">Assistant IA &ldquo;Dr. Medibot&rdquo;</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-umedify-primary mr-3" />
                <span className="text-gray-700">Téléchargements illimités</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-umedify-primary mr-3" />
                <span className="text-gray-700">Support prioritaire</span>
              </li>
            </ul>

            <Button className="w-full" size="lg" asChild>
              <Link href="/dashboard/subscription">
                Choisir Semestriel
              </Link>
            </Button>
          </div>

          {/* Annual Plan */}
          <div className="bg-white rounded-2xl shadow-md p-8 border-2 border-transparent relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Meilleure valeur
              </span>
            </div>
            
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-2">
                <Crown className="h-6 w-6 text-umedify-secondary mr-2" />
                <h3 className="text-2xl font-bold text-umedify-text">Annuel</h3>
              </div>
              <div className="mt-4">
                <span className="text-4xl font-bold text-umedify-secondary">1000</span>
                <span className="text-lg text-gray-600 ml-1">DZD</span>
              </div>
              <p className="text-gray-600 mt-2">Pour ~12 mois</p>
              <div className="bg-green-100 text-green-800 text-sm rounded-lg px-3 py-1 mt-2 inline-block">
                Économisez 1000 DZD
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-umedify-secondary mr-3" />
                <span className="text-gray-700 font-medium">Tout du plan semestriel</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-umedify-secondary mr-3" />
                <span className="text-gray-700">Accès prioritaire aux nouvelles ressources</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-umedify-secondary mr-3" />
                <span className="text-gray-700">Sessions IA étendues</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-umedify-secondary mr-3" />
                <span className="text-gray-700">Badge VIP dans la communauté</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-umedify-secondary mr-3" />
                <span className="text-gray-700">Support premium 24/7</span>
              </li>
            </ul>

            <Button variant="secondary" className="w-full" size="lg" asChild>
              <Link href="/dashboard/subscription">
                Choisir Annuel
              </Link>
            </Button>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-16 bg-white rounded-2xl shadow-md p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-umedify-text mb-6 text-center">
            Méthodes de paiement acceptées
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-lg font-semibold text-umedify-text mb-2">BaridiMob</h3>
              <p className="text-gray-600">Paiement mobile sécurisé via l&apos;application BaridiMob</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏪</span>
              </div>
              <h3 className="text-lg font-semibold text-umedify-text mb-2">CCP</h3>
              <p className="text-gray-600">Virement via votre compte CCP habituel</p>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-gray-50 rounded-xl">
            <h4 className="font-semibold text-umedify-text mb-2">Comment ça marche ?</h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li>Choisissez votre plan et cliquez sur &ldquo;Choisir&rdquo;</li>
              <li>Effectuez le paiement via BaridiMob ou CCP</li>
              <li>Téléchargez et soumettez votre reçu de paiement</li>
              <li>Notre équipe vérifie et active votre abonnement sous 24h</li>
            </ol>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-umedify-text mb-8 text-center">
            Questions fréquentes
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-semibold text-umedify-text mb-2">
                Puis-je annuler mon abonnement ?
              </h3>
              <p className="text-gray-600">
                Oui, vous pouvez nous contacter à tout moment pour annuler votre abonnement. 
                Les remboursements sont traités selon nos conditions d&apos;utilisation.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-semibold text-umedify-text mb-2">
                L&apos;assistant IA est-il disponible 24h/24 ?
              </h3>
              <p className="text-gray-600">
                Oui, l&apos;assistant IA &ldquo;Dr. Medibot&rdquo; est disponible 24h/24 et 7j/7 pour répondre 
                à vos questions académiques en français, arabe ou anglais.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-semibold text-umedify-text mb-2">
                Combien de temps prend la vérification du paiement ?
              </h3>
              <p className="text-gray-600">
                La vérification des paiements se fait manuellement par notre équipe et prend 
                généralement entre 2 et 24 heures pendant les jours ouvrables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
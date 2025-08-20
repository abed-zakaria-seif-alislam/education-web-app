import { Button } from "@/components/ui/button"
import { 
  GraduationCap, 
  BookOpen, 
  Brain, 
  CreditCard,
  ArrowRight,
  Check
} from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-umedify-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-umedify-primary/10 via-umedify-accent/5 to-transparent">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-umedify-text sm:text-6xl">
              Explorez, Apprenez, et 
              <span className="text-umedify-primary"> Réussissez</span> avec UMEDIFY
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Votre plateforme éducative de confiance pour les étudiants algériens — 
              Cours, TDs, et TPs pour toutes les spécialités.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/auth/signup">
                  Commencer <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/explore">
                  Explorer les Ressources
                </Link>
              </Button>
            </div>
          </div>
          <div className="mt-16 flow-root sm:mt-24">
            <div className="rounded-2xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <div className="aspect-video rounded-xl bg-white shadow-2xl ring-1 ring-gray-900/10 flex items-center justify-center">
                <div className="flex items-center space-x-4 text-umedify-primary">
                  <GraduationCap className="h-16 w-16" />
                  <div>
                    <h3 className="text-2xl font-bold">UMEDIFY</h3>
                    <p className="text-gray-600">Plateforme Éducative</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32" id="features">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-umedify-primary">
              Fonctionnalités
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-umedify-text sm:text-4xl">
              Tout ce dont vous avez besoin pour réussir
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-umedify-text">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-2xl bg-umedify-primary">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  Organisé par Spécialité et Année
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Ressources classées par université, département et année d&apos;étude (1-7).
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-umedify-text">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-2xl bg-umedify-primary">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  Ressources Gratuites &amp; Premium
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Accédez aux ressources publiques gratuitement ou profitez de l&apos;accès complet avec Premium.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-umedify-text">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-2xl bg-umedify-primary">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  Assistant IA Intelligent
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Posez des questions sur vos études avec notre IA premium &ldquo;Dr. Medibot&rdquo;.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-umedify-text">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-2xl bg-umedify-primary">
                    <CreditCard className="h-6 w-6 text-white" />
                  </div>
                  Paiement Simple
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Abonnement facile via BaridiMob ou CCP avec vérification manuelle.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 sm:py-32 bg-white" id="pricing">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-umedify-text sm:text-4xl">
              Abonnements
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Choisissez l&apos;abonnement qui convient à vos besoins d&apos;études
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-umedify-text">
                Accès Premium
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Accès complet à toutes les ressources et à l&apos;assistant IA
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-umedify-primary">
                  Inclus
                </h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                {[
                  "Toutes les ressources premium",
                  'Assistant IA "Dr. Medibot"',
                  "Téléchargements illimités",
                  "Support prioritaire", 
                  "Accès multi-spécialités",
                  "Ressources récentes",
                ].map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none text-umedify-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">
                    Plans disponibles
                  </p>
                  <div className="mt-6 space-y-4">
                    <div className="rounded-2xl border border-umedify-primary/20 bg-white p-4">
                      <p className="text-lg font-semibold text-umedify-text">
                        Semestriel
                      </p>
                      <p className="text-3xl font-bold text-umedify-primary">
                        500 DZD
                      </p>
                      <p className="text-sm text-gray-600">
                        ~4 mois d&apos;accès
                      </p>
                    </div>
                    <div className="rounded-2xl border-2 border-umedify-primary bg-umedify-primary/5 p-4">
                      <p className="text-lg font-semibold text-umedify-text">
                        Annuel
                      </p>
                      <p className="text-3xl font-bold text-umedify-primary">
                        1000 DZD
                      </p>
                      <p className="text-sm text-umedify-primary font-medium">
                        ~12 mois d&apos;accès
                      </p>
                    </div>
                  </div>
                  <Button className="mt-10 w-full" size="lg" asChild>
                    <Link href="/dashboard/subscription">
                      S&apos;abonner maintenant
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 sm:py-32" id="how-it-works">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-umedify-primary">
              Comment ça marche
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-umedify-text sm:text-4xl">
              Commencez en 4 étapes simples
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4 lg:gap-y-16">
              {[
                {
                  name: 'Inscrivez-vous',
                  description: 'Créez votre compte et choisissez votre spécialité',
                  step: '1'
                },
                {
                  name: 'Explorez',
                  description: 'Parcourez les ressources publiques ou téléchargez du contenu',
                  step: '2'
                },
                {
                  name: 'Abonnez-vous',
                  description: 'Passez au Premium pour un accès complet',
                  step: '3'
                },
                {
                  name: 'Réussissez',
                  description: 'Utilisez l&apos;IA et téléchargez tous les fichiers premium',
                  step: '4'
                }
              ].map((step) => (
                <div key={step.name} className="relative pl-16 lg:pl-0 lg:text-center">
                  <dt className="text-base font-semibold leading-7 text-umedify-text">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-2xl bg-umedify-primary lg:relative lg:mx-auto lg:mb-4">
                      <span className="text-white font-bold">{step.step}</span>
                    </div>
                    {step.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {step.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-umedify-primary">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Rejoignez des milliers d&apos;étudiants algériens
              <br />
              utilisant UMEDIFY quotidiennement
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-umedify-accent/90">
              Commencez dès aujourd&apos;hui et accédez aux meilleures ressources éducatives pour votre spécialité.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/auth/signup">
                  S&apos;inscrire maintenant
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-umedify-primary" asChild>
                <Link href="/pricing">
                  Voir les abonnements
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link href="/about" className="text-gray-400 hover:text-umedify-primary">
              À propos
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-umedify-primary">
              Contact
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-umedify-primary">
              Conditions
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-umedify-primary">
              Confidentialité
            </Link>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500">
              &copy; 2024 UMEDIFY. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

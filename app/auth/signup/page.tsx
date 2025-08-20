import { Button } from "@/components/ui/button"
import { GraduationCap } from "lucide-react"
import Link from "next/link"

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-umedify-background flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex items-center justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-umedify-primary">
            <GraduationCap className="h-7 w-7 text-white" />
          </div>
          <span className="ml-3 text-2xl font-bold text-umedify-text">UMEDIFY</span>
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-umedify-text">
          Créez votre compte
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Ou{' '}
          <Link href="/auth/login" className="font-medium text-umedify-primary hover:text-umedify-secondary">
            connectez-vous à votre compte existant
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-md rounded-2xl sm:px-10">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="full-name" className="block text-sm font-medium text-umedify-text">
                Nom complet
              </label>
              <div className="mt-1">
                <input
                  id="full-name"
                  name="full-name"
                  type="text"
                  autoComplete="name"
                  required
                  className="block w-full appearance-none rounded-2xl border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-umedify-primary focus:outline-none focus:ring-umedify-primary sm:text-sm"
                  placeholder="Ahmed Ben Mohamed"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-umedify-text">
                Adresse email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full appearance-none rounded-2xl border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-umedify-primary focus:outline-none focus:ring-umedify-primary sm:text-sm"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="university" className="block text-sm font-medium text-umedify-text">
                Université
              </label>
              <div className="mt-1">
                <select
                  id="university"
                  name="university"
                  required
                  className="block w-full appearance-none rounded-2xl border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-umedify-primary focus:outline-none focus:ring-umedify-primary sm:text-sm"
                >
                  <option value="">Sélectionnez votre université</option>
                  <option value="usthb">USTHB - Université des Sciences et de la Technologie</option>
                  <option value="usto">USTO - Université des Sciences et Technologies d&apos;Oran</option>
                  <option value="ummto">UMMTO - Université Mouloud Mammeri de Tizi-Ouzou</option>
                  <option value="constantine">Université Frères Mentouri Constantine</option>
                  <option value="oran">Université d&apos;Oran Ahmed Ben Bella</option>
                  <option value="other">Autre</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="department" className="block text-sm font-medium text-umedify-text">
                Spécialité
              </label>
              <div className="mt-1">
                <select
                  id="department"
                  name="department"
                  required
                  className="block w-full appearance-none rounded-2xl border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-umedify-primary focus:outline-none focus:ring-umedify-primary sm:text-sm"
                >
                  <option value="">Sélectionnez votre spécialité</option>
                  <option value="medecine">Médecine</option>
                  <option value="informatique">Informatique</option>
                  <option value="genie-civil">Génie Civil</option>
                  <option value="droit">Droit</option>
                  <option value="economie">Économie</option>
                  <option value="mathematiques">Mathématiques</option>
                  <option value="physique">Physique</option>
                  <option value="chimie">Chimie</option>
                  <option value="biologie">Biologie</option>
                  <option value="other">Autre</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="year" className="block text-sm font-medium text-umedify-text">
                Année d&apos;étude
              </label>
              <div className="mt-1">
                <select
                  id="year"
                  name="year"
                  required
                  className="block w-full appearance-none rounded-2xl border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-umedify-primary focus:outline-none focus:ring-umedify-primary sm:text-sm"
                >
                  <option value="">Sélectionnez votre année</option>
                  <option value="1">1ère année</option>
                  <option value="2">2ème année</option>
                  <option value="3">3ème année</option>
                  <option value="4">4ème année</option>
                  <option value="5">5ème année</option>
                  <option value="6">6ème année</option>
                  <option value="7">7ème année</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-umedify-text">
                Mot de passe
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="block w-full appearance-none rounded-2xl border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-umedify-primary focus:outline-none focus:ring-umedify-primary sm:text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-umedify-text">
                Confirmer le mot de passe
              </label>
              <div className="mt-1">
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="block w-full appearance-none rounded-2xl border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-umedify-primary focus:outline-none focus:ring-umedify-primary sm:text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 rounded border-gray-300 text-umedify-primary focus:ring-umedify-primary"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                J&apos;accepte les{' '}
                <Link href="/terms" className="text-umedify-primary hover:text-umedify-secondary">
                  conditions d&apos;utilisation
                </Link>{' '}
                et la{' '}
                <Link href="/privacy" className="text-umedify-primary hover:text-umedify-secondary">
                  politique de confidentialité
                </Link>
              </label>
            </div>

            <div>
              <Button type="submit" className="w-full" size="lg">
                Créer le compte
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Déjà un compte ?{' '}
              <Link href="/auth/login" className="font-medium text-umedify-primary hover:text-umedify-secondary">
                Se connecter
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-sm text-gray-600 hover:text-umedify-primary">
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  )
}
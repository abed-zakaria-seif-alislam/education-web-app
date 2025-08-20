import { Button } from "@/components/ui/button"
import { GraduationCap } from "lucide-react"
import Link from "next/link"

export default function ResetPasswordPage() {
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
          Réinitialiser votre mot de passe
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Entrez votre adresse email et nous vous enverrons un lien pour réinitialiser votre mot de passe.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-md rounded-2xl sm:px-10">
          <form className="space-y-6" action="#" method="POST">
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
              <Button type="submit" className="w-full" size="lg">
                Envoyer le lien de réinitialisation
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center space-y-4">
            <p className="text-sm text-gray-600">
              Vous vous souvenez de votre mot de passe ?{' '}
              <Link href="/auth/login" className="font-medium text-umedify-primary hover:text-umedify-secondary">
                Se connecter
              </Link>
            </p>
            <p className="text-sm text-gray-600">
              Pas encore de compte ?{' '}
              <Link href="/auth/signup" className="font-medium text-umedify-primary hover:text-umedify-secondary">
                S&apos;inscrire
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
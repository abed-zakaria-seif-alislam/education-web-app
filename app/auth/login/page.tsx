import { Button } from "@/components/ui/button"
import { GraduationCap } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
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
          Connectez-vous à votre compte
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Ou{' '}
          <Link href="/auth/signup" className="font-medium text-umedify-primary hover:text-umedify-secondary">
            créez un nouveau compte
          </Link>
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
              <label htmlFor="password" className="block text-sm font-medium text-umedify-text">
                Mot de passe
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full appearance-none rounded-2xl border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-umedify-primary focus:outline-none focus:ring-umedify-primary sm:text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-umedify-primary focus:ring-umedify-primary"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Se souvenir de moi
                </label>
              </div>

              <div className="text-sm">
                <Link href="/auth/reset-password" className="font-medium text-umedify-primary hover:text-umedify-secondary">
                  Mot de passe oublié ?
                </Link>
              </div>
            </div>

            <div>
              <Button type="submit" className="w-full" size="lg">
                Se connecter
              </Button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">Ou continuer avec</span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Pas encore de compte ?{' '}
                <Link href="/auth/signup" className="font-medium text-umedify-primary hover:text-umedify-secondary">
                  S&apos;inscrire maintenant
                </Link>
              </p>
            </div>
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
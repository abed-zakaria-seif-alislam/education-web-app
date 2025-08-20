"use client"

import { useState } from "react"
import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Upload, CheckCircle, Clock, Crown, AlertCircle, CreditCard } from "lucide-react"

export default function SubscriptionPage() {
  const [selectedPlan, setSelectedPlan] = useState<'semester' | 'annual' | null>(null)
  const [paymentMethod, setPaymentMethod] = useState<'baridimob' | 'ccp' | null>(null)
  const [proofFile, setProofFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Mock user subscription status
  const userStatus = {
    isPremium: false, // Change to true to show premium status
    currentPlan: null,
    expiryDate: null,
    pendingPayment: false // Change to true to show pending payment
  }

  const plans = [
    {
      id: 'semester' as const,
      name: 'Semestriel',
      price: 500,
      duration: '~4 mois',
      popular: true
    },
    {
      id: 'annual' as const,
      name: 'Annuel',
      price: 1000,
      duration: '~12 mois',
      popular: false
    }
  ]

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setProofFile(file)
    }
  }

  const handleSubmitPayment = async () => {
    if (!selectedPlan || !paymentMethod || !proofFile) return

    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      // Reset form or show success message
      alert('Votre demande de paiement a été soumise! Notre équipe la vérifiera sous 24h.')
    }, 2000)
  }

  if (userStatus.isPremium) {
    return (
      <DashboardLayout>
        <div className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Crown className="h-16 w-16 text-umedify-primary mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-umedify-text">Abonnement Premium Actif</h1>
              <p className="text-gray-600 mt-2">Vous profitez actuellement de tous les avantages Premium</p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-xl font-semibold text-umedify-text mb-4">Détails de l&apos;abonnement</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Plan actuel</span>
                      <span className="font-medium text-umedify-text">Premium Annuel</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date d&apos;expiration</span>
                      <span className="font-medium text-umedify-text">15 Mars 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Statut</span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Actif
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-umedify-text mb-4">Avantages inclus</h2>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Accès à toutes les ressources premium
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Assistant IA illimité
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Téléchargements illimités
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Support prioritaire
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-umedify-primary/5 rounded-2xl p-6 text-center">
              <h3 className="text-lg font-semibold text-umedify-text mb-2">Renouvellement automatique</h3>
              <p className="text-gray-600 mb-4">
                Votre abonnement sera renouvelé automatiquement. Vous recevrez un rappel 7 jours avant l&apos;expiration.
              </p>
              <Button variant="outline">
                Gérer le renouvellement
              </Button>
            </div>
          </div>
        </div>
      </DashboardLayout>
    )
  }

  if (userStatus.pendingPayment) {
    return (
      <DashboardLayout>
        <div className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Clock className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-umedify-text">Paiement en cours de vérification</h1>
            <p className="text-gray-600 mt-2 mb-8">
              Votre preuve de paiement a été reçue et est en cours de vérification par notre équipe.
            </p>

            <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
              <h2 className="text-xl font-semibold text-umedify-text mb-4">Détails de votre demande</h2>
              <div className="space-y-3 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-gray-600">Plan choisi</span>
                  <span className="font-medium text-umedify-text">Premium Semestriel</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Montant</span>
                  <span className="font-medium text-umedify-text">500 DZD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Méthode</span>
                  <span className="font-medium text-umedify-text">BaridiMob</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date de soumission</span>
                  <span className="font-medium text-umedify-text">Aujourd&apos;hui</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-umedify-text mb-2">Que se passe-t-il maintenant ?</h3>
              <p className="text-gray-600 mb-4">
                Notre équipe vérifie manuellement chaque paiement pour garantir la sécurité. 
                Ce processus prend généralement entre 2 et 24 heures pendant les jours ouvrables.
              </p>
              <p className="text-sm text-gray-500">
                Vous recevrez une notification dès que votre abonnement sera activé.
              </p>
            </div>
          </div>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <div className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-umedify-text">Passer au Premium</h1>
            <p className="text-gray-600 mt-2">
              Débloquez l&apos;accès complet à toutes les ressources et l&apos;assistant IA
            </p>
          </div>

          {/* Plan Selection */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-umedify-text mb-4">1. Choisissez votre plan</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`bg-white rounded-2xl shadow-md p-6 cursor-pointer transition-all ${
                    selectedPlan === plan.id 
                      ? 'ring-2 ring-umedify-primary border-umedify-primary' 
                      : 'border border-gray-200 hover:shadow-lg'
                  } ${plan.popular ? 'relative' : ''}`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-umedify-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                        Populaire
                      </span>
                    </div>
                  )}
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-umedify-text">{plan.name}</h3>
                    <div className="mt-4">
                      <span className="text-3xl font-bold text-umedify-primary">{plan.price}</span>
                      <span className="text-gray-600 ml-1">DZD</span>
                    </div>
                    <p className="text-gray-600 mt-2">{plan.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {selectedPlan && (
            <>
              {/* Payment Method Selection */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-umedify-text mb-4">2. Méthode de paiement</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div
                    className={`bg-white rounded-2xl shadow-md p-6 cursor-pointer transition-all ${
                      paymentMethod === 'baridimob' 
                        ? 'ring-2 ring-umedify-primary border-umedify-primary' 
                        : 'border border-gray-200 hover:shadow-lg'
                    }`}
                    onClick={() => setPaymentMethod('baridimob')}
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">📱</span>
                      </div>
                      <h3 className="text-lg font-semibold text-umedify-text">BaridiMob</h3>
                      <p className="text-gray-600 mt-2">Paiement mobile sécurisé</p>
                    </div>
                  </div>

                  <div
                    className={`bg-white rounded-2xl shadow-md p-6 cursor-pointer transition-all ${
                      paymentMethod === 'ccp' 
                        ? 'ring-2 ring-umedify-primary border-umedify-primary' 
                        : 'border border-gray-200 hover:shadow-lg'
                    }`}
                    onClick={() => setPaymentMethod('ccp')}
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <CreditCard className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-umedify-text">CCP</h3>
                      <p className="text-gray-600 mt-2">Virement via compte CCP</p>
                    </div>
                  </div>
                </div>
              </div>

              {paymentMethod && (
                <>
                  {/* Payment Instructions */}
                  <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
                    <h2 className="text-xl font-semibold text-umedify-text mb-4">3. Effectuez le paiement</h2>
                    {paymentMethod === 'baridimob' ? (
                      <div className="space-y-4">
                        <div className="bg-blue-50 rounded-xl p-4">
                          <h3 className="font-semibold text-blue-900 mb-2">Instructions BaridiMob :</h3>
                          <ol className="list-decimal list-inside space-y-1 text-blue-800">
                            <li>Ouvrez votre application BaridiMob</li>
                            <li>Sélectionnez &ldquo;Transfert d&apos;argent&rdquo;</li>
                            <li>Envoyez <strong>{plans.find(p => p.id === selectedPlan)?.price} DZD</strong> au RIP : <strong>00799999001234567890</strong></li>
                            <li>Bénéficiaire : <strong>UMEDIFY PLATFORM</strong></li>
                            <li>Sauvegardez le reçu de transaction</li>
                          </ol>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="bg-green-50 rounded-xl p-4">
                          <h3 className="font-semibold text-green-900 mb-2">Instructions CCP :</h3>
                          <ol className="list-decimal list-inside space-y-1 text-green-800">
                            <li>Rendez-vous à un bureau de poste</li>
                            <li>Effectuez un virement de <strong>{plans.find(p => p.id === selectedPlan)?.price} DZD</strong></li>
                            <li>Vers le compte CCP : <strong>1234567-89</strong></li>
                            <li>Titulaire : <strong>UMEDIFY PLATFORM</strong></li>
                            <li>Conservez le reçu de virement</li>
                          </ol>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Proof Upload */}
                  <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
                    <h2 className="text-xl font-semibold text-umedify-text mb-4">4. Téléchargez votre reçu</h2>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">
                        Téléchargez votre preuve de paiement
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Formats acceptés : PDF, JPG, PNG (max 5MB)
                      </p>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="proof-upload"
                      />
                      <label htmlFor="proof-upload">
                        <Button variant="outline" className="cursor-pointer">
                          Choisir un fichier
                        </Button>
                      </label>
                      {proofFile && (
                        <div className="mt-4 p-3 bg-green-50 rounded-lg">
                          <p className="text-green-800">
                            <CheckCircle className="h-4 w-4 inline mr-2" />
                            Fichier sélectionné : {proofFile.name}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <Button
                      size="lg"
                      onClick={handleSubmitPayment}
                      disabled={!proofFile || isSubmitting}
                      className="mb-4"
                    >
                      {isSubmitting ? 'Soumission...' : 'Soumettre ma demande'}
                    </Button>
                    <div className="bg-yellow-50 rounded-xl p-4 max-w-2xl mx-auto">
                      <AlertCircle className="h-5 w-5 text-yellow-600 inline mr-2" />
                      <p className="text-yellow-800 text-sm">
                        Notre équipe vérifiera votre paiement manuellement sous 24h. 
                        Vous recevrez une notification dès l&apos;activation de votre abonnement.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
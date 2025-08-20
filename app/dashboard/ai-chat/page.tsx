"use client"

import { useState } from "react"
import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Send, Bot, User, Crown, Sparkles } from "lucide-react"

interface Message {
  id: number
  type: 'user' | 'bot'
  content: string
  timestamp: Date
}

export default function AIChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      content: 'Bonjour! Je suis Dr. Medibot, votre assistant IA personnel. Comment puis-je vous aider avec vos études aujourd\'hui?',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isPremium] = useState(true) // In real app, this would come from user context

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputMessage.trim() || isLoading) return

    const newMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, newMessage])
    setInputMessage('')
    setIsLoading(true)

    // Simulate AI response (in real app, this would call your AI service)
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        type: 'bot',
        content: getBotResponse(inputMessage),
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setIsLoading(false)
    }, 1500)
  }

  const getBotResponse = (userMessage: string): string => {
    // Simple mock responses - in real app, this would be your AI logic
    const lowerMessage = userMessage.toLowerCase()
    
    if (lowerMessage.includes('mathématiques') || lowerMessage.includes('math')) {
      return 'Les mathématiques sont la base de nombreuses disciplines! Pour quoi avez-vous besoin d\'aide spécifiquement? Calcul différentiel, algèbre linéaire, statistiques? Je peux vous expliquer des concepts ou vous aider avec des exercices.'
    }
    
    if (lowerMessage.includes('médecine') || lowerMessage.includes('anatomie')) {
      return 'La médecine est un domaine passionnant! Je peux vous aider avec l\'anatomie, la physiologie, la pathologie, la pharmacologie et bien plus. Quel système ou sujet médical vous intéresse?'
    }
    
    if (lowerMessage.includes('informatique') || lowerMessage.includes('programmation')) {
      return 'L\'informatique ouvre tant de possibilités! Je peux vous expliquer des algorithmes, structures de données, langages de programmation (Python, Java, C++), bases de données, ou réseaux. Sur quoi souhaitez-vous vous concentrer?'
    }
    
    return 'C\'est une excellente question! Pouvez-vous me donner plus de détails sur le sujet que vous étudiez? Je suis là pour vous aider à comprendre et à réussir vos études.'
  }

  if (!isPremium) {
    return (
      <DashboardLayout>
        <div className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Crown className="h-24 w-24 text-umedify-primary mx-auto mb-8" />
            <h1 className="text-3xl font-bold text-umedify-text mb-4">
              Assistant IA Premium
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              L&apos;assistant IA &ldquo;Dr. Medibot&rdquo; est exclusivement disponible pour nos membres Premium.
            </p>
            <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold text-umedify-text mb-4">
                Avec l&apos;Assistant IA, vous pouvez :
              </h2>
              <ul className="text-left space-y-3 max-w-md mx-auto">
                <li className="flex items-center">
                  <Sparkles className="h-5 w-5 text-umedify-primary mr-3" />
                  Poser des questions sur n&apos;importe quel sujet académique
                </li>
                <li className="flex items-center">
                  <Sparkles className="h-5 w-5 text-umedify-primary mr-3" />
                  Obtenir des explications détaillées et personnalisées
                </li>
                <li className="flex items-center">
                  <Sparkles className="h-5 w-5 text-umedify-primary mr-3" />
                  Recevoir de l&apos;aide pour vos devoirs et exercices
                </li>
                <li className="flex items-center">
                  <Sparkles className="h-5 w-5 text-umedify-primary mr-3" />
                  Communiquer en français, arabe ou anglais
                </li>
              </ul>
            </div>
            <Button size="lg" className="mb-4">
              Passer au Premium
            </Button>
            <p className="text-sm text-gray-600">
              À partir de 500 DZD pour 4 mois d&apos;accès complet
            </p>
          </div>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <div className="px-4 py-8 sm:px-6 lg:px-8 h-full">
        <div className="max-w-4xl mx-auto h-full flex flex-col">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-umedify-primary">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-umedify-text">Dr. Medibot</h1>
                <p className="text-gray-600">Assistant IA pour vos études</p>
              </div>
              <div className="ml-auto">
                <div className="flex items-center space-x-2 bg-umedify-primary/10 px-3 py-1 rounded-full">
                  <Crown className="h-4 w-4 text-umedify-primary" />
                  <span className="text-sm font-medium text-umedify-primary">Premium</span>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 bg-white rounded-2xl shadow-md mb-6 flex flex-col">
            <div className="flex-1 p-6 overflow-y-auto space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex space-x-2 max-w-xs lg:max-w-md ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`flex h-8 w-8 items-center justify-center rounded-full ${message.type === 'user' ? 'bg-umedify-primary' : 'bg-gray-100'}`}>
                      {message.type === 'user' ? (
                        <User className="h-4 w-4 text-white" />
                      ) : (
                        <Bot className="h-4 w-4 text-umedify-primary" />
                      )}
                    </div>
                    <div className={`rounded-2xl px-4 py-2 ${message.type === 'user' ? 'bg-umedify-primary text-white' : 'bg-gray-100 text-gray-900'}`}>
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-1 ${message.type === 'user' ? 'text-white/70' : 'text-gray-500'}`}>
                        {message.timestamp.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex space-x-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                      <Bot className="h-4 w-4 text-umedify-primary" />
                    </div>
                    <div className="rounded-2xl px-4 py-2 bg-gray-100">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="border-t border-gray-200 p-6">
              <form onSubmit={handleSendMessage} className="flex space-x-4">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Posez votre question..."
                  disabled={isLoading}
                  className="flex-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-umedify-primary focus:ring-umedify-primary sm:text-sm disabled:bg-gray-100"
                />
                <Button type="submit" disabled={isLoading || !inputMessage.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </form>
              <p className="mt-2 text-xs text-gray-500">
                Dr. Medibot peut vous aider en français, arabe, ou anglais. Posez vos questions académiques!
              </p>
            </div>
          </div>

          {/* Quick suggestions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              variant="outline"
              onClick={() => setInputMessage('Peux-tu m\'expliquer les dérivées en mathématiques?')}
              className="p-4 h-auto text-left justify-start"
            >
              <div>
                <div className="font-medium">Mathématiques</div>
                <div className="text-sm text-gray-600">Expliquer les dérivées</div>
              </div>
            </Button>
            <Button
              variant="outline"
              onClick={() => setInputMessage('Comment fonctionne le système cardiovasculaire?')}
              className="p-4 h-auto text-left justify-start"
            >
              <div>
                <div className="font-medium">Médecine</div>
                <div className="text-sm text-gray-600">Système cardiovasculaire</div>
              </div>
            </Button>
            <Button
              variant="outline"
              onClick={() => setInputMessage('Qu\'est-ce que la programmation orientée objet?')}
              className="p-4 h-auto text-left justify-start"
            >
              <div>
                <div className="font-medium">Informatique</div>
                <div className="text-sm text-gray-600">Programmation OOP</div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
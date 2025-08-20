"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  GraduationCap, 
  Home, 
  Upload, 
  CreditCard, 
  User, 
  MessageSquare,
  Menu,
  X,
  LogOut
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: 'Tableau de bord', href: '/dashboard', icon: Home },
    { name: 'Télécharger', href: '/dashboard/upload', icon: Upload },
    { name: 'Abonnement', href: '/dashboard/subscription', icon: CreditCard },
    { name: 'Assistant IA', href: '/dashboard/ai-chat', icon: MessageSquare },
    { name: 'Profil', href: '/dashboard/profile', icon: User },
  ]

  const isActivePath = (href: string) => {
    if (href === '/dashboard') {
      return pathname === href
    }
    return pathname?.startsWith(href)
  }

  return (
    <div className="min-h-screen bg-umedify-background">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 flex w-64 flex-col bg-white shadow-xl">
          <div className="flex h-16 items-center justify-between px-6">
            <div className="flex items-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-umedify-primary">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold text-umedify-text">UMEDIFY</span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex-1 space-y-1 px-2 pb-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  isActivePath(item.href)
                    ? 'bg-umedify-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                } group flex items-center px-4 py-2 text-sm font-medium rounded-xl transition-colors`}
              >
                <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="border-t border-gray-200 p-4">
            <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
              <LogOut className="mr-3 h-5 w-5" />
              Déconnexion
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow bg-white border-r border-gray-200 pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-umedify-primary">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <span className="ml-2 text-xl font-bold text-umedify-text">UMEDIFY</span>
          </div>
          <nav className="mt-8 flex-1 space-y-1 px-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  isActivePath(item.href)
                    ? 'bg-umedify-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                } group flex items-center px-4 py-2 text-sm font-medium rounded-xl transition-colors`}
              >
                <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="border-t border-gray-200 p-4">
            <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
              <LogOut className="mr-3 h-5 w-5" />
              Déconnexion
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64 flex flex-col flex-1">
        {/* Top navigation bar */}
        <div className="sticky top-0 z-40 lg:mx-auto lg:max-w-none">
          <div className="flex h-16 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>

            {/* Breadcrumb or page title would go here */}
            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <div className="flex flex-1"></div>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                {/* User menu would go here */}
                <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" />
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-umedify-primary flex items-center justify-center">
                    <span className="text-white text-sm font-medium">U</span>
                  </div>
                  <span className="hidden lg:block text-sm font-medium text-gray-700">Utilisateur</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  )
}
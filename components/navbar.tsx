"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe, Menu, X, GraduationCap } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState("fr")

  const languages = [
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "ar", name: "العربية", flag: "🇩🇿" },
    { code: "en", name: "English", flag: "🇬🇧" },
  ]

  const navLinks = [
    { href: "/", label: "Accueil", labelAr: "الرئيسية", labelEn: "Home" },
    { href: "/explore", label: "Explorer", labelAr: "استكشف", labelEn: "Explore" },
    { href: "#how-it-works", label: "Comment ça marche", labelAr: "كيف يعمل", labelEn: "How It Works" },
    { href: "/pricing", label: "Abonnements", labelAr: "الاشتراكات", labelEn: "Plans" },
    { href: "/ai-chat", label: "Assistant IA", labelAr: "المساعد الذكي", labelEn: "AI Assistant" },
    { href: "/about", label: "À propos", labelAr: "حول", labelEn: "About" },
    { href: "/contact", label: "Contact", labelAr: "اتصل بنا", labelEn: "Contact" },
  ]

  const getLabel = (link: typeof navLinks[0]) => {
    switch (currentLanguage) {
      case "ar": return link.labelAr
      case "en": return link.labelEn
      default: return link.label
    }
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-umedify-primary">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-umedify-text">UMEDIFY</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-umedify-text hover:text-umedify-primary transition-colors"
              >
                {getLabel(link)}
              </Link>
            ))}
          </div>

          {/* Right Side - Language Switcher & Auth Buttons */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center space-x-1"
                onClick={() => {
                  // Simple rotation through languages for now
                  const currentIndex = languages.findIndex(lang => lang.code === currentLanguage)
                  const nextIndex = (currentIndex + 1) % languages.length
                  setCurrentLanguage(languages[nextIndex].code)
                }}
              >
                <Globe className="h-4 w-4" />
                <span>{languages.find(lang => lang.code === currentLanguage)?.flag}</span>
              </Button>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Button variant="ghost" asChild>
                <Link href="/auth/login">
                  {currentLanguage === "ar" ? "تسجيل الدخول" : 
                   currentLanguage === "en" ? "Login" : "Connexion"}
                </Link>
              </Button>
              <Button asChild>
                <Link href="/auth/signup">
                  {currentLanguage === "ar" ? "إنشاء حساب" : 
                   currentLanguage === "en" ? "Sign Up" : "S'inscrire"}
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-umedify-text hover:text-umedify-primary hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {getLabel(link)}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 px-3 pt-4">
                <Button variant="ghost" asChild className="justify-start">
                  <Link href="/auth/login">
                    {currentLanguage === "ar" ? "تسجيل الدخول" : 
                     currentLanguage === "en" ? "Login" : "Connexion"}
                  </Link>
                </Button>
                <Button asChild className="justify-start">
                  <Link href="/auth/signup">
                    {currentLanguage === "ar" ? "إنشاء حساب" : 
                     currentLanguage === "en" ? "Sign Up" : "S'inscrire"}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
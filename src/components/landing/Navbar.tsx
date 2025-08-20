"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";

const languages = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ar', name: 'العربية', flag: '🇩🇿' },
  { code: 'en', name: 'English', flag: '🇬🇧' }
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentLang = 'fr';

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-purple-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-umedify-primary to-umedify-accent rounded-lg p-2">
                <span className="text-white font-bold text-xl">U</span>
              </div>
              <span className="text-2xl font-bold gradient-text">UMEDIFY</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <Link 
                href="#features" 
                className="text-umedify-text hover:text-umedify-primary transition-colors"
              >
                Fonctionnalités
              </Link>
              <Link 
                href="#pricing" 
                className="text-umedify-text hover:text-umedify-primary transition-colors"
              >
                Tarifs
              </Link>
              <Link 
                href="#how-it-works" 
                className="text-umedify-text hover:text-umedify-primary transition-colors"
              >
                Comment ça marche
              </Link>
            </div>

            {/* Language Switcher */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center space-x-1"
              >
                <Globe className="w-4 h-4" />
                <span>{languages.find(l => l.code === currentLang)?.flag}</span>
              </Button>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-3">
              <Button variant="ghost" asChild>
                <Link href="/auth/login">Connexion</Link>
              </Button>
              <Button className="bg-umedify-primary hover:bg-umedify-secondary" asChild>
                <Link href="/auth/signup">S&apos;inscrire</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-purple-100 py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="#features" 
                className="text-umedify-text hover:text-umedify-primary px-4 py-2 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Fonctionnalités
              </Link>
              <Link 
                href="#pricing" 
                className="text-umedify-text hover:text-umedify-primary px-4 py-2 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Tarifs
              </Link>
              <Link 
                href="#how-it-works" 
                className="text-umedify-text hover:text-umedify-primary px-4 py-2 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Comment ça marche
              </Link>
              <div className="border-t border-purple-100 pt-4 mt-4">
                <div className="flex flex-col space-y-2 px-4">
                  <Button variant="outline" className="justify-start" asChild>
                    <Link href="/auth/login">Connexion</Link>
                  </Button>
                  <Button className="bg-umedify-primary hover:bg-umedify-secondary justify-start" asChild>
                    <Link href="/auth/signup">S&apos;inscrire</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
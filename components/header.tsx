"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()

  const navItems = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.technology"), href: "/technology" },
    { name: t("nav.products"), href: "/products" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.team"), href: "/team" },
    { name: t("nav.investors"), href: "/investors" },
    { name: t("nav.contact"), href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                src="/images/whatsapp-20image-202025-11-10-20at-209.jpeg"
                alt="LASER Hearing Aids"
                className="h-10 md:h-12 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-foreground font-medium transition"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 border border-border rounded-md font-medium hover:bg-accent transition flex items-center gap-2"
              aria-label="Toggle language"
            >
              <span className="text-sm">{language === "en" ? "🇬🇧" : "🇩🇪"}</span>
              <span className="uppercase text-sm">{language}</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-foreground transition-transform ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span className={`w-full h-0.5 bg-foreground transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`} />
              <span
                className={`w-full h-0.5 bg-foreground transition-transform ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-foreground font-medium transition py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={() => {
                  toggleLanguage()
                  setMobileMenuOpen(false)
                }}
                className="px-4 py-2 border border-border rounded-md font-medium hover:bg-accent transition flex items-center gap-2 w-fit"
              >
                <span className="text-sm">{language === "en" ? "🇬🇧" : "🇩🇪"}</span>
                <span className="uppercase text-sm">{language}</span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

"use client"

import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Project LAHA</h3>
            <p className="text-sm text-muted-foreground">{t("footer.tagline")}</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/about" className="hover:text-foreground transition">
                  {t("footer.aboutUs")}
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-foreground transition">
                  {t("footer.products")}
                </a>
              </li>
              <li>
                <a href="/technology" className="hover:text-foreground transition">
                  {t("footer.technology")}
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-foreground transition">
                  {t("footer.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold">{t("footer.resources")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/investors" className="hover:text-foreground transition">
                  {t("footer.investors")}
                </a>
              </li>
              <li>
                <a
                  href="https://patents.google.com/patent/WO2010086453A1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition"
                >
                  {t("footer.patentInfo")}
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-foreground transition">
                  {t("footer.support")}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">{t("footer.contactTitle")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>University Hospital of Saarland</li>
              <li>Kirrbergerstr. Building 6</li>
              <li>66421 Homburg / Saar, Germany</li>
              <li>
                <a href="mailto:projekt-laha@uni-saarland.de" className="hover:text-foreground transition">
                  projekt-laha@uni-saarland.de
                </a>
              </li>
              <li>
                <a href="tel:+4968411612901" className="hover:text-foreground transition">
                  +49 (0) 6841 / 1612901
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}

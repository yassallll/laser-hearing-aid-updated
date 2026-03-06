"use client";

import { useLanguage } from "@/contexts/language-context";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
                {t("home.hero.title")}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty">
                {t("home.hero.description")}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition"
                >
                  {t("home.cta.button")}
                </a>
                <a
                  href="/technology"
                  className="px-6 py-3 border border-border rounded-md font-medium hover:bg-accent transition"
                >
                  {t("home.hero.cta")}
                </a>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] bg-muted rounded-lg overflow-hidden">
              <img
                src="/images/main_ear_inside_white_background.png"
                alt="Ear anatomy and hearing technology"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote/Highlight Section */}
      <section className="bg-accent/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-balance">
              "{t("home.quote")}"
            </blockquote>
            <p className="text-muted-foreground text-lg">
              Project LAHA – Laser Hearing Aids
            </p>
          </div>
        </div>
      </section>

      {/* Vision/Technology Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-muted/50">
          <img
            src="/medical-technology-laboratory-research.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto bg-background/95 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-lg space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              {t("home.mission.title")}
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg text-pretty">{t("home.mission.text")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t("home.benefits.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              {t("products.hero.description")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4 p-6 rounded-lg border border-border hover:border-primary/50 transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl">
                🎯
              </div>
              <h3 className="text-xl font-semibold">
                {t("home.benefit1.title")}
              </h3>
              <p className="text-muted-foreground text-pretty">
                {t("home.benefit1.text")}
              </p>
            </div>
            <div className="space-y-4 p-6 rounded-lg border border-border hover:border-primary/50 transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl">
                💡
              </div>
              <h3 className="text-xl font-semibold">
                {t("home.benefit2.title")}
              </h3>
              <p className="text-muted-foreground text-pretty">
                {t("home.benefit2.text")}
              </p>
            </div>
            <div className="space-y-4 p-6 rounded-lg border border-border hover:border-primary/50 transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl">
                🔇
              </div>
              <h3 className="text-xl font-semibold">
                {t("home.benefit3.title")}
              </h3>
              <p className="text-muted-foreground text-pretty">
                {t("home.benefit3.text")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            {t("home.cta.title")}
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-pretty opacity-90">
            {t("home.cta.text")}
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-background text-foreground rounded-md font-medium hover:bg-background/90 transition text-lg"
          >
            {t("home.cta.button")}
          </a>
        </div>
      </section>
    </main>
  );
}

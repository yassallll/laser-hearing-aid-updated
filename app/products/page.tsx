"use client";

import { useLanguage } from "@/contexts/language-context";

export default function ProductsPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
              {t("products.hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty">
              {t("products.hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Research Product Overview */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                {t("products.what.title")}
              </h2>
              <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
                {t("products.what.description")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div className="aspect-[4/3] bg-muted/50 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src="/images/main_ear_inside_white_background.png"
                  alt="Ear anatomy model showing laser hearing aid placement"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">
                  {t("products.what.title")}
                </h3>
                <ul className="space-y-2">
                  {[
                    t("products.feature1"),
                    t("products.feature2"),
                    t("products.feature3"),
                    t("products.feature4"),
                    t("products.feature5"),
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-primary mt-1 font-bold">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Status */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                {t("products.status.title")}
              </h2>
              <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
                {t("products.status.description")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  phase: t("products.status.current"),
                  status: "Active",
                  description: t("products.status.current.text"),
                  icon: "🔬",
                },
                {
                  phase: t("products.status.next"),
                  status: "Planned",
                  description: t("products.status.next.text"),
                  icon: "⚙️",
                },
                {
                  phase: t("products.status.trials"),
                  status: "Planned",
                  description: t("products.status.trials.text"),
                  icon: "📋",
                },
              ].map((stage, index) => (
                <div
                  key={index}
                  className="bg-muted/30 p-6 rounded-lg border border-border space-y-4"
                >
                  <div className="text-4xl text-center">{stage.icon}</div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-1">
                      {stage.phase}
                    </h3>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        stage.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : stage.status === "Planned"
                          ? "bg-gray-100 text-gray-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {stage.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground text-center text-pretty">
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                {t("products.target.title")}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                t("products.target1"),
                t("products.target2"),
                t("products.target3"),
              ].map((target, index) => (
                <div
                  key={index}
                  className="bg-background p-6 rounded-lg border border-border space-y-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm">{target}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Medical Disclaimer */}
      <section className="py-12 bg-amber-50 border-y border-amber-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚠️</span>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg text-amber-900">
                  {t("products.disclaimer.title")}
                </h3>
                <p className="text-sm text-amber-800 leading-relaxed">
                  {t("products.disclaimer.text")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Status */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                {t("products.cert.title")}
              </h2>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg border border-border space-y-6">
              <div className="space-y-3">
                <p className="text-muted-foreground">{t("products.cert1")}</p>
              </div>

              <div className="space-y-3">
                <p className="text-muted-foreground">{t("products.cert2")}</p>
              </div>

              <div className="space-y-3">
                <p className="text-muted-foreground">{t("products.cert3")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t("products.cta.title")}
            </h2>
            <p className="text-lg md:text-xl opacity-90 text-pretty">
              {t("products.cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-background text-foreground rounded-md font-medium hover:bg-background/90 transition text-lg"
              >
                {t("products.cta.button")}
              </a>
              <a
                href="/technology"
                className="px-8 py-4 bg-primary-foreground/10 text-primary-foreground rounded-md font-medium hover:bg-primary-foreground/20 transition text-lg border border-primary-foreground/20"
              >
                {t("nav.technology")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

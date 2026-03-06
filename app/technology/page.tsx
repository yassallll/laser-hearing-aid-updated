"use client";

import { useLanguage } from "@/contexts/language-context";

export default function TechnologyPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
                {t("tech.hero.title")}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty">
                {t("tech.hero.description")}
              </p>
            </div>
            <div className="relative h-[400px] md:h-[500px] bg-muted rounded-lg overflow-hidden">
              <img
                src="/images/main_ear_inside_white_background.png"
                alt="Ear anatomy with LAHA device"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="bg-accent/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t("tech.philosophy.title")}
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance">
              {t("tech.philosophy.text")}
            </p>
          </div>
        </div>
      </section>

      {/* Core Technologies Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t("tech.how.works.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              {t("tech.how.works.subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: t("tech.laser.stimulation"),
                desc: t("tech.laser.desc"),
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m1.343-5.657-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
              },
              {
                title: t("tech.bone.conduction"),
                desc: t("tech.bone.desc"),
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                  </svg>
                ),
              },
              {
                title: t("tech.non.invasive"),
                desc: t("tech.non.invasive.desc"),
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
              },
              {
                title: t("tech.digital.processing"),
                desc: t("tech.digital.desc"),
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                  </svg>
                ),
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-muted/30 p-8 rounded-lg space-y-4 border border-border hover:border-primary/50 transition"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  {tech.icon}
                </div>
                <h3 className="text-2xl font-semibold">{tech.title}</h3>
                <p className="text-muted-foreground text-pretty">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Deep Dive */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div className="relative h-[400px] md:h-[500px] bg-background rounded-lg overflow-hidden order-2 md:order-1">
              <img
                src="/hearing-aid-chip-technology.jpg"
                alt="LAHA technology detail"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold">
                {t("tech.breakthrough.title")}
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p className="text-pretty">{t("tech.breakthrough.p1")}</p>
                <p className="text-pretty">{t("tech.breakthrough.p2")}</p>
                <p className="text-pretty">{t("tech.breakthrough.p3")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Development */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                {t("tech.research.development")}
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                {t("tech.research.intro")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { stat: t("tech.stat1"), label: t("tech.stat1.label") },
                { stat: t("tech.stat2"), label: t("tech.stat2.label") },
                { stat: t("tech.stat3"), label: t("tech.stat3.label") },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center space-y-2 p-6 bg-accent/20 rounded-lg"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary">
                    {stat.stat}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">
                {t("tech.focus.areas")}
              </h3>
              <ul className="space-y-3">
                {[
                  t("tech.focus1"),
                  t("tech.focus2"),
                  t("tech.focus3"),
                  t("tech.focus4"),
                  t("tech.focus5"),
                  t("tech.focus6"),
                ].map((focus, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full mt-0.5" />
                    <span className="text-muted-foreground text-lg">
                      {focus}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {t("tech.specs.overview")}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  spec: t("tech.spec.method"),
                  value: t("tech.spec.method.value"),
                },
                {
                  spec: t("tech.spec.target"),
                  value: t("tech.spec.target.value"),
                },
                {
                  spec: t("tech.spec.delivery"),
                  value: t("tech.spec.delivery.value"),
                },
                {
                  spec: t("tech.spec.safety"),
                  value: t("tech.spec.safety.value"),
                },
                {
                  spec: t("tech.spec.processing"),
                  value: t("tech.spec.processing.value"),
                },
                {
                  spec: t("tech.spec.application"),
                  value: t("tech.spec.application.value"),
                },
                {
                  spec: t("tech.spec.design"),
                  value: t("tech.spec.design.value"),
                },
                {
                  spec: t("tech.spec.phase"),
                  value: t("tech.spec.phase.value"),
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-background rounded-lg border border-border"
                >
                  <span className="font-medium text-foreground">
                    {item.spec}
                  </span>
                  <span className="text-muted-foreground">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Standards */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t("tech.regulatory.title")}
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              {t("tech.regulatory.text")}
            </p>
            <div className="flex flex-wrap gap-8 justify-center items-center pt-8">
              {[
                t("tech.cert1"),
                t("tech.cert2"),
                t("tech.cert3"),
                t("tech.cert4"),
              ].map((cert, index) => (
                <div
                  key={index}
                  className="px-8 py-6 bg-muted/30 rounded-lg border border-border"
                >
                  <span className="font-semibold text-lg">{cert}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-accent/20 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground">
                <strong>{t("tech.disclaimer.strong")}</strong>{" "}
                {t("tech.disclaimer.content")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            {t("tech.cta.journey")}
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-pretty opacity-90">
            {t("tech.cta.interested")}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-background text-foreground rounded-md font-medium hover:bg-background/90 transition text-lg inline-block"
            >
              {t("tech.cta.contact")}
            </a>
            <a
              href="/about"
              className="px-8 py-4 border-2 border-primary-foreground rounded-md font-medium hover:bg-primary-foreground/10 transition text-lg inline-block"
            >
              {t("tech.cta.team")}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

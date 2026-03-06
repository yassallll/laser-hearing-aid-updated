"use client";

import { useLanguage } from "@/contexts/language-context";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
                {t("about.hero.title")}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty">
                {t("about.hero.description")}
              </p>
            </div>
            <div className="relative h-[400px] md:h-[500px] bg-muted rounded-lg overflow-hidden">
              <img
                src="/images/main_ear_inside_white_background.png"
                alt="Ear anatomy model showing laser hearing aid concept"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="bg-accent/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t("about.mission.title")}
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance">
              {t("about.mission.text")}
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                {t("about.story.title")}
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p className="text-pretty">{t("about.story.p1")}</p>
                <p className="text-pretty">{t("about.story.p2")}</p>
                <p className="text-pretty">{t("about.story.p3")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t("about.values.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              {t("about.values.subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: t("about.value1.title"),
                desc: t("about.value1.desc"),
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m1.343-5.657-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
              },
              {
                title: t("about.value2.title"),
                desc: t("about.value2.desc"),
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                ),
              },
              {
                title: t("about.value3.title"),
                desc: t("about.value3.desc"),
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-background p-8 rounded-lg space-y-4 text-center border border-border"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold">{value.title}</h3>
                <p className="text-muted-foreground text-pretty">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Location Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t("about.location.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              {t("about.location.subtitle")}
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-muted/30 p-8 rounded-lg space-y-4">
              <h3 className="text-2xl font-semibold">
                {t("about.location.name")}
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p>{t("about.location.address1")}</p>
                <p>{t("about.location.address2")}</p>
                <div className="pt-4 space-y-2">
                  <p>
                    <strong>{t("about.location.phone")}:</strong> +49 (0) 6841 /
                    1612901
                  </p>
                  <p>
                    <strong>{t("about.location.email")}:</strong>{" "}
                    Larissa.Schatteburg@uks.eu
                  </p>
                  <p>
                    <strong>{t("about.location.project.email")}:</strong>{" "}
                    projekt-laha@uni-saarland.de
                  </p>
                  <p>
                    <strong>{t("about.location.hours")}:</strong>{" "}
                    {t("about.location.hours.text")}
                  </p>
                  <p className="text-sm italic">{t("about.location.note")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {t("about.timeline.title")}
            </h2>
            <div className="space-y-8">
              {[
                {
                  year: "2020",
                  title: t("about.timeline.2020.title"),
                  desc: t("about.timeline.2020.desc"),
                },
                {
                  year: "2022",
                  title: t("about.timeline.2022.title"),
                  desc: t("about.timeline.2022.desc"),
                },
                {
                  year: "2024",
                  title: t("about.timeline.2024.title"),
                  desc: t("about.timeline.2024.desc"),
                },
                {
                  year: "2025",
                  title: t("about.timeline.2025.title"),
                  desc: t("about.timeline.2025.desc"),
                },
              ].map((milestone, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-2xl font-bold text-primary">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="flex-shrink-0 w-px h-full bg-border relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary" />
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl font-semibold mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground text-pretty">
                      {milestone.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            {t("about.cta.title")}
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-pretty opacity-90">
            {t("about.cta.text")}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-background text-foreground rounded-md font-medium hover:bg-background/90 transition text-lg"
            >
              {t("about.cta.button1")}
            </a>
            <a
              href="/technology"
              className="px-8 py-4 border-2 border-primary-foreground rounded-md font-medium hover:bg-primary-foreground/10 transition text-lg"
            >
              {t("about.cta.button2")}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import { useLanguage } from "@/contexts/language-context";

export default function InvestorsPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
              {t("investors.hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty">
              {t("investors.hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Key Research Highlights */}
      <section className="py-16 md:py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {t("investors.highlights.title")}
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  label: t("investors.highlight1.label"),
                  value: t("investors.highlight1.value"),
                  period: t("investors.highlight1.period"),
                },
                {
                  label: t("investors.highlight2.label"),
                  value: t("investors.highlight2.value"),
                  period: t("investors.highlight2.period"),
                },
                {
                  label: t("investors.highlight3.label"),
                  value: t("investors.highlight3.value"),
                  period: t("investors.highlight3.period"),
                },
                {
                  label: t("investors.highlight4.label"),
                  value: t("investors.highlight4.value"),
                  period: t("investors.highlight4.period"),
                },
              ].map((metric, index) => (
                <div
                  key={index}
                  className="bg-background p-6 rounded-lg space-y-2 text-center border border-border"
                >
                  <div className="text-sm text-muted-foreground font-medium">
                    {metric.label}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {metric.period}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              {t("investors.opportunities.title")}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: t("investors.opp1.title"),
                  desc: t("investors.opp1.desc"),
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                    </svg>
                  ),
                },
                {
                  title: t("investors.opp2.title"),
                  desc: t("investors.opp2.desc"),
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m1.343-5.657-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                },
                {
                  title: t("investors.opp3.title"),
                  desc: t("investors.opp3.desc"),
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  ),
                },
                {
                  title: t("investors.opp4.title"),
                  desc: t("investors.opp4.desc"),
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="space-y-3 p-6 bg-muted/30 rounded-lg border border-border"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground text-pretty">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Status */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {t("investors.status.title")}
            </h2>
            <div className="bg-background p-8 rounded-lg border border-border space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">
                    {t("investors.status.project")}
                  </h3>
                  <div className="space-y-3">
                    {[
                      {
                        label: t("investors.status.institution"),
                        value: t("investors.status.institution.value"),
                      },
                      {
                        label: t("investors.status.project.name"),
                        value: t("investors.status.project.value"),
                      },
                      {
                        label: t("investors.status.technology"),
                        value: t("investors.status.technology.value"),
                      },
                      {
                        label: t("investors.status.category"),
                        value: t("investors.status.category.value"),
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center border-b border-border pb-2"
                      >
                        <span className="text-muted-foreground">
                          {item.label}
                        </span>
                        <span className="font-medium">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">
                    {t("investors.status.development")}
                  </h3>
                  <div className="space-y-3">
                    {[
                      {
                        label: t("investors.status.current"),
                        value: t("investors.status.current.value"),
                      },
                      {
                        label: t("investors.status.next"),
                        value: t("investors.status.next.value"),
                      },
                      {
                        label: t("investors.status.target"),
                        value: t("investors.status.target.value"),
                      },
                      {
                        label: t("investors.status.timeline"),
                        value: t("investors.status.timeline.value"),
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center border-b border-border pb-2"
                      >
                        <span className="text-muted-foreground">
                          {item.label}
                        </span>
                        <span className="font-medium">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="pt-4 text-sm text-muted-foreground text-center">
                {t("investors.status.note")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Reports & Documents */}
      {/* <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center">[Financial Reports & Documents]</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">[Annual Reports]</h3>
                <div className="space-y-3">
                  {[
                    { title: "[Annual Report 2024]", date: "[March 15, 2025]", size: "[2.4 MB]" },
                    { title: "[Annual Report 2023]", date: "[March 12, 2024]", size: "[2.1 MB]" },
                    { title: "[Annual Report 2022]", date: "[March 10, 2023]", size: "[1.9 MB]" },
                  ].map((report, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border hover:border-primary/50 transition cursor-pointer"
                    >
                      <div className="space-y-1">
                        <div className="font-medium">{report.title}</div>
                        <div className="text-sm text-muted-foreground">{report.date}</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground">{report.size}</span>
                        <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center">
                          <span className="text-xs font-semibold text-primary">PDF</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">[Quarterly Results]</h3>
                <div className="space-y-3">
                  {[
                    { title: "[Q4 2024 Earnings Report]", date: "[January 15, 2025]", size: "[1.2 MB]" },
                    { title: "[Q3 2024 Earnings Report]", date: "[October 15, 2024]", size: "[1.1 MB]" },
                    { title: "[Q2 2024 Earnings Report]", date: "[July 15, 2024]", size: "[1.0 MB]" },
                  ].map((report, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border hover:border-primary/50 transition cursor-pointer"
                    >
                      <div className="space-y-1">
                        <div className="font-medium">{report.title}</div>
                        <div className="text-sm text-muted-foreground">{report.date}</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground">{report.size}</span>
                        <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center">
                          <span className="text-xs font-semibold text-primary">PDF</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">[Presentations]</h3>
                <div className="space-y-3">
                  {[
                    { title: "[Investor Presentation Q4 2024]", date: "[January 20, 2025]", size: "[5.6 MB]" },
                    { title: "[Corporate Overview 2024]", date: "[June 10, 2024]", size: "[4.8 MB]" },
                  ].map((report, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border hover:border-primary/50 transition cursor-pointer"
                    >
                      <div className="space-y-1">
                        <div className="font-medium">{report.title}</div>
                        <div className="text-sm text-muted-foreground">{report.date}</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground">{report.size}</span>
                        <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center">
                          <span className="text-xs font-semibold text-primary">PDF</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Corporate Governance */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              {t("investors.governance.title")}
            </h2>
            <p className="text-lg text-muted-foreground text-center text-pretty">
              {t("investors.governance.description")}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: t("investors.governance1.title"),
                  desc: t("investors.governance1.desc"),
                },
                {
                  title: t("investors.governance2.title"),
                  desc: t("investors.governance2.desc"),
                },
                {
                  title: t("investors.governance3.title"),
                  desc: t("investors.governance3.desc"),
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-background p-6 rounded-lg space-y-3 border border-border"
                >
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground text-pretty">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events & Presentations */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              {t("investors.events.title")}
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: t("investors.event1.title"),
                  date: t("investors.event1.date"),
                  desc: t("investors.event1.desc"),
                },
                {
                  title: t("investors.event2.title"),
                  date: t("investors.event2.date"),
                  desc: t("investors.event2.desc"),
                },
                {
                  title: t("investors.event3.title"),
                  date: t("investors.event3.date"),
                  desc: t("investors.event3.desc"),
                },
              ].map((event, index) => (
                <div
                  key={index}
                  className="p-6 bg-muted/30 rounded-lg border border-border space-y-3"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-xl font-semibold">{event.title}</h3>
                    <span className="text-primary font-medium">
                      {event.date}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-pretty">
                    {event.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact IR */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t("investors.contact.title")}
            </h2>
            <p className="text-lg md:text-xl opacity-90 text-pretty">
              {t("investors.contact.description")}
            </p>
            <div className="grid md:grid-cols-3 gap-6 pt-6">
              <div className="bg-primary-foreground/10 p-6 rounded-lg space-y-2">
                <div className="font-semibold text-sm opacity-70">
                  {t("investors.contact.email")}
                </div>
                <div className="text-lg font-medium break-words">
                  projekt-laha@uni-saarland.de
                </div>
              </div>
              <div className="bg-primary-foreground/10 p-6 rounded-lg space-y-2">
                <div className="font-semibold text-sm opacity-70">
                  {t("investors.contact.phone")}
                </div>
                <div className="text-lg font-medium">
                  +49 (0) 6841 / 1612901
                </div>
              </div>
              <div className="bg-primary-foreground/10 p-6 rounded-lg space-y-2">
                <div className="font-semibold text-sm opacity-70">
                  {t("investors.contact.location")}
                </div>
                <div className="text-lg font-medium">
                  {t("investors.contact.location.value")}
                </div>
              </div>
            </div>
            <div className="pt-4 text-sm opacity-80">
              <p>{t("investors.contact.hours")}</p>
              <p className="mt-2">{t("investors.contact.note")}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

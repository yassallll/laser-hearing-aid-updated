"use client"

import type React from "react"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export default function ContactPage() {
  const { t } = useLanguage()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "",
          subject: formData.subject || `[${formData.inquiryType}] Contact from LAHA website`,
          from_name: formData.name,
          email: formData.email,
          to: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
          message: `Phone: ${formData.phone || "N/A"}\nInquiry Type: ${formData.inquiryType}\n\nMessage:\n${formData.message}`,
          replyto: formData.email,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus("success")
        setFormData({ name: "", email: "", phone: "", subject: "", message: "", inquiryType: "general" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">{t("contact.hero.title")}</h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty">{t("contact.hero.description")}</p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: t("contact.methods.research.title"),
                  icon: "📧",
                  details: [
                    t("contact.methods.research.email"),
                    t("contact.methods.research.hours"),
                    t("contact.methods.research.type"),
                  ],
                },
                {
                  title: t("contact.methods.direct.title"),
                  icon: "📞",
                  details: [
                    t("contact.methods.direct.phone"),
                    t("contact.methods.direct.hours"),
                    t("contact.methods.direct.email"),
                  ],
                },
                {
                  title: t("contact.methods.partnership.title"),
                  icon: "🤝",
                  details: [
                    t("contact.methods.partnership.email"),
                    t("contact.methods.partnership.hours"),
                    t("contact.methods.partnership.type"),
                  ],
                },
              ].map((method, index) => (
                <div
                  key={index}
                  className="bg-background p-8 rounded-lg space-y-4 border border-border hover:border-primary/50 transition text-center"
                >
                  <div className="text-4xl">{method.icon}</div>
                  <h3 className="text-xl font-semibold">{method.title}</h3>
                  <div className="space-y-2 text-muted-foreground">
                    {method.details.map((detail, idx) => (
                      <div key={idx} className="text-sm">
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Location */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-4xl font-bold">{t("contact.form.title")}</h2>
                  <p className="text-muted-foreground text-pretty">{t("contact.form.description")}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? ""} />
                  {/* Inquiry Type */}
                  <div className="space-y-2">
                    <label htmlFor="inquiryType" className="block text-sm font-medium">
                      {t("contact.form.inquiryType")}
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="general">{t("contact.form.inquiryType.general")}</option>
                      <option value="research">{t("contact.form.inquiryType.research")}</option>
                      <option value="partnership">{t("contact.form.inquiryType.partnership")}</option>
                      <option value="media">{t("contact.form.inquiryType.media")}</option>
                      <option value="technical">{t("contact.form.inquiryType.technical")}</option>
                      <option value="investor">{t("contact.form.inquiryType.investor")}</option>
                    </select>
                  </div>

                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      {t("contact.form.name")} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium">
                        {t("contact.form.email")} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium">
                        {t("contact.form.phone")}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+49 xxx xxxx xxxx"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium">
                      {t("contact.form.subject")} *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="How can we help you?"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium">
                      {t("contact.form.message")} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition text-lg disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Sending..." : t("contact.form.submit")}
                  </button>

                  {status === "success" && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-md text-green-800 text-sm text-center">
                      ✓ Message sent successfully! We'll get back to you soon.
                    </div>
                  )}

                  {status === "error" && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-800 text-sm text-center">
                      Something went wrong. Please try again or email us directly at   yassalarifbutt@gmail.com
                    </div>
                  )}

                  <p className="text-sm text-muted-foreground text-center">{t("contact.form.gdpr")}</p>
                </form>
              </div>

              {/* Office Location */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold">{t("contact.location.title")}</h2>

                  {/* Research Center */}
                  <div className="space-y-6">
                    <div className="p-6 bg-muted/30 rounded-lg space-y-3 border border-border">
                      <div className="flex items-start justify-between">
                        <h3 className="text-xl font-semibold">{t("contact.location.research.title")}</h3>
                        <span className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                          {t("contact.location.research.badge")}
                        </span>
                      </div>
                      <div className="space-y-2 text-muted-foreground">
                        <p className="font-medium text-foreground">{t("contact.location.research.name")}</p>
                        <p>{t("contact.location.research.hospital")}</p>
                        <p>{t("contact.location.research.building")}</p>
                        <p>{t("contact.location.research.postal")}</p>
                        <p>{t("contact.location.research.country")}</p>
                      </div>
                      <div className="pt-3 border-t border-border space-y-1">
                        <p className="text-sm">
                          <span className="font-medium">{t("contact.location.research.phone")}:</span> +49 (0) 6841 /
                          1612901
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">{t("contact.location.research.email")}:</span>{" "}
                            yassalarifbutt@gmail.com
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">{t("contact.location.research.hours")}:</span>{" "}
                          {t("contact.location.research.hoursValue")}
                        </p>
                      </div>
                    </div>

                    {/* Additional Contact Info */}
                    <div className="p-6 bg-muted/30 rounded-lg space-y-3 border border-border">
                      <h3 className="text-xl font-semibold">{t("contact.location.lead.title")}</h3>
                      <div className="space-y-2 text-muted-foreground">
                        <p className="text-sm">
                          <span className="font-medium">{t("contact.location.lead.email")}:</span>{" "}
                          Larissa.Schatteburg@uks.eu
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">{t("contact.location.lead.phone")}:</span> +49 (0) 6841 /
                          1612901
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">{t("contact.location.lead.note")}</p>
                      </div>
                    </div>

                    {/* Social Media (Planned) */}
                    <div className="p-6 bg-muted/30 rounded-lg space-y-3 border border-border">
                      <h3 className="text-xl font-semibold">{t("contact.location.social.title")}</h3>
                      <div className="space-y-2 text-muted-foreground text-sm">
                        <p>📱 {t("contact.location.social.linkedin")}</p>
                        <p>🔬 {t("contact.location.social.researchgate")}</p>
                        <p>🎥 {t("contact.location.social.youtube")}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="w-full h-80 bg-muted/50 rounded-lg border border-border flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="text-4xl">🗺️</div>
                    <p className="text-muted-foreground">{t("contact.location.map.title")}</p>
                    <p className="text-sm text-muted-foreground">{t("contact.location.map.subtitle")}</p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=University+Hospital+Saarland+Homburg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-primary hover:underline text-sm"
                    >
                      {t("contact.location.map.link")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold">{t("contact.faq.title")}</h2>
              <p className="text-muted-foreground text-pretty">{t("contact.faq.description")}</p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: t("contact.faq.q1.question"),
                  answer: t("contact.faq.q1.answer"),
                },
                {
                  question: t("contact.faq.q2.question"),
                  answer: t("contact.faq.q2.answer"),
                },
                {
                  question: t("contact.faq.q3.question"),
                  answer: t("contact.faq.q3.answer"),
                },
                {
                  question: t("contact.faq.q4.question"),
                  answer: t("contact.faq.q4.answer"),
                },
                {
                  question: t("contact.faq.q5.question"),
                  answer: t("contact.faq.q5.answer"),
                },
              ].map((faq, index) => (
                <div key={index} className="p-6 bg-background rounded-lg border border-border space-y-3">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <p className="text-muted-foreground text-pretty">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GDPR & Data Protection Notice */}
      <section className="py-16 md:py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-center space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold">{t("contact.gdpr.title")}</h2>
              <p className="text-muted-foreground text-pretty">{t("contact.gdpr.description")}</p>
            </div>

            <div className="p-6 bg-muted/30 rounded-lg border border-border space-y-4 text-sm text-muted-foreground">
              <p>{t("contact.gdpr.p1")}</p>
              <p>{t("contact.gdpr.p2")}</p>
              <p>
                {t("contact.gdpr.p3")}{" "}
                <a href="mailto:  yassalarifbutt@gmail.com" className="text-primary hover:underline">
                    yassalarifbutt@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Disclaimer */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">{t("contact.disclaimer.title")}</h2>
            <div className="p-6 bg-background rounded-lg border border-border space-y-4">
              <p className="text-muted-foreground text-pretty">{t("contact.disclaimer.p1")}</p>
              <p className="text-muted-foreground text-pretty">{t("contact.disclaimer.p2")}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

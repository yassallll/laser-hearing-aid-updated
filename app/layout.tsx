import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { LanguageProvider } from "@/contexts/language-context"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Project LAHA - Laser Hearing Aids",
  description:
    "Novel laser-based hearing system that generates sound directly at the eardrum. Developed at University Hospital of Saarland.",
  icons: {
    icon: "/images/whatsapp-20image-202025-11-10-20at-209.jpeg",
    apple: "/images/whatsapp-20image-202025-11-10-20at-209.jpeg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}

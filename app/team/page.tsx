"use client"

import { useLanguage } from "@/contexts/language-context"
import { useState } from "react"

type Member = {
  name: string
  image: string
  initials: string
  fields: { label: string; value: string }[]
}

type Section = {
  titleKey: "team.category.biophysicists" | "team.category.doctors" | "team.category.industrialEngineers" | "team.category.electricalEngineers"
  members: Member[]
}

const teamSections: Section[] = [
  {
    titleKey: "team.category.biophysicists",
    members: [
      {
        name: "Larissa Schatteburg",
        image: "/teamimages/larissa-schatteburg.jpg",
        initials: "LS",
        fields: [
          { label: "Qualification", value: "Dipl. Biophysics" },
          { label: "Position", value: "CEO, HR" },
          { label: "Institution", value: "University Hospital of Saarland" },
          { label: "Email", value: "Larissa.Schatteburg@uks.eu" },
        ],
      },
      {
        name: "Nina Burmeister",
        image: "/teamimages/nina-burmeister.jpg",
        initials: "NB",
        fields: [
          { label: "Qualification", value: "M.Sc. Biophysics" },
          { label: "Position", value: "Research, CCO" },
          { label: "Institution", value: "University Hospital of Saarland" },
          { label: "Email", value: "projekt-laha@uni-saarland.de" },
        ],
      },
    ],
  },
  {
    titleKey: "team.category.doctors",
    members: [
      {
        name: "Prof. Dr. Gentiana Wenzel",
        image: "/teamimages/gentiana-wenzel.jpg",
        initials: "GW",
        fields: [
          { label: "Qualification", value: "Senior Otolaryngologist" },
          { label: "Position", value: "Research, Clinical Trials" },
          { label: "Institution", value: "University Hospital of Saarland" },
          { label: "Email", value: "projekt-laha@uni-saarland.de" },
        ],
      },
      {
        name: "Dr. Volodymyr Podolskyi",
        image: "/teamimages/volodymyr-podolskyi.jpg",
        initials: "VP",
        fields: [
          { label: "Qualification", value: "Ph.D. Medicine" },
          { label: "Position", value: "Prototype development, Supply chain management" },
          { label: "Institution", value: "University Hospital of Saarland" },
          { label: "Email", value: "projekt-laha@uni-saarland.de" },
        ],
      },
    ],
  },
  {
    titleKey: "team.category.industrialEngineers",
    members: [
      {
        name: "Svenja Großmann",
        image: "/teamimages/svenja-grossmann.jpg",
        initials: "SG",
        fields: [
          { label: "Qualification", value: "M.Sc. Neural Engineering" },
          { label: "Position", value: "CMO, Quality management" },
          { label: "Institution", value: "University Hospital of Saarland" },
          { label: "Email", value: "projekt-laha@uni-saarland.de" },
        ],
      },
      {
        name: "Mircea Teodorescu",
        image: "/teamimages/mircea-teodorescu.jpg",
        initials: "MT",
        fields: [
          { label: "Qualification", value: "Dipl. Industrial Engineer" },
          { label: "Position", value: "CFO, CEO" },
          { label: "Institution", value: "University Hospital of Saarland" },
          { label: "Email", value: "projekt-laha@uni-saarland.de" },
        ],
      },
    ],
  },
  {
    titleKey: "team.category.electricalEngineers",
    members: [
      {
        name: "Aaron Urschel",
        image: "/teamimages/aaron-urschel.jpg",
        initials: "AU",
        fields: [
          { label: "Qualification", value: "M.Sc. Micromedical Technology" },
          { label: "Position", value: "CTO, Production" },
          { label: "Institution", value: "University Hospital of Saarland" },
          { label: "Email", value: "projekt-laha@uni-saarland.de" },
        ],
      },
      {
        name: "Tarun Manoj",
        image: "/teamimages/tarun-manoj.jpg",
        initials: "TM",
        fields: [
          { label: "Qualification", value: "B.Tech. Electrical Engineering" },
          { label: "Position", value: "Prototype development – signal processing" },
          { label: "Institution", value: "University Hospital of Saarland" },
          { label: "Email", value: "projekt-laha@uni-saarland.de" },
        ],
      },
      {
        name: "Yassal Arif",
        image: "/teamimages/yassal-arif-butt.jpg",
        initials: "YB",
        fields: [
          { label: "Qualification", value: "B.Tech. Electrical Engineering" },
          { label: "Position", value: "Prototype development – Battery management" },
          { label: "Institution", value: "University Hospital of Saarland" },
          { label: "Email", value: "projekt-laha@uni-saarland.de" },
        ],
      },
    ],
  },
]

function MemberCard({ member }: { member: Member }) {
  const [imgLoaded, setImgLoaded] = useState(false)

  return (
    <div className="flex gap-8 items-start py-8 border-b border-border last:border-b-0">
      {/* Photo */}
      <div className="shrink-0 w-44 h-52 bg-muted overflow-hidden relative">
        {/* Initials — always rendered underneath */}
        <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-muted-foreground">
          {member.initials}
        </div>
        {/* Image — renders on top once loaded, stays hidden on error */}
        <img
          src={member.image}
          alt={member.name}
          className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-300 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgLoaded(false)}
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h3 className="text-2xl font-bold mb-4">{member.name}</h3>
        <table className="w-full text-sm border-collapse">
          <tbody>
            {member.fields.map((field, i) => (
              <tr key={i} className="border-t border-border">
                <td className="py-2 pr-8 text-muted-foreground w-40 align-top">
                  {field.label}:
                </td>
                <td className="py-2 font-medium align-top">
                  {field.label === "Email" ? (
                    <a
                      href={`mailto:${field.value}`}
                      className="text-primary underline hover:opacity-80 transition"
                    >
                      {field.value}
                    </a>
                  ) : (
                    field.value
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function TeamPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <div className="bg-muted/40 border-b border-border">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <h1 className="text-4xl md:text-5xl font-bold">
            {t("team.hero.title")}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
            {t("team.hero.description")}
          </p>
        </div>
      </div>

      {/* Team Sections */}
      <div className="container mx-auto px-4 py-10 md:py-14">
        <div className="max-w-4xl space-y-14">
          {teamSections.map((section) => (
            <section key={section.titleKey}>
              {/* Section Title */}
              <h2 className="text-3xl font-bold mb-2">
                {t(section.titleKey)}
              </h2>
              <hr className="border-border mb-2" />

              {/* Members */}
              <div>
                {section.members.map((member) => (
                  <MemberCard key={member.name} member={member} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}

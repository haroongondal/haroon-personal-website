import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Set NEXT_PUBLIC_SITE_URL to the production domain when deploying.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Haroon Mukhtar — Senior Full Stack Engineer | AI Engineer",
  description:
    "Senior Full Stack Engineer and AI Engineer building scalable web platforms, AI agents, RAG applications, and cloud-powered digital products. TypeScript, React, Next.js, Node.js, AWS, LangChain.",
  keywords: [
    "Haroon Mukhtar",
    "Senior Full Stack Engineer",
    "AI Engineer",
    "AI Agents",
    "RAG",
    "LLM Applications",
    "Next.js",
    "TypeScript",
    "Node.js",
    "AWS",
    "Islamabad",
  ],
  openGraph: {
    title: "Haroon Mukhtar — Senior Full Stack Engineer | AI Engineer",
    description:
      "Builds scalable web platforms, AI agents, RAG applications, and cloud-powered digital products.",
    type: "website",
    url: "/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Haroon Mukhtar — Senior Full Stack Engineer · AI Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haroon Mukhtar — Senior Full Stack Engineer | AI Engineer",
    description:
      "Builds scalable web platforms, AI agents, RAG applications, and cloud-powered digital products.",
    images: ["/og.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Haroon Mukhtar",
  jobTitle: "Senior Full Stack Engineer | AI Engineer",
  email: "mailto:hmukhtar@channel-dynamics.com",
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Islamabad",
    addressCountry: "PK",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "COMSATS University Islamabad, Wah Campus",
  },
  knowsAbout: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "AWS",
    "AI Agents",
    "Retrieval-Augmented Generation",
    "LangChain",
    "LLM Applications",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}

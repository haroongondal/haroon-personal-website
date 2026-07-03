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

export const metadata: Metadata = {
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
  },
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
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CommandPalette } from "@/components/CommandPalette";
import { ClientShell } from "@/components/ClientShell";

export const metadata: Metadata = {
  title: "Aurion Conclave — Technology Products, AI & Software Engineering",
  description:
    "Aurion Conclave builds technology products and delivers software, AI, cloud, automation, data and intelligent systems for real-world problems.",
  keywords: [
    "Aurion Conclave",
    "Technology Products",
    "AI Consultancy",
    "Software Engineering",
    "Autonomous Agents",
    "Cloud Architecture",
    "Machine Learning",
    "Kubernetes",
    "Enterprise Systems"
  ],
  authors: [{ name: "Aurion Conclave Technical Pod" }],
  openGraph: {
    title: "Aurion Conclave — Technology Products, AI & Software Engineering",
    description:
      "A technology-driven venture combining client solutions, proprietary products, AI agent swarms, cloud infrastructure, and applied R&D.",
    url: "https://aurionconclave.com",
    siteName: "Aurion Conclave",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurion Conclave — Technology Products, AI & Software Engineering",
    description:
      "A technology-driven venture combining client solutions, proprietary products, AI agent swarms, cloud infrastructure, and applied R&D.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-[#050607] text-[#F4F1E8] antialiased selection:bg-[#D9A441] selection:text-[#050607]">
        <ClientShell>
          {children}
        </ClientShell>
      </body>
    </html>
  );
}

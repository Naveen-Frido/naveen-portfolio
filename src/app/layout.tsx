import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naveen — Product Designer · AI · UX",
  description:
    "Senior Product Designer specializing in AI-powered products, UX strategy, and design systems. Building delightful experiences at the intersection of human needs and artificial intelligence.",
  keywords: [
    "Product Designer",
    "AI Designer",
    "UX Designer",
    "Design Systems",
    "Portfolio",
    "Naveen",
    "AI Product Design",
    "User Experience",
  ],
  authors: [{ name: "Naveen" }],
  creator: "Naveen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://naveen.design",
    siteName: "Naveen — Product Designer",
    title: "Naveen — Product Designer · AI · UX",
    description:
      "Senior Product Designer specializing in AI-powered products, UX strategy, and design systems.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Naveen — Product Designer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naveen — Product Designer · AI · UX",
    description:
      "Senior Product Designer specializing in AI-powered products, UX strategy, and design systems.",
    images: ["/og-image.jpg"],
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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {/* Skip to main content */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Navigation />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

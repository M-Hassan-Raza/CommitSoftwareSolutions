import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PixelBlast from "../components/PixelBlast";
import { companyName, legalName, siteUrl } from "../lib/company";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${companyName} - AI-Powered Software Solutions`,
  description: "Build intelligent software with LangChain, LangGraph, and RAG systems. Polaris ERP processes 6.8M PKR monthly. Agentic workflows that traditional programming cannot achieve.",
  keywords: ["AI automation", "LangChain", "LangGraph", "RAG systems", "Polaris ERP", "agentic workflows", "business automation", "cloud solutions", "GCP", "AWS Health Lake"],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${companyName} - AI-Powered Software Solutions`,
    description: "Build intelligent software with LangChain, LangGraph, and RAG systems. Polaris ERP processes 6.8M PKR monthly.",
    siteName: legalName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyName} - AI-Powered Software Solutions`,
    description: "Build intelligent software with LangChain, LangGraph, and RAG systems. Polaris ERP processes 6.8M PKR monthly.",
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: legalName,
              url: siteUrl,
            }),
          }}
        />
        <meta name="Commit Software" content="Commit Software" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Background */}
        <div className="fixed inset-0 z-0">
          <PixelBlast
            variant="square"
            pixelSize={4}
            color="var(--color-glow-hex)"
            patternScale={3}
            patternDensity={0.6}
            enableRipples={true}
            rippleIntensityScale={0.5}
            rippleThickness={0.05}
            rippleSpeed={0.2}
            speed={0.3}
            transparent={true}
            edgeFade={0.3}
            className="w-full h-full motion-reduce:animate-none opacity-30"
          />
        </div>
        
        {/* Navbar */}
        <Navbar />
        
        {/* Main content */}
        <div className="relative z-10">
          {children}
        </div>
        
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}

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
  title: `${companyName} Solutions`,
  description: "Professional software development services including business automation, cloud solutions, web development, graphics design, and POS systems.",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${companyName} Solutions`,
    description: "Professional software development services.",
    siteName: legalName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyName} Solutions`,
    description: "Professional software development services.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
        </head>
        {/* Background */}
        <div className="fixed inset-0 z-0">
          <PixelBlast
            variant="square"
            pixelSize={3}
            color="var(--color-glow-hex)"
            patternScale={2}
            patternDensity={1}
            enableRipples={true}
            rippleIntensityScale={1}
            rippleThickness={0.1}
            rippleSpeed={0.3}
            speed={0.5}
            transparent={true}
            edgeFade={0.1}
            className="w-full h-full motion-reduce:animate-none"
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

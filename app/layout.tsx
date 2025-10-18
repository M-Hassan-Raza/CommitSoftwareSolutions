import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import PixelBlast from "../components/PixelBlast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Commit Software Solutions",
  description: "Professional software development services including business automation, cloud solutions, web development, graphics design, and POS systems.",
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
        {/* Background */}
        <div className="fixed inset-0 z-0">
          <PixelBlast
            variant="square"
            pixelSize={3}
            color="#B19EEF"
            patternScale={2}
            patternDensity={1}
            enableRipples={true}
            rippleIntensityScale={1}
            rippleThickness={0.1}
            rippleSpeed={0.3}
            speed={0.5}
            transparent={true}
            edgeFade={0.1}
            className="w-full h-full"
          />
        </div>
        
        {/* Navbar */}
        <Navbar />
        
        {/* Main content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}

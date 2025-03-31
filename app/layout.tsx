import type React from "react"
import type { Metadata } from "next"
import { Mona_Sans as FontSans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { WhatsAppChatButton } from "@/components/whatsapp-chat-button"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: {
    template: "%s | Commit Software Solutions",
    default: "Commit Software Solutions",
  },
  description: "Expert software development and digital services for modern businesses",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://commitsoftware.com",
    siteName: "Commit Software Solutions",
    title: "Commit Software Solutions",
    description: "Expert software development and digital services for modern businesses",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Commit Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commit Software Solutions",
    description: "Expert software development and digital services for modern businesses",
    images: ["/og-image.webp"],
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppChatButton phoneNumber="+92-335-0706014" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
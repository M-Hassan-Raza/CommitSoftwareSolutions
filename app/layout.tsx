import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Commit Software Solutions | Custom Software Development & Cloud Solutions',
  description: 'Transform your business with cutting-edge technology. We specialize in custom software development, AI automation, cloud solutions, and enterprise systems.',
  keywords: ['software development', 'cloud solutions', 'AI automation', 'Django', 'FastAPI', 'Vue.js', 'React', 'ERP systems'],
  authors: [{ name: 'Commit Software Solutions' }],
  openGraph: {
    title: 'Commit Software Solutions | Orchestrating Digital Excellence',
    description: 'From AI-powered automation to scalable cloud solutions, we transform your business with cutting-edge technology',
    url: 'https://commitsoftware.com',
    siteName: 'Commit Software Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commit Software Solutions',
    description: 'Transform your business with cutting-edge technology',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

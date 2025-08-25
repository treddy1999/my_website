import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sai Tarun - Full-Stack Developer | Problem Solver | Team Player',
  description: 'Professional full-stack developer with expertise in modern web technologies. Building scalable applications with React, Node.js, and cloud platforms. Available for new opportunities.',
  keywords: [
    'Full-Stack Developer',
    'React Developer',
    'Node.js Developer',
    'Web Development',
    'Software Engineer',
    'Frontend Developer',
    'Backend Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'Portfolio'
  ],
  authors: [{ name: 'Sai Tarun' }],
  creator: 'Sai Tarun',
  publisher: 'Sai Tarun',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://saitarun.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sai Tarun - Full-Stack Developer',
    description: 'Professional full-stack developer with expertise in modern web technologies.',
    url: 'https://saitarun.dev',
    siteName: 'Sai Tarun Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sai Tarun - Full-Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sai Tarun - Full-Stack Developer',
    description: 'Professional full-stack developer with expertise in modern web technologies.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/portfolio/favicon.ico" />
        <link rel="apple-touch-icon" href="/portfolio/apple-touch-icon.png" />
        <link rel="manifest" href="/portfolio/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased bg-neutral-50 text-neutral-900 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}

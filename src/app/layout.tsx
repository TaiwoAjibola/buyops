import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import './globals.css'
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider'
import Navigation from '@/components/Navigation'

const jost = Jost({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jost'
})

export const metadata: Metadata = {
  title: 'BuyOps - Own the Future of Real Estate',
  description: "The unified ecosystem for Nigeria's smartest investors, agents, and administrators.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${jost.variable} font-primary`}>
        <SmoothScrollProvider>
          <Navigation />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}

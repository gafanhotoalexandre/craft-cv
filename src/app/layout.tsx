import type { Metadata } from 'next'
import { Nunito, Nunito_Sans } from 'next/font/google'

import { ThemeProvider } from '@/components/shared/ThemeProvider'
import { cn } from '@/lib/utils'
import './globals.css'

const nunitoTitle = Nunito({
  subsets: ['latin'],
  variable: '--font-title',
})
const nunitoSans = Nunito_Sans({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'CraftCV',
  description: 'Seu criador de currículos interativo.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={cn(
          nunitoSans.variable,
          nunitoTitle.variable,
          `min-h-screen bg-background font-sans antialiased`
        )}
        // className={`${nunitoSans.variable} ${nunitoTitle.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="Dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Baumans, Blinker } from 'next/font/google'
import '@mantine/core/styles.css'
import '@mantine/charts/styles.css'
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'KORA',
  description: 'Studio fotográfico',
}

const baumans = Baumans({
  variable: '--font-baumans',
  display: 'swap',
  subsets: ['latin'],
  weight: '400',
})
const blinker = Blinker({
  variable: '--font-blinker',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='pt-BR'
      {...mantineHtmlProps}
      className={(baumans.variable, blinker.variable)}
    >
      <head>
        <ColorSchemeScript defaultColorScheme='dark' />
      </head>
      <body className={(baumans.variable, blinker.variable)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

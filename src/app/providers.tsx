'use client'

import { ReactNode, useState } from 'react'
import { MantineProvider } from '@mantine/core'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'
import { ThemeProvider } from '@emotion/react'
import { GlobalStyles } from '@/styles/styles'
import { emotionTransform, MantineEmotionProvider } from '@mantine/emotion'
import { RootStyleRegistry } from './EmotionRootStyleRegistry'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface ProvidersProps {
  children: ReactNode
  session?: Session | null
}

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      white: string
      dark: string
      leaf: string
      primary: string
      secundary: string
      grey: {
        300: string
        500: string
      }
    }
    fonts: {
      xsmall: string
      small: string
      medium: string
      large: string
      xlarge: string
      xxlarge: string
      xxxlarge: string
    }
  }
}

export function Providers({ children, session }: ProvidersProps) {
  const theme = {
    colors: {
      white: '#E3E1E1',
      dark: '#0E0F0E',
      leaf: '#1E241F',
      grey: {
        300: '#A09E9E',
        500: '#675B5B',
      },
      primary: '#641323',
      secundary: '#1AFF00',
    },
    fonts: {
      xsmall: '12px',
      small: '14px',
      medium: '16px',
      large: '18px',
      xlarge: '28px',
      xxlarge: '36px',
      xxxlarge: '56px',
    },
  }

  const [client] = useState(() => new QueryClient())

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={client}>
        <RootStyleRegistry>
          <MantineEmotionProvider>
            <ThemeProvider theme={theme}>
              <MantineProvider
                stylesTransform={emotionTransform}
                defaultColorScheme='dark'
              >
                <GlobalStyles />

                {children}
              </MantineProvider>
            </ThemeProvider>
          </MantineEmotionProvider>
        </RootStyleRegistry>
      </QueryClientProvider>
    </SessionProvider>
  )
}

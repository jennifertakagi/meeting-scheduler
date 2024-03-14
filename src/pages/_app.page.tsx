import type { AppProps } from 'next/app'
import '../lib/dayjs'
import { SessionProvider } from 'next-auth/react'
import { globalStyles } from '../styles/global'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/react-query'
import { DefaultSeo } from 'next-seo'

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'pt_BR',
            url: 'https://www.meeting-scheduler.com.br',
            siteName: 'Meeting Scheduler',
          }}
        />

        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  )
}

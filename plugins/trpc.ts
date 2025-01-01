import type { AppRouter } from '~/server/api/trpc/[trpc]'
import { loggerLink } from '@trpc/client'
import { createTRPCNuxtClient, httpBatchLink } from 'trpc-nuxt/client'

export default defineNuxtPlugin(() => {
  /**
   * createTRPCNuxtClient adds a `useQuery` composable
   * built on top of `useAsyncData`.
   */
  const trpc = createTRPCNuxtClient<AppRouter>({
    links: [
      loggerLink({
        enabled: (opts) => {
          if (import.meta.env.DEV) {
            return !import.meta.env.SSR || (opts.direction === 'down' && opts.result instanceof Error)
          }

          return false
        },
      }),
      httpBatchLink({
        url: '/api/trpc',
      }),
    ],
  })

  return {
    provide: {
      trpc,
    },
  }
})

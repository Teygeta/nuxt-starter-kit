import { defineConfig } from 'drizzle-kit'
import { env } from './env'
import 'dotenv/config'

export default defineConfig({
  out: './drizzle',
  schema: './db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL!,
  },
})

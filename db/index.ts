import { drizzle } from 'drizzle-orm/node-postgres'
import { env } from '~/env'
import 'dotenv/config'

export const db = drizzle(env.DATABASE_URL!)

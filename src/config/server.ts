import dotenv from 'dotenv'

dotenv.config()

const HOSTNAME = process.env.HOSTNAME ?? 'localhost'
const PORT = process.env.PORT ?? 3000

export default {
  HOSTNAME,
  PORT,
}
import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'

import serverConfig from './config/server'

const app = express()

app.use(express.json())
app.use(morgan('dev')) // for logs
app.use(express.urlencoded({ extended: false }))

app.listen(serverConfig.PORT, () => {
  console.log(`🔥 Server is listening on PORTE ${serverConfig.PORT}`)
})

console.log(serverConfig)

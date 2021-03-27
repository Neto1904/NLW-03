import express from 'express'
import 'express-async-errors'
import { createConnection } from 'typeorm'
import routes from './routes'
import ErrorHandler from './errors/handler'

const app = express()
app.use(express.json())
app.use(routes)
app.use(ErrorHandler)

app.listen(8080, async () => {
  await createConnection()
  console.log('Server running on port 8080')
})

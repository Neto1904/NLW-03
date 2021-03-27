import express from 'express'
import { createConnection } from 'typeorm'
import routes from './routes'

const app = express()
app.use(express.json())
app.use(routes)

app.listen(8080, async () => {
  await createConnection()
  console.log('Server running on port 8080')
})

import express from 'express'
import { createConnection } from 'typeorm'

const app = express()
app.use(express.json())

app.listen(8080, async () => {
  await createConnection()
  console.log('Server running on port 8080')
})

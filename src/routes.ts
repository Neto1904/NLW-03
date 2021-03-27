import express from 'express'
import orphanagesController from './controllers/orphanagesController'

const routes = express.Router()

routes.post('/orphanages', orphanagesController.create)

export default routes

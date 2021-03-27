import express from 'express'
import orphanagesController from './controllers/orphanagesController'
import upload from './config/multer'

const routes = express.Router()

routes.post('/orphanages', upload.array('images'), orphanagesController.create)
routes.get('/orphanages', orphanagesController.getAll)
routes.get('/orphanages/:id', orphanagesController.getOne)

export default routes

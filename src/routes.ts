import express from 'express'
import orphanagesController from './controllers/orphanagesController'
import upload from './config/multer'
import path from 'path'

const routes = express.Router()

routes.post('/orphanages', upload.array('images'), orphanagesController.create)
routes.get('/orphanages', orphanagesController.getAll)
routes.get('/orphanages/:id', orphanagesController.getOne)

routes.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

export default routes

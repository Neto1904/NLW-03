import { Request, Response, Express } from 'express'
import { getRepository } from 'typeorm'
import Orphanage from '../database/entities/orphanage'

export default {
  async create (req: Request, res: Response) {
    const images = []
    const orphanageRepository = getRepository(Orphanage)
    for (const image of req.files as Express.Multer.File[]) {
      images.push({ path: image.filename })
    }
    req.body.images = images
    const orphanage = orphanageRepository.create(req.body)
    await orphanageRepository.save(orphanage)
    return res.status(201).json(orphanage)
  },

  async getAll (req: Request, res: Response) {
    const orphanageRepository = getRepository(Orphanage)
    const orphanages = await orphanageRepository.find()
    return res.status(201).json(orphanages)
  },

  async getOne (req: Request, res: Response) {
    const { id } = req.params
    const orphanageRepository = getRepository(Orphanage)
    const orphanages = await orphanageRepository.findOneOrFail(id)
    return res.status(201).json(orphanages)
  }
}

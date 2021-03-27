import { Request, Response, Express } from 'express'
import { getRepository } from 'typeorm'
import Orphanage from '../database/entities/orphanage'
import OrphanageView from '../views/orphanagesView'
import * as yup from 'yup'

export default {
  async create (req: Request, res: Response) {
    const schema = yup.object().shape({
      name: yup.string().required(),
      latitude: yup.number().required(),
      longitude: yup.number().required(),
      about: yup.string().required().max(300),
      instructions: yup.string().required(),
      openingHours: yup.string().required(),
      openOnWeekends: yup.boolean().required(),
      images: yup.array(yup.object().shape({
        path: yup.string().required()
      }))
    })
    const images = []
    const orphanageRepository = getRepository(Orphanage)
    for (const image of req.files as Express.Multer.File[]) {
      images.push({ path: image.filename })
    }
    req.body.images = images
    await schema.validate(req.body, {
      abortEarly: false
    })
    const orphanage = orphanageRepository.create(req.body)
    await orphanageRepository.save(orphanage)
    return res.status(201).json(orphanage)
  },

  async getAll (req: Request, res: Response) {
    const orphanageRepository = getRepository(Orphanage)
    const orphanages = await orphanageRepository.find({
      relations: ['images']
    })
    return res.status(201).json(orphanages)
  },

  async getOne (req: Request, res: Response) {
    const { id } = req.params
    const orphanageRepository = getRepository(Orphanage)
    const orphanages = await orphanageRepository.findOneOrFail(id, {
      relations: ['images']
    })
    return res.status(201).json(OrphanageView.render(orphanages))
  }
}

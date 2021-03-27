import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Orphanage from '../database/entities/orphanage'

export default {
  async create (req: Request, res: Response) {
    const orphanageRepository = getRepository(Orphanage)
    const orphanage = orphanageRepository.create(req.body)
    console.log(orphanage)
    await orphanageRepository.save(orphanage)
    return res.status(201).json(orphanage)
  }
}

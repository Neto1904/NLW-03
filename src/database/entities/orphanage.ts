import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import Image from './image'

@Entity('orphanage')
export default class orphanage {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  name: string

  @Column()
  latitude: number

  @Column()
  longitude: number

  @Column()
  about: string

  @Column()
  instructions: string

  @Column({ name: 'opening_hours' })
  openingHours: string

  @Column({ name: 'open_on_weekends' })
  openOnWeekends: boolean

  @OneToMany(() => Image, image => image.orphanageId, {
    cascade: ['insert', 'update']
  })
  images: Image[]
}

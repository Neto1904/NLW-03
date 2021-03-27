import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import Orphanage from './orphanage'

@Entity('image')
export default class image {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  path: string

  @ManyToOne(() => Orphanage)
  @JoinColumn({ name: 'orphanage_id', referencedColumnName: 'id' })
  @Column('integer', { name: 'orphanage_id' })
  orphanageId: number
}

import Orphanage from '../database/entities/orphanage'
import ImagesView from './imagesView'

export default {
  render (orphanage: Orphanage) {
    return {
      id: orphanage.id,
      name: orphanage.name,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      about: orphanage.about,
      instructions: orphanage.instructions,
      opening_hours: orphanage.openingHours,
      openOnWeekends: orphanage.openOnWeekends,
      images: ImagesView.renderMany(orphanage.images)
    }
  },

  renderMany (orphanages: Orphanage[]) {
    return orphanages.map((orphanage) => this.render(orphanage))
  }
}

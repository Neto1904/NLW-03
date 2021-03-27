import Image from '../database/entities/image'

export default {
  render (image: Image) {
    return {
      id: image.id,
      url: `http://localhost:8080/uploads/${image.path}`
    }
  },

  renderMany (images: Image[]) {
    return images.map((image) => this.render(image))
  }
}

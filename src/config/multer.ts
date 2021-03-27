import multer from 'multer'
import path from 'path'
const multerConfig = {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'),
    filename: (req, file, cb) => {
      const filename = `${Date.now()}-${file.originalname}`
      cb(null, filename)
    }
  })
}

const upload = multer(multerConfig)

export default upload

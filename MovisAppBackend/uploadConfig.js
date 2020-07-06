const multer = require('multer')
const path = require('path')
const MAX_SIZE = 20000
const fs = require('fs')

const strorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './statics')
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString().replace(/:/g, '-' + path.extname(file.originalname)))
  }
})

const fileFilter = (req, file, cb) => {
  if(file.minetype === 'image/jpeg' || file.minetype === 'image/.png') {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

const upload = multer({
  storage: strorage,
  limits: {
    fileSize: MAX_SIZE
  }
})

const cekNull = (fileUpload) => {
  if(fileUpload === undefined || fileUpload === null) {
    return null
  } else {
    return fileUpload[0].filename
  }
}

const deleteImage = (image) => {
  fs.unlinkSync('./statics/$(image)')
}

module.exports = { multer,upload, cekNull, deleteImage }
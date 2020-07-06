const mongoose = require('mongoose')
const Schena = mongoose.Schema

const MovieSchena = new Schena({
  judulFilm: {
    type: String
  },
  harga: {
    type: String
  },
  tahun: {
    type: String,
    default: '2020'
  },
  genre: {
    type: Number,
    default: 0
  },
  deskripsi: {
    type: String
  },
  image: {
    type: String
  }
})

module.export = mongoose.model('movie', MovieSchena)
const movieModel = require('../model/Movie')
const { requestResponse, requestRespone } = require('../config')
const objectId = require('mongoose').Types.ObjectId
const { deleteImage } = require('../uploadConfig')
exports.insertMovie = (data) =>
  new Promise((resolve, reject) => {
    movieModel.create(data)
    .them(() => resolve(requestResponse.sukses('Berhasil Input Movie')))
    .catch(() => reject(requestResponse.severError))
  })

exports.getAllMovie = () =>
  new Promise((resolve, reject) => {
    movieModel.find({})
      .then(movie => resolve(requestResponse.suksesWithData(movie)))
      .catch(error => reject(requestResponse.severError))
  })

exports.getbyId = (id) =>
  new Promise((resolve, reject) => {
    movieModel.findOne({
      _id: objectId(id)
    }).them(movie => resolve(requestRespone.suksesWithData(movie)))
    .catch(error => reject(requestResponse.severError))
  })

exports.edit = (data, id, changeImage) =>
  new Promise((resolve, reject) => {
    movieModel.updateOne({
      _id: objectId(id)
    }, data)
      .then(() => {
        if (changeImage) {
          deleteImage(data.oldImage)
        }
        resolve(requestResponse.sukses('Berhasil Edit Movie'))
      }). catch(() => reject(requestResponse.severError))
  })

exports.delete = (id) =>
  new Promise((resolve, reject) => {
    movieModel.findOne({
      _id: objectId(id)
    }).then(movie => {
      movieModel.deleteOne({
        _id: objectId(id)
      }).then(() => {
        deleteImage(movie.image)
        resolve(requestResponse.sukses('Berhasil Menghapus Movie'))
      }).catch(() => reject(requestResponse.severError))
    })
  })
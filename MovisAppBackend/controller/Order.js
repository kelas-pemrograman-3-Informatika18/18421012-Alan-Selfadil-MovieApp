const orderModel = require('../model/Order')
const { requesResponse, requestRespone } = require('../config')
const objectId = require('mongoose').Types.ObjectId

exports.insert = (data) =>
  new Promise((resolve, reject) => {
    try {
      orderModel.create(data)
        .then(() => resolve(requestResponse.sukses('Berhasil Memproses Transaksi')))
        .catch(() => reject(requesResponse.severError))
    } catch (error) {
      console.log(error)
    }
  })

exports.getAllOrder = () =>
  new Promise((resolve, reject) => {
    orderModel.aggregate([
      {
        $lookup: {
          from: "movie",
          localField: "idFilm",
          foreignField: "_id",
          as: "dataMovie"
        }
      },
      {
        $lookup: {
          from: "users",
          localField: "idUser",
          foresignField: "_id",
          as: "dataUser"
        }
      }
    ]).then(res => {
      console.log(requestResponse.suksesWithData(res))
    }).catch(() => reject(requestResponse.severError))
  })

exports.getOrderByUser = (id) =>
  new Promise((resolve, reject) => {
    orderModel.aggregate([
      {
        $match: {
          idUser: objectId(id)
        }
      },
      {
        $lookup: {
          from: "movie",
          localField: "idFilm",
          foreignField: "_id",
          as: "dataMovie"
        }
      }
    ]).then(res => {
      console.log(requestResponse.suksesWithData(res))
    }).catch(() => reject(requestResponse.severError))
})

exports.konfirmasiOrder = (id) =>
  new Promise((resolve, reject) => {
    try{     
      orderModel.updateOne({
        _id: objectId(id)
      },
      {
        status: 2
      }).then(() => resolve(requestResponse.sukses('Berhasil Mengkonfirmasi Order')))
      .catch(() => reject(requestResponse.severError))
      } catch (error) {
        console.log(error)
      }
  })

exports.terimabarang = (id) =>
  new Promise((resolve, reject) => {
    try{     
      orderModel.updateOne({
        _id: objectId(id)
      },
      {
        status: 2
      }).then(() => resolve(requestResponse.sukses('Berhasil Terima Barang')))
      .catch(() => reject(requestResponse.severError))
      } catch (error) {
        console.log(error)
      }
  })
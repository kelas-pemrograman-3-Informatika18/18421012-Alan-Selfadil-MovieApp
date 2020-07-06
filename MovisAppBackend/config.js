const requestRespone = {
  gagal: (pesan) => {
    return {
      sukses: false,
      pesan: pesan
    }
  },
  sukses: (pesan) => {
    return {
      sukses: true,
      pesan: pesan
    }
  },
  severError: {
    sukses: false,
    pesan: 'Terjadi Kesalahan Di Sever Kami'
  },
  suksesLogin: (data) => {
    return{
      sukses: true,
      pesan: 'Berhasil Login',
      data: data
    }
  },
  suksesWithData: (data) => {
    return {
      sukses: true,
      pesan: 'Berhasil Memuat Data',
      data: data
    }
  }
}
module.exports = { requestRespone }
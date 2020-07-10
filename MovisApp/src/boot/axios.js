import Vue from 'vue'
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/'
})

Vue.prototype.$axios = axiosInstance

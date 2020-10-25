import axios from 'axios'

const baseURL = `http://localhost:5000/api/v1/`

const publicFetch = axios.create({
  baseURL
})

export { publicFetch, baseURL }

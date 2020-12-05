import axios from 'axios'

const baseURL = `https://api-team-benz.herokuapp.com/api/v1/`

const publicFetch = axios.create({
  baseURL
})

export { publicFetch, baseURL }

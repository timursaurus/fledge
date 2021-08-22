import axios from 'axios'

let req = {
  baseURL: 'http://localhost:4000/',
}

export const HTTP = axios.create(req)

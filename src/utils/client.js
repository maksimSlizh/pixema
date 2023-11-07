import axios from 'axios'
import { apiToken } from '../api'

export const client = axios.create({
  baseURL: 'https://api.kinopoisk.dev/',
  timeout: 3000,
  headers: {
    'X-API-KEY': apiToken
  }
})

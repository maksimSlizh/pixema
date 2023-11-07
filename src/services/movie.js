import { client } from '../utils/client'
import { version, movie } from '../api'

export const requestMovie = async () => {
  const response = await client.get(`${version}${movie}`)
  return response
}

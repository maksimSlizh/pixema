import { client } from '../utils/client'
import { apiKey } from '../../api'

export const requestFilms = async (t = 'Avatar') => {
  const response = await client.get(`?apikey=${apiKey}`,{
    params: {
      t,
    }
  })
  return response
}

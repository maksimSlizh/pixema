import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchMovies} from '../src/redux/movieSlice'

export default function App() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.movie)
  useEffect(() => {
    dispatch(fetchMovies())
  }, [dispatch])

  return (
    <div>
      <h1>Pixema</h1>
    </div>
  )
}

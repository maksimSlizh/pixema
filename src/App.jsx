import {fetchFilms} from '../src/redux/filmSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

export default function App() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.films)
  const [t, setT] = useState('Avatar')
  useEffect(() => {
    dispatch(fetchFilms(t))
  }, [dispatch, t])

  return (
    <div>
      <h1>Pixema</h1>
    </div>
  )
}

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../redux/movieSlice'
import { Cards } from '../components/Cards/Cards'

export function Main() {

  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.movie)
  useEffect(() => {
    dispatch(fetchMovies())
  }, [dispatch])

  function renderCards() {
    return data.map((item, index) => {
      return <Cards key={index} {...item} />
    })
  }
  return (
    <>
      <div className="main">
        {renderCards()}
      </div>
    </>
  )
}

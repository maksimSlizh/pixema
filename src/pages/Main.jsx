import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../redux/movieSlice'
import { Cards } from '../components/Cards/Cards'
import { Navbar } from '../components/Navbar'

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
      <header className="navbar navbar-expand-lg bd-navbar sticky-top">
        <img className="logo" />
        <Navbar />
      </header>
      <section className="main mt-3 d-flex">
        <aside className="aside d-flex flex-column me-5">
          <a href="#">Home</a>
          <a href="#">Trends</a>
          <a href="#">Favorites</a>
          <a href="#">Setting</a>
        </aside>
      <div className="main__grid">
        {renderCards()}
      </div>
      </section>
    </>
  )
}

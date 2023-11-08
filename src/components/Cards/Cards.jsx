export function Cards(props) {
  console.log(props)
  function renderValue(arr, index) {
    return arr.map((item, i) => {
      if (i === index) {
        return item.name
      }
    })
  }
  const genres = props.genres.map((i, index) => i.name + ' ')
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="cards__wrapper">
        <img className="card-img-top" src={props.poster.url} />
        <p className="rating">{props.rating.imdb}</p>
      </div>
      <h4 className="card-title">{renderValue(props.names, 1)}</h4>
      <p className="card-tex">{genres}</p>
    </div>
  )
}

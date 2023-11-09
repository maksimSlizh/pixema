export function Navbar() {
  return (
    <nav className="container-xxl bd-gutter">
      <div className="container-fluid d-flex">
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div className="user d-flex">
          <div className="user__logo">
            <img className="user__img"/>
          </div>
          <p className="user__name">User</p>
          <div>DropDown</div>
        </div>
      </div>
    </nav>
  )
}

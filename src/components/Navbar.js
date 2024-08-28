import { useHistory, Link } from 'react-router-dom';


const Navbar = ({ searchText, setSearchText }) => {


  const history = useHistory();

  const updateSearchText = (e) => {
    // console.log(e.target.value);
    history.push("/search");
    setSearchText(e.target.value);

  }

  const handleSearch = () => {
    history.push(`/search?query=${searchText}`);
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Movie Browser🎥</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link disabled" aria-disabled="true" to="/">Coming Soon</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search" placeholder="Search"
              aria-label="Search"
              value={searchText}
              onChange={updateSearchText}
            />
            <button
              onClick={handleSearch} className="btn btn-outline-success" type="button">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
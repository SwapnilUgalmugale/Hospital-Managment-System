import { Link } from 'react-router-dom'
const HomeNavBar = () => {
  return (
    <div>
      <nav className="navbar  navbar-expand-lg navbar-dark bg-primary ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/home">
              <span className="navbar-brand" href="#">
                Home
              </span>
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/aboutUs">
                <li className="nav-item">
                  <span className="nav-link active" aria-current="page">
                    About Us
                  </span>
                </li>
              </Link>
              <Link to="/doctors">
                <li className="nav-item">
                  <span className="nav-link active">Doctors</span>
                </li>
              </Link>
              <Link to="/contacts">
                <li className="nav-item">
                  <span className="nav-link active">Contact</span>
                </li>
              </Link>
            </ul>

            <div>
              <Link to="/employee">
                <button className="btn btn-emp mx-3" type="submit">
                  Employee Login
                </button>
              </Link>
              <Link to="/patientSignIn">
                <button className="btn btn-appt mx-3" type="submit">
                  Book Appointment
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
  
    </div>
  )
}
export default HomeNavBar

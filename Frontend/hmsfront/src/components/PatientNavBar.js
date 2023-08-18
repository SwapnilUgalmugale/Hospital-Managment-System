import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import '../App.css'
import { patientLogout } from '../actions/patientAction'
const PatientNavBar = (props) => {
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(patientLogout())
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
            <span className="navbar-brand">Welcome to Hospital</span>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/patientHome">
                <li className="nav-item">
                  <span
                    className="nav-link active nav-bar-item"
                    aria-current="page">
                    Home
                  </span>
                </li>
              </Link>
              <Link to="/patient/viewPrescription">
                <li className="nav-item">
                  <span
                    className="nav-link active nav-bar-item"
                    aria-current="page">
                    View Prescriptions
                  </span>
                </li>
              </Link>
              <Link to="/bookAppointment">
                <li className="nav-item">
                  <span
                    className="nav-link active nav-bar-item"
                    aria-current="page">
                    Book Appointment
                  </span>
                </li>
              </Link>

              <Link to="/patient/editProfile">
                <li className="nav-item">
                  <span
                    className="nav-link active nav-bar-item"
                    aria-current="page">
                    edit profile
                  </span>
                </li>
              </Link>
            </ul>
            <div>Welcome {props.name}</div>
            <div>
              <button
                onClick={onLogout}
                className="btn btn-success mx-3 float-end"
                type="button">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default PatientNavBar

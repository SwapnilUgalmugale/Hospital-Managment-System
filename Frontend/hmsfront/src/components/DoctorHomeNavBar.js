import { Link } from 'react-router-dom'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { employeeLogoutAction } from "../actions/employeeActions";

const DoctorHomeNavBar = () => {
  const dispatch = useDispatch()
  const doctor = JSON.parse(sessionStorage.getItem('emp_details'))
  const onLogout = () => {
    dispatch(employeeLogoutAction())
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
            <span className="navbar-brand">Hospital Management System</span>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/doctor/home">
                <li className="nav-item">
                  <span
                    className="nav-link active nav-bar-item"
                    aria-current="page">
                    Home
                  </span>
                </li>
              </Link>
              <Link to="/doctor/appointments">
                <li className="nav-item">
                  <span
                    className="nav-link active nav-bar-item"
                    aria-current="page">
                    View Appointment
                  </span>
                </li>
              </Link>
            </ul>
            <div>Welcome {doctor.name} !</div>
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
export default DoctorHomeNavBar

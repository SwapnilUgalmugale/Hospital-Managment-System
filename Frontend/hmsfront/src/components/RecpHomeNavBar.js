import { Link } from "react-router-dom";
import { employeeLogoutAction } from "../actions/employeeActions";

const { useSelector,useDispatch } = require("react-redux");

const RecpHomeNavBar = (props) => {
  const receptionist = JSON.parse(sessionStorage.getItem('emp_details'))
  console.log("receptionist",receptionist)
  const dispatch = useDispatch()
  const onLogout = () => {
    dispatch(employeeLogoutAction())
  };
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
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <span className="navbar-brand">Hospital Management System</span>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/receptionist/home">
                <li className="nav-item">
                  <span
                    className="nav-link active nav-bar-item"
                    aria-current="page"
                  >
                    Home
                  </span>
                </li>
              </Link>
              <Link to="/receptionist/view-appointments">
                <li className="nav-item">
                  <span
                    className="nav-link active nav-bar-item"
                    aria-current="page"
                  >
                   View Appointments
                  </span>
                </li>
              </Link>
              <Link to="/receptionist/admit-patient">
                <li className="nav-item">
                  <span
                    className="nav-link active nav-bar-item"
                    aria-current="page"
                  >
                    Admit Patient
                  </span>
                </li>
              </Link>
              <Link to="/receptionist/discharge-patient">
                <li className="nav-item">
                  <span
                    className="nav-link active nav-bar-item"
                    aria-current="page"
                  >
                    Discharge Patient
                  </span>
                </li>
              </Link>
              <Link to="/receptionist/accept-payment">
                <li className="nav-item">
                  <span
                    className="nav-link active nav-bar-item"
                    aria-current="page"
                  >
                    Accept Payment
                  </span>
                </li>
              </Link>
            </ul>
            <div>Welcome {receptionist.name}</div>
            <div>
              <button
                onClick={onLogout}
                className="btn btn-success mx-3 float-end"
                type="button"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default RecpHomeNavBar;

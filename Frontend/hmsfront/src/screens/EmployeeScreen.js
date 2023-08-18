import { useState, useEffect } from "react";
import Header from "../components/Header";
import { employeeSigninAction } from "../actions/employeeActions";
import { useDispatch, useSelector } from "react-redux";

const EmployeeScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const employeeSignin = useSelector((store) => store.employeeSignin);
  const { loading, error, response } = employeeSignin;

  const dispatch = useDispatch();
  const onSignin = () => {
    dispatch(employeeSigninAction(email, password));
  };

  useEffect(() => {
    if (response && response.status == "200") {
      sessionStorage.setItem("emp_details", JSON.stringify(response.data));
      sessionStorage.setItem("isLoggedIn", true);
      if (response.data.role == "DOCTOR") {
        props.history.push("/doctor");
      } else if (response.data.role == "ADMIN") {
        props.history.push("/admin");
      } else if (response.data.role == "RECEPTIONIST") {
        props.history.push("/receptionist");
      } else if (response.data.role == "LABMANAGER") {
        props.history.push("/lab");
      }
    } else if (response && response.status == "error") {
      alert(response.error);
    } else if (error) {
      alert(error);
    }
  }, [loading, error, response]);

  return (
    <div>
      <div className="center-align fadeInDown">
        <h3 className="text-center">Employee Signin</h3>
        <div className="form box-shadow">
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              className="form-control"
              placeholder="hms@gmail.com"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              className="form-control"
              placeholder="*****"
            ></input>
          </div>
        </div>
        <div className="text-center">
          <button
            onClick={onSignin}
            className="btn btn-success btn-lg btn-block"
          >
            Signin
          </button>
        </div>
      </div>
      {loading && <div className="text-center">waiting for response</div>}
    </div>
  );
};

export default EmployeeScreen;

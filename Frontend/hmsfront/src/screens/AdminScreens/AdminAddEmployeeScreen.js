import { useState, useEffect } from "react";
import { employeeSignupAction } from "../../actions/employeeActions";
import { useDispatch, useSelector } from "react-redux";
const { default: Header } = require("../../components/Header");

const AdminAddEmployeeScreen = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [contact, setContact] = useState("");
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("");
  const dispatch = useDispatch();

  const employee_details = {
    name,
    email,
    password,
    gender,
    contact,
    role,
    dob,
    department,
  };
  const employeeSignup = useSelector((store) => store.employeeSignup);
  const { loading, response, error } = employeeSignup;

  useEffect(() => {
    if (response && response.status == "200") {
      // user successfully got registered
      alert("Employee added successfully");
      document.location.href = "/admin/view-employees";
    } else if (error) {
      // there is an error while making the API call
      console.log(error);
      alert("error while making API call");
    }
  }, [loading, response, error]);

  const onSignup = () => {
    dispatch(employeeSignupAction(employee_details));
  };
  return (
    <div className="container">
      <Header title="Add Employee" />
      <div className="form">
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="form-control"
              ></input>
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                className="form-control"
                placeholder="test@test.com"
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
            <div className="mb-3">
              <label className="form-label">Date of birth</label>
              <input
                onChange={(e) => {
                  setDob(e.target.value);
                }}
                type="date"
                className="form-control"
              ></input>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Contact No</label>
              <input
                onChange={(e) => {
                  setContact(e.target.value);
                }}
                className="form-control"
              ></input>
            </div>
            <div className="mb-3">
              <label className="form-label">Gender</label>
              <select
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                className="form-select"
                aria-label="Default select example"
              >
                <option defaultValue>Select Gender</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
                <option value="OTHER">Other</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Role</label>
              <select
                onChange={(e) => {
                  setRole(e.target.value);
                }}
                className="form-select"
                aria-label="Default select example"
              >
                <option defaultValue>Select Role</option>
                <option value="DOCTOR">Doctor</option>
                <option value="RECEPTIONIST">Receptionist</option>
                <option value="LABMANAGER">Lab Manager</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Department Id</label>
              <select
                onChange={(e) => {
                  setDepartment(e.target.value);
                }}
                class="form-select"
                aria-label="Default select example"
              >
                <option selected>Select Department Id</option>
                <option value="1">Admin</option>
                <option value="2">Cardiology</option>
                <option value="3">Neurology</option>
                <option value="4">Orthopedics</option>
                <option value="5">Opthalmology</option>
                <option value="6">Receptionist</option>
                <option value="7">LABMANAGER</option>
              </select>
            </div>
          </div>
          <div className="text-center">
            <button onClick={onSignup} className="btn btn-success btn-block">
              Add Employee
            </button>
          </div>
        </div>
      </div>
      {employeeSignup.loading && <div>waiting for result</div>}
    </div>
  );
};

export default AdminAddEmployeeScreen;

import { useState, useEffect } from "react";
import {employeeUpdateAction } from "../../actions/employeeActions";
import { useDispatch, useSelector } from "react-redux";
const { default: Header } = require("../../components/Header");

const AdminUpdateEmployeeScreen = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const dispatch = useDispatch();
  const emp_id=sessionStorage.getItem('emp_id')
  const employee_details = {
    name,
    email,
    password,
    contact,
  };
  const employeeUpdate = useSelector((store) => store.updateEmployee);
  const { loading, response, error } = employeeUpdate;

  useEffect(() => {
    if (response && response.status == "200") {
      // user successfully got registered
      props.history.push("/admin/view-employees");
    } else if (error) {
      // there is an error while making the API call
      console.log(error);
      alert("error while making API call");
    }
  }, [loading, response, error]);

  const onUpdate = () => {
    dispatch(employeeUpdateAction(emp_id,employee_details));
  };
  return (
    <div>
      <Header title="Update Employee Details" />
      <div className="form">
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
          <label className="form-label">Contact No</label>
          <input
            onChange={(e) => {
              setContact(e.target.value);
            }}
            className="form-control"
          ></input>
        </div>
        
        <div className="text-center">
          <button onClick={onUpdate} className="btn btn-primary">
            Update
          </button>
        </div>
      </div>

      {employeeUpdate.loading && <div>waiting for result</div>}
    </div>
  );
};

export default AdminUpdateEmployeeScreen;

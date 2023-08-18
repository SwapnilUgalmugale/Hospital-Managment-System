import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  patientGetProfileAction,
  patientEditProfileAction,
} from "../../actions/patientAction";
import Header from "../../components/Header";
import PatientNavBar from "../../components/PatientNavBar";

const PatientEditProfileScreen = (props) => {
  const user = JSON.parse(sessionStorage.getItem("pat_info"));

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState();
  const [phone, setPhone] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");

  const patientGetProfile = useSelector((store) => store.patientGetprofile);
  const { loading, error, response } = patientGetProfile;

  const patientEditProfile = useSelector((store) => store.patientEditprofile);
  const { eloading, eerror, eresponse } = patientEditProfile;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(patientGetProfileAction(user.id));
  }, []);

  useEffect(() => {
    setName(response && response.data.name);
    setGender(response && response.data.gender);
    setEmail(response && response.data.email);
    setPassword(response && response.data.password);
    setCity(response && response.data.city);
    setAge(response && response.data.age);
    setPhone(response && response.data.phone);
    setBloodGroup(response && response.data.bloodGroup);
  }, [response]);

  const onUpdate = () => {
    dispatch(
      // console.log(
      //   'my data ',
      //   name,
      //   gender,
      //   email,
      //   password,
      //   city,
      //   age,
      //   contact,
      //   bloodGroup
      // ),
      patientEditProfileAction(
        name,
        gender,
        email,
        password,
        city,
        age,
        phone,
        bloodGroup
      )
    );
  };

  useEffect(() => {
    if (eresponse && eresponse.status == "200") {
      alert("profile updated successfully");
      props.history.push("/patientHome");
    } else if (eresponse && eresponse.status == "error") {
      alert(eresponse.error);
    } else if (error) {
      alert(error);
    }
  }, [eloading, eerror, eresponse]);
  return (
    <div>
      <PatientNavBar name={user.name} />
      <div className="form edit-profile">
        <Header title="Edit Profile" />
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                defaultValue={name}
                readOnly={true}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                defaultValue={email}
                readOnly={true}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Age</label>
              <input
                onChange={(e) => {
                  setAge(e.currentTarget.value);
                }}
                type="number"
                className="form-control"
                defaultValue={age}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Blood Group</label>
              <input
                onChange={(e) => {
                  setBloodGroup(e.target.value);
                }}
                type="text"
                className="form-control"
                defaultValue={bloodGroup}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Gender</label>
              <select
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                className="form-select"
                aria-label="Default select example"
                readOnly={true}
              >
                <option defaultValue={gender}>{gender}</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
                <option value="OTHER">Other</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="form-control"
                placeholder="*****"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                onChange={(e) => {
                  setPhone(e.currentTarget.value);
                }}
                type="number"
                className="form-control"
                defaultValue={phone}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">City</label>
              <input
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                type="text"
                className="form-control"
                defaultValue={city}
              />
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={onUpdate}
              className="btn btn-success btn-lg btn-block"
            >
              Update
            </button>
          </div>
          {loading && <div>waiting for response</div>}
        </div>
      </div>
    </div>
  );
};
export default PatientEditProfileScreen;

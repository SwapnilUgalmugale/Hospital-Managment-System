const Profile = () => {
  const admin = JSON.parse(sessionStorage.getItem("emp_details"));
  return (
    <div className="page-content">
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-xl-6 col-md-12">
            <div className="card user-card-full">
              <div className="row m-l-0 m-r-0">
                <div className="col-sm-4  user-profile" style={{background : '#90e0ef'} }>
                  <div className="card-block text-center text-white">
                    <div className="m-b-25">
                      {" "}
                      <img
                        src="https://img.icons8.com/bubbles/100/000000/user.png"
                        className="img-radius"
                        alt="User-Profile-Image"
                      />{" "}
                    </div>
                    <h6 className="f-w-600">{admin.name}</h6>
                    <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="card-block">
                    <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                      Id: {admin.id}
                    </h6>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Role</p>
                        <h6 className="text-muted f-w-400">{admin.role}</h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Email</p>
                        <h6 className="text-muted f-w-400">{admin.email}</h6>
                      </div>
                    </div>
                    <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600"></h6>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Phone</p>
                        <h6 className="text-muted f-w-400">{admin.contact}</h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Date of Birth</p>
                        <h6 className="text-muted f-w-400">{admin.dob}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="card text-dark  mb-3 container profile">
        <div className="card-header">Hii {admin.name}</div>
        <div className="card-body">
          <h3 className="card-title">Your Details:</h3>
          <h5>Id:{admin.id}</h5>
          <h5>Role:{admin.role}</h5>
          <h5>Email:{admin.email}</h5>
          <h5>Dob:{admin.dob}</h5>
          <h5>Contact:{admin.contact}</h5>
        </div>
      </div> */}
    </div>
  );
};

export default Profile;

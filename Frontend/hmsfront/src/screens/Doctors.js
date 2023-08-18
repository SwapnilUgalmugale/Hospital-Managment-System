import Header from "../components/Header";

const DoctorScreen = () => {
  return (
    <div>
      <section id="doctors" className="doctors">
        <div className="container center">
          <div>
            <Header title="Our Doctors" />
            <p>
              Meet Our Doctors At HMS, we support you every step of the way
              through your care. We’ve gathered a team of leading specialists
              who are committed to providing you with the most intuitive and
              comfortable treatments. The following list will help you to find
              the doctor that is right for you.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img
                    src="assets/img/doctors/doctors-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>Walter White</h4>
                  <span>Chief Medical Officer</span>
                  <p>
                    Walter White is associated with HMS since November 2005.He
                    has an immense experience of 18yrs.
                  </p>
                  <div className="social">
                    <span href="">
                      <i className="ri-twitter-fill"></i>
                    </span>
                    <span href="">
                      <i className="ri-facebook-fill"></i>
                    </span>
                    <span href="">
                      <i className="ri-instagram-fill"></i>
                    </span>
                    <span href="">
                      {" "}
                      <i className="ri-linkedin-box-fill"></i>{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img
                    src="assets/img/doctors/doctors-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>Sarah Shitole</h4>
                  <span>Anesthesiologist</span>
                  <p>
                    Sarah Shitole is associated with HMS since November 2005.She
                    has an immense experience of 7yrs.
                  </p>
                  <div className="social">
                    <span href="">
                      <i className="ri-twitter-fill"></i>
                    </span>
                    <span href="">
                      <i className="ri-facebook-fill"></i>
                    </span>
                    <span href="">
                      <i className="ri-instagram-fill"></i>
                    </span>
                    <span href="">
                      {" "}
                      <i className="ri-linkedin-box-fill"></i>{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4">
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img
                    src="assets/img/doctors/doctors-3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>Jaydeep Shitole</h4>
                  <span>Cardiology</span>
                  <p>
                    Jaydeep Shitole is associated with HMS since November
                    2005.He has an immense experience of 7yrs.
                  </p>
                  <div className="social">
                    <span href="">
                      <i className="ri-twitter-fill"></i>
                    </span>
                    <span href="">
                      <i className="ri-facebook-fill"></i>
                    </span>
                    <span href="">
                      <i className="ri-instagram-fill"></i>
                    </span>
                    <span href="">
                      {" "}
                      <i className="ri-linkedin-box-fill"></i>{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4">
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img
                    src="assets/img/doctors/doctors-4.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>Amanda Jepson</h4>
                  <span>Neurosurgeon</span>
                  <p>
                    Amanda Jepson is associated with HMS since November 2005.He
                    has an immense experience of 5yrs.
                  </p>
                  <div className="social">
                    <span href="">
                      <i className="ri-twitter-fill"></i>
                    </span>
                    <span href="">
                      <i className="ri-facebook-fill"></i>
                    </span>
                    <span href="">
                      <i className="ri-instagram-fill"></i>
                    </span>
                    <span href="">
                      {" "}
                      <i className="ri-linkedin-box-fill"></i>{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default DoctorScreen;

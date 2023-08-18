const Contact = () => {
  return (
    <div className="container center contact" id="contact-sec">
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <div className="footer-thumb">
            <h4 className="wow fadeInUp" data-wow-delay="0.4s">
              Contact Info
            </h4>

            <p>More colony, Jath , Jath road, Dist-Sangli</p>

            <div className="contact-info">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-telephone-fill mx-3"
                  viewBox="0 0 16 16">
                  <path
                    fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>{' '}
                010-070-0170
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope-fill mx-3"
                  viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                </svg>
                info@company.com
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-sm-6">
          <div className="footer-thumb">
            <div className="opening-hours">
              <h4 className="wow fadeInUp" data-wow-delay="0.4s">
                Opening Hours
              </h4>
              <p>
                Monday - Friday <span>06:00 AM - 10:00 PM</span>
              </p>
              <p>
                Saturday <span>09:00 AM - 08:00 PM</span>
              </p>
              <p>
                Sunday <span>Closed</span>
              </p>
              <div className="social">
                <span>
                  <i className="ri-twitter-fill mx-3"></i>
                </span>
                <span>
                  <i className="ri-facebook-fill mx-3"></i>
                </span>
                <span>
                  <i className="ri-instagram-fill mx-3"></i>
                </span>
                <span>
                  <i className="ri-linkedin-box-fill mx-3"></i>{' '}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact

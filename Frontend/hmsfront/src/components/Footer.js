const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="col-md-12 col-sm-12 border-top">
          <div className="col-md-4 col-sm-6">
            <div className="copyright-text">
              <p>Copyright &copy; 2022 Sunbeam</p>
            </div>
          </div>

          <div className="col-md-2 col-sm-2 text-align-center">
            <div className="angle-up-btn">
              <a
                href="#top"
                className="smoothScroll wow fadeInUp"
                data-wow-delay="1.2s">
                <i className="fa fa-angle-up"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Footer

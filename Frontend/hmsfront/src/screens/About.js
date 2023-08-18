import Footer from "../components/Footer";
import Header from "../components/Header";

const AboutScreen = () => {
  return (
    <div className="container center ">
      <Header title="About Us" />
      <section id="about" className="about">
        <div className="row">
          <div className="wow fadeInUp  container" data-wow-delay="0.8s">
            <p className="font-weight-bold text-dark about-font">
              Our group has over two decades of experience in the healthcare
              sector, and is known for providing quality healthcare and valuable
              experience to all domestic and international patients. Our
              healthcare offerings are supported by a team of compassionate and
              dedicated medical professionals who have rich knowledge and
              experience in their respective domains. In addition, the company
              is built on lasting value systems that focuses on excellence,
              expertise, empathy and innovation. This approach has given us an
              in-depth understanding of specific disorders and their treatments,
              enabling us to focus on providing the best treatment options and
              care for our patients.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutScreen;

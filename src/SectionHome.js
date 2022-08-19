import React from "react";
import { Link } from "react-router-dom";
import Service from "./pages/services/Services";
import TechStack from "./pages/techStack/TechStack";
import AboutUs from "./pages/AboutUs";
import ContactUs from './pages/contactus/ContactUs'
const SectionHome = () => {
  return (
    <>
     
      <section id="home" className="  wapper py-lg-38 py-32  ">
        <div className=" border-radius-10 mx-auto text-color-white ">
          <div className="row py-32 flex-column justify-content-center align-items-center  wow animate__fadeInUp ">
            <div className="col-lg-8 col-md-11 col-xs-12 text-align-center py-4   ">
              <h2
                className=" h1 heading pt-64 wow animate__fadeInUp   "
                data-wow-delay="0.4s"
              >
                Your Business in a single Web Development
              </h2>
            </div>
            <div
              className=" col-lg-6 col-md-9 col-xs-11  text-align-center py-lg-64 py-48  wow animate__fadeInUp "
              data-wow-delay="0.6s"
            >
              <p className="p  font-weight-300">
                We passionate to modern technology trends and best practices
                drive in the development of top-notch solutions, which gives our
                client a high quality and affordable software outsourcing
                solutions to growing start-ups and enterprise companies in the
                world.
              </p>
            </div>
            <div
              className="py-32 text-align-center  wow animate__fadeInUp  "
              data-wow-delay="0.8s"
            >
              <Link
                to={"./about"}
                className="btn_primary_about py-18 px-48 border "
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="services">
        <Service />
      </section>

      <section id="techstack"><TechStack/></section>
      <section id="about"><AboutUs/></section>
      <section id="contactus"><ContactUs/></section>
      <section >
        <div className="bg_home"></div>
        <div className="bg_home bg2_home"></div>
        <div className="bg_home bg3_home"></div>
      </section>
    </>
  );
};

export default SectionHome;

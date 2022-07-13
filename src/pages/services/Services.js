import React, { useEffect } from "react";
import WOW from "wowjs";
import UiUx from "../../images/services/UiUx.svg";
import Mobile from '../../images/services/mobiledevelopment.svg'
import WebDevelopment from '../../images/services/webdevelopment.svg'

const Services = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <>
      <div className="bg_service"></div>
      <div className="bg_service bg2_service"></div>
      <div className="bg_service bg3_service"></div>
      <section className="wrapper  font_family_development bg_color py-32 ">
        <div className="container-xxl py-32 mx-auto">
          <div className="row justify-content-center ">
            <div className="title col-lg-7 col-md-10 col-xs-12 text-align-center ">
              <h2
                className="service_heading h2 py-8 text-color-white wow animate__fadeInUp "
                data-wow-delay="0.2s"
              >
                Service
              </h2>
              <p
                className="p service_para py-lg-32 py-md-20 py-xs-12 text-color-white  wow animate__fadeInUp "
                data-wow-delay="0.4s"
              >
                We offer a wide range of web development & digital marketing
                services. Our services include web design, web development,
                mobile app development, UI Designing, UX Designing, Games &
                more.
              </p>
            </div>
          </div>
          {/* UX design */}
          <div className="row py-32 justify-content-center">
            <div className="col-lg-6 col-md-10 col-xs-12 px-lg-32 px-xs-10 py-lg-32 py-xs-10">
              <div>
                <h3
                  className="h3 white  wow animate__fadeInUp"
                  data-wow-delay="0.6s"
                >
                  UX design
                </h3>
                <p
                  className="p white py-24  wow animate__fadeInUp"
                  data-wow-delay="0.8s"
                >
                  UX drives UI. Our team of UX designers at EZRO Tech have ample
                  of years of experience in the core areas of user experience,
                  which helps them collaborate the finer modules of usability
                  and functionality in-line with business goals and end-user
                  needs
                </p>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-10 col-xs-12">
                  <ul className="listul">
                    <li className="wow animate__fadeInUp" data-wow-delay="0.2s">
                      UX Research
                    </li>
                    <li className="wow animate__fadeInUp" data-wow-delay="0.4s">
                      Information Architecture
                    </li>
                    <li className="wow animate__fadeInUp" data-wow-delay="0.6s">
                      Mood Boards
                    </li>
                    <li className="wow animate__fadeInUp" data-wow-delay="0.8s">
                      UX Testing
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-10 col-xs-12">
                  <ul className="listul">
                    <li className="wow animate__fadeInUp" data-wow-delay="0.2s">
                      Interaction Design
                    </li>
                    <li className="wow animate__fadeInUp" data-wow-delay="0.4s">
                      Information Architecture
                    </li>
                    <li className="wow animate__fadeInUp" data-wow-delay="0.6s">
                      Wire framing
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-10 col-xs-12 px-lg-32 px-xs-10 py-lg-32 py-xs-10 wow animate__fadeInUp row align-items-center justify-content-center "
              data-wow-delay="0.6s"
            >
              <div className=" row align-items-center justify-content-center ">
                <img src={UiUx} alt={UiUx} className="width-100" />
              </div>
            </div>
          </div>
          {/* Mobile */}
          <div className=" row py-32 justify-content-center display-flex  flex-lg-row flex-xs-column-reverse">
            <div  className="col-lg-6 col-md-10 col-xs-12 px-lg-32 px-xs-10 py-lg-32 py-xs-10
             wow animate__fadeInUp row align-items-center justify-content-center "
              data-wow-delay="0.6s"
            >
              <div className=" row align-items-center justify-content-center ">
                <img src={Mobile} alt={Mobile} className="width-100" />
              </div>
            </div>
            <div className="col-lg-6 col-md-10 col-xs-12 px-lg-32 px-xs-10 py-lg-32 py-xs-10">
              <div>
                <h3
                  className="h3 white  wow animate__fadeInUp"
                  data-wow-delay="0.6s"
                >
                 Mobile
                </h3>
                <p
                  className="p white py-24  wow animate__fadeInUp"
                  data-wow-delay="0.8s"
                >
                  Intuitive designs combined with compelling user experience are
                  what makes our apps stand ahead in the digital age. Seamless
                  experience driven by international standards in collaboration
                  with out-of-the-box ideas is the specialty of EzroTech apps
                  helping your business accomplish its goals.
                </p>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-10 col-xs-12">
                  <ul className="listul">
                    <li className="wow animate__fadeInUp" data-wow-delay="0.2s">
                    Android App Development
                    </li>
                    <li className="wow animate__fadeInUp" data-wow-delay="0.4s">
                    React Native App Development
                    </li>
                    <li className="wow animate__fadeInUp" data-wow-delay="0.6s">
                    PhoneGap App Development
                    </li>
                    <li className="wow animate__fadeInUp" data-wow-delay="0.8s">
                    iPhone Development
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-10 col-xs-12">
                  <ul className="listul">
                    <li className="wow animate__fadeInUp" data-wow-delay="0.2s">
                    Xamarin App Development
                    </li>
                    <li className="wow animate__fadeInUp" data-wow-delay="0.4s">
                    iPad App Development
                    </li>
                    <li className="wow animate__fadeInUp" data-wow-delay="0.6s">
                    Apple Watch App Development
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Web Development */}
          <div className="row py-32 justify-content-center">
            <div className="col-lg-6 col-md-10 col-xs-12 px-lg-32 px-xs-10 py-lg-32 py-xs-10">
              <div>
                <h3
                  className="h3 white  wow animate__fadeInUp"
                  data-wow-delay="0.6s"
                >
                 Web Development
                </h3>
                <p
                  className="p white py-24  wow animate__fadeInUp"
                  data-wow-delay="0.8s"
                >
                  Cross-browser and cross-device compatibility driven by mobile responsiveness all under one roof
            Starting from basic website designs, including CMS and online store building to highly complex business website apps and design solutions, we will customize the best of web development solutions for you.
                </p>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-10 col-xs-12">
                  <ul className="listul">
                    <li className="wow animate__fadeInUp" data-wow-delay="0.2s">
                    Custom Application Development
                    </li>
                    <li className="wow animate__fadeInUp" data-wow-delay="0.4s">
                    Ecommerce Development
                    </li>
                    <li className="wow animate__fadeInUp" data-wow-delay="0.6s">
                    MEAN Stack Development
                    </li>
            
                  </ul>
                </div>
                <div className="col-lg-6 col-md-10 col-xs-12">
                  <ul className="listul">
                    <li className="wow animate__fadeInUp" data-wow-delay="0.2s">
                    Content Management System (CMS)
                    </li>
                    <li className="wow animate__fadeInUp" data-wow-delay="0.4s">
                    Social Media Apps
                    </li>
               
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-10 col-xs-12 px-lg-32 px-xs-10 py-lg-32 py-xs-10 wow animate__fadeInUp row align-items-center justify-content-center "
              data-wow-delay="0.6s"
            >
              <div className=" row align-items-center justify-content-center ">
                <img src={WebDevelopment} alt={WebDevelopment} className="width-100" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

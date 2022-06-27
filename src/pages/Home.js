import React, { useEffect } from "react";
import WOW from "wowjs";
import { Link } from "react-router-dom";
import OurMission from "./ourmission/OurMission";
const Home = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  let aboutURL = "";
  return (
    <>
      {/* Section 1 */}
      <div className="bg_home"></div>
      <div className="bg_home bg2_home"></div>
      <div className="bg_home bg3_home"></div>
      <section className="  wapper py-lg-38 py-32  ">
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
      <section>
        <OurMission/>
      </section>
      {/* Sectoin 2 */}
      <section className="wrapper  py-lg-72 py-md-48 py-20 text-color-white ">
        <div className="container-xxl py-lg-0 py-16 mx-auto">
          <div className="row flex-column-reverse py-lg-32 py-md-20 flex-lg-row ">
            <div className="col-lg-6 col-md-12 col-xs-12 py-20 pl-lg-72 my-0 display-flex justify-content-center flex-column ">
              <div className="display-flex flex-column ">
                <div className="col-lg-9 col-md-11 col-xs-12 ">
                  <div
                    className="py-32   wow animate__fadeInUp  "
                    data-wow-delay="0.2s"
                  >
                    <h3 className="  h2  py-16 ">We evolve with the times</h3>
                  </div>
                  <div className="">
                    <p
                      className="p   wow animate__fadeInUp  "
                      data-wow-delay="0.4s"
                    >
                      We explore emerging technologies to create amazing
                      experiences for users and business
                    </p>
                    <p
                      className="p    wow animate__fadeInUp  "
                      data-wow-delay="0.6s"
                    >
                      That means we spend time learning new languages and
                      frameworks so that your solution is made using the best
                      possible tools and techniques
                    </p>
                  </div>
                </div>
                <div
                  className="py-16 row wow animate__fadeInUp  "
                  data-wow-delay="0.8s"
                >
                  <a
                    href={aboutURL}
                    className=" btn_primary  px-32 border-radius-4  py-12 fontWeight-500  border   "
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 col-xs-12 display-flex  wow animate__fadeInUp  "
              data-wow-delay="0.2s"
            >
              <div className="pl-lg-100">
                <img
                  alt="section 2"
                  src="https://grorapidassets.s3.amazonaws.com/images/webinartemplate/V2/ai.png"
                  id="icvbt"
                  className="width-100  "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section-3 */}
      <section className="wrapper  py-lg-72 py-md-48 py-20 text-color-white">
        <div className="container-xxl py-lg-0 py-16 mx-auto">
          <div className="row   ">
            <div className="col-lg-6 col-md-12 col-xs-12 py-32 display-flex   ">
              <div className="pl-lg-40">
                <img
                  alt="innovation"
                  src="https://grorapidassets.s3.amazonaws.com/images/webinartemplate/V2/Innovation.png"
                  id="icvbt"
                  className="width-100"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-xs-12 py-20 my-0 display-flex justify-content-center flex-column  animate__fadeOutDownBig">
              <div className="display-flex flex-column pl-lg-72 ">
                <div className="col-lg-9 col-md-11 col-xs-12 ">
                  <h3 className="  h2  py-10">Beyond the tech</h3>
                  <p className="p  py-20  ">
                    At the core of our company is the drive to explore, to
                    venture into unknown territory and create something of
                    value. We’re eager to grow, to forge lifelong partnerships
                    with businesses and people, and we’re willing to give it our
                    very best to get
                  </p>
                </div>
                <div className="py-16 row ">
                  <a
                    href={aboutURL}
                    className=" btn_primary  px-32  border-radius-4 py-12 fontWeight-500 border "
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

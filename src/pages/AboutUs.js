import React, { useEffect } from "react";
import WOW from "wowjs";
// import CountUpComponent from "./countup/CountUpComponent";
import about_us from '../images/about/aboutus.gif';

const AboutUs = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <div>
      <div className="bg_about "></div>
      <div className="bg_about bg2_about"></div>
      <div className="bg_about bg3_about"></div>
      <section id="about" className="wrapper  ">
        <div className="container-xxl mx-auto">
          <header className="section-header row pt-lg-32 py-20 flex-column justify-content-center align-items-center text-align-center text-color-white">
            <div className="col-lg-7 col-md-9 col-xs-12">
              <h3 className="h2  wow animate__fadeInUp  " data-wow-delay="0.2s">

                About Us
              </h3>
              <p
                className="py-28 wow animate__fadeInUp  "
                data-wow-delay="0.4s"
              >
                We are team EzroTech who are passionate Web designers, Web
                developers, Application developers, UI Designers, UX Designers,
                Game developers, Block chain with 5 years of experience. We are
                committed to deliver awesome projects timely, which helps our
                clients to get their business on heights of success.
              </p>
            </div>
          </header>


          {/* <div className=" wow animate__fadeInUp py-32  "data-wow-delay="0.8s"> 
          <CountUpComponent  />
          </div> */}
        </div>
      </section>

      <section className="wrapper  py-20 text-color-white ">
        <div className="container-xxl py-lg-0 py-16 mx-auto">
          <div className="row flex-lg-row ">
            <div className="col-lg-6 col-md-12 col-xs-12 py-20 pl-lg-48 my-0 display-flex justify-content-center flex-column ">
              <div className="display-flex flex-column ">
                <div className="col-lg-9 col-md-11 col-xs-12 ">
                  <div
                    className="   wow animate__fadeInUp  "
                    data-wow-delay="0.2s"
                  >
                    <h1 className="h2  py-16 ">We’re EzroTech!</h1>
                  </div>
                  <div     className="   wow animate__fadeInUp  "
                    data-wow-delay="0.1s">                 
                  <p className="h5">A team which are dedicated to deliver good service, quality equipment and supplies and professional training.</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 col-xs-12 display-flex justify-contant-center wow animate__fadeInUp  "
              data-wow-delay="0.2s"
            >
              <div className="">
                <img
                  alt="section 2" 
                  src={about_us}
                  id="icvbt"
                  className="width-100  "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="text-color-white mb-20">
        <div className="display-flex justify-content-center align-items-center flex-column text-align-center wow animate__fadeInUp ">
        <div className="col-lg-7 col-md-10 col-xs-12">
            <p className="h2 py-20 ">Our Story</p>
            <p className="p py-5">EzroTech was founded in march 2022 we have accomplished so much over the time.</p>
            <p>Our Founder and CEO [Name] was inspired to start this company by [ one or two sources of inspiration].</p>
         </div>
        </div>
      </section> */}

      
      <section className="text-color-white mt-20">
        <div className="row justify-content-center align-items-center flex-column text-align-center wow animate__fadeInUp">
        <div className="col-lg-6 col-md-10 col-xs-12">
            <p className="h2 py-20">Our Mission</p>
            <p className="p ">Our Mission is to provide such product to our coustomer which are easy to use having secure environment and will be efficient and having optimum memory
usage without compromising quality.</p>
            <p className="p py-10">We especially love the emphasis on teamwork and supporting employees so that the people inside the organization can be in the best position to support their customers.</p>
            </div>
        </div>
      </section>


      <section className="wrapper  py-20 text-color-white ">
        <div className="container-xxl py-lg-0 py-16 mx-auto">
          <div className="row flex-column-reverse flex-lg-row ">
            <div className="col-lg-6 col-md-12 col-xs-12 py-20 pl-lg-48 my-0 display-flex justify-content-center flex-column ">
              <div className="display-flex flex-column ">
                <div className="col-lg-9 col-md-11 col-xs-12 ">
                  <div
                    className="   wow animate__fadeInUp  "
                    data-wow-delay="0.2s"
                  >
                    <h3 className="  h3  py-16 ">What we follow to make it fast & awesome</h3>
                  </div>
                  <div className="">                 
                    <ul typeof="cricle" className="pl-20">
                      <li  className="p   wow animate__fadeInUp  "
                      data-wow-delay="0.5s">
                        	Discussion
                      </li>
                      <li  className="p   wow animate__fadeInUp  "
                      data-wow-delay="0.6s">
                         	Planning
                      </li>  <li  className="p   wow animate__fadeInUp  "
                      data-wow-delay="0.7s">
                         	Designing and Developing
                      </li>  <li  className="p   wow animate__fadeInUp  "
                      data-wow-delay="0.8s">
                        	 Re-view & testing
                      </li>  <li  className="p   wow animate__fadeInUp  "
                      data-wow-delay="0.9s">
                         	Deliver
                      </li>
                    </ul>
           

                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 col-xs-12 display-flex justify-contant-center wow animate__fadeInUp  "
              data-wow-delay="0.2s"
            >
              <div className="">
                <img
                  alt="section 2" 
                  src={about_us}
                  id="icvbt"
                  className="width-100  "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="text-color-white mt-20">
        <div className="display-flex justify-content-center align-items-center flex-column text-align-center wow animate__fadeInUp">
        <p className="h2">MEET THE TEAM</p>
        </div>
      </section> */}


    </div>
  );
};

export default AboutUs;
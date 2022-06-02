import React,{useEffect} from "react";
import WOW from "wowjs";
import CountUpComponent from "./countup/CountUpComponent";



const AboutUs = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();

  }, [])
  return (
    <div>
  
      <div className="bg_about "></div>
      <div className="bg_about bg2_about"></div>
      <div className="bg_about bg3_about"></div>
      <section id="about" className="wrapper py-lg-72 py-48">
        <div className="container-xxl mx-auto">
          <header className="section-header row py-lg-48 py-20 flex-column justify-content-center align-items-center text-align-center text-color-white">
            <div className="col-lg-7 col-md-9 col-xs-12">
              <h3 className="h2  wow animate__fadeInUp  "data-wow-delay="0.2s"> About Us</h3>
              <p className="py-28 wow animate__fadeInUp  "data-wow-delay="0.4s">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </header>
          <div className=" wow animate__fadeInUp py-32  "data-wow-delay="0.8s"> 
          <CountUpComponent  />
          </div>
        
        
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

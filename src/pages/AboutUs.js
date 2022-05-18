import React,{useEffect} from "react";
import WOW from "wowjs";
import CountUpComponent from "./countup/CountUpComponent";
import About1 from "../images/about/about-img.svg";
import About2 from "../images/about/about-extra-1.svg";
import About3 from "../images/about/about-extra-2.svg";

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
          <header className="section-header row py-20 flex-column justify-content-center align-items-center text-align-center text-color-white">
            <div className="col-lg-8 col-xs-12">
              <h3 className="h2  wow animate__fadeInUp  "data-wow-delay="0.2s"> About Us</h3>
              <p className="py-20 wow animate__fadeInUp  "data-wow-delay="0.4s">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </header>
          <div className=" wow animate__fadeInUp  "data-wow-delay="0.8s"> 
          <CountUpComponent  />
          </div>
        
          <div class="row justify-content-center about-container py-lg-32 py-20">
            <div class="col-lg-6 col-md-11 col-xs-12 content order-lg-1 order-2">
              <h4 className="h3">
                Voluptatem dignissimos provident quasi corporis voluptates sit
                assumenda.
              </h4>
              <p className="p py-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <div class="icon-box wow fadeInUp py-16">
                <div class="icon">
                  <i class="fa fa-shopping-bag"></i>
                </div>
                <h4 class="title">Eiusmod Tempor</h4>
                <p class="description">
                  Et harum quidem rerum facilis est et expedita distinctio. Nam
                  libero tempore, cum soluta nobis est eligendi
                </p>
              </div>

              <div class="icon-box wow fadeInUp py-16" data-wow-delay="0.2s">
                <div class="icon">
                  <i class="fa fa-photo"></i>
                </div>
                <h4 class="title">Magni Dolores</h4>
                <p class="description">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum
                </p>
              </div>

              <div class="icon-box wow fadeInUp py-16" data-wow-delay="0.4s">
                <div class="icon">
                  <i class="fa fa-bar-chart"></i>
                </div>
                <h4 class="title">Dolor Sitema</h4>
                <p class="description">
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat tarad limino ata
                </p>
              </div>
            </div>

            <div class="col-lg-6 col-md-11 col-xs-12 background order-lg-2 order-1 py-xs-20 px-lg-20 px-0 wow fadeInUp">
              <img src={About3} class="width-100" alt="" />
            </div>
          </div>

          <div class="row justify-content-center about-container py-lg-32 py-20">
            <div class="col-lg-6 col-md-11 col-xs-12 background order-lg-2 order-1 py-xs-20 px-lg-20 px-0 wow fadeInUp">
              <img src={About1} class="width-100" alt="" />
            </div>
            <div class="col-lg-6 col-md-11 col-xs-12 content order-lg-1 order-2">
              <h4 className="h3">
                Voluptatem dignissimos provident quasi corporis voluptates sit
                assumenda.
              </h4>
              <p className="p py-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <div class="icon-box wow fadeInUp py-16">
                <div class="icon">
                  <i class="fa fa-shopping-bag"></i>
                </div>
                <h4 class="title">Eiusmod Tempor</h4>
                <p class="description">
                  Et harum quidem rerum facilis est et expedita distinctio. Nam
                  libero tempore, cum soluta nobis est eligendi
                </p>
              </div>

              <div class="icon-box wow fadeInUp py-16" data-wow-delay="0.2s">
                <div class="icon">
                  <i class="fa fa-photo"></i>
                </div>
                <h4 class="title">Magni Dolores</h4>
                <p class="description">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum
                </p>
              </div>

              <div class="icon-box wow fadeInUp py-16" data-wow-delay="0.4s">
                <div class="icon">
                  <i class="fa fa-bar-chart"></i>
                </div>
                <h4 class="title">Dolor Sitema</h4>
                <p class="description">
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat tarad limino ata
                </p>
              </div>
            </div>
          </div>

          <div class="row justify-content-center about-container py-lg-32 py-20">
            <div class="col-lg-6 col-md-11 col-xs-12 content order-lg-1 order-2">
              <h4 className="h3">
                Voluptatem dignissimos provident quasi corporis voluptates sit
                assumenda.
              </h4>
              <p className="p py-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <div class="icon-box wow fadeInUp py-16">
                <div class="icon">
                  <i class="fa fa-shopping-bag"></i>
                </div>
                <h4 class="title">Eiusmod Tempor</h4>
                <p class="description">
                  Et harum quidem rerum facilis est et expedita distinctio. Nam
                  libero tempore, cum soluta nobis est eligendi
                </p>
              </div>

              <div class="icon-box wow fadeInUp py-16" data-wow-delay="0.2s">
                <div class="icon">
                  <i class="fa fa-photo"></i>
                </div>
                <h4 class="title">Magni Dolores</h4>
                <p class="description">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum
                </p>
              </div>

              <div class="icon-box wow fadeInUp py-16" data-wow-delay="0.4s">
                <div class="icon">
                  <i class="fa fa-bar-chart"></i>
                </div>
                <h4 class="title">Dolor Sitema</h4>
                <p class="description">
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat tarad limino ata
                </p>
              </div>
            </div>
            <div class="col-lg-6 col-md-11 col-xs-12 display-flex align-items-center background order-lg-2 order-1 py-xs-20 px-lg-20 px-0 wow fadeInUp">
              <img src={About2} class="width-100" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

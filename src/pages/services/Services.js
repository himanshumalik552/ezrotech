import React, {useEffect} from "react";
import WOW from "wowjs";
import ServiceData from './ServicesData';
import TechStack from '../techStack/TechStack'

const Services = () => {

  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();

  }, [])

  return (
    <><div className="bg_service"></div>
    <div className="bg_service bg2_service"></div>
    <div className="bg_service bg3_service"></div>
    <section className="wrapper  font_family_development bg_color py-32 ">
     
      <div className="container-xxl py-32 mx-auto">
        <div className="row justify-content-center">
          <div className="title col-lg-7 col-md-10 col-xs-12 text-align-center ">
            <h2 className="service_heading h2 py-8 text-color-white wow animate__fadeInUp "data-wow-delay="0.6s">
              Our service
            </h2>
            <p className="p service_para py-lg-32 py-md-20 py-xs-12 text-color-white  wow animate__fadeInUp "data-wow-delay="0.6s">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, accusantium dolorem id iusto aperiam deleniti sequi obcaecati provident. Molestias illum sequi repellendus consequatur eveniet accusamus atque fugiat, asperiores quasi fugit.
            </p>
          </div>

        </div>
        <div className="flex py-20  ">
          {ServiceData.map((service,index) => {
            return (
              <div key={index} className=" service_cards background-color-white px-lg-28 py-lg-24 px-18 py-16  border-radius-10 wow fadeInLeft"  data-wow-delay={service.delay}>
                <div className=" py-16">
                  <img src={service.icon}
                    alt={service.name} className="icon_size_service" />
                  <h4 className="h4 font-weight-700  text-color-development_color_4 pt-16">
                    {service.name}
                  </h4>
                  <p className="p font-weight-400 text-color-development_color_3 py-10 ">
                    {service.description}
                  </p>
                </div>
              </div>

            )
          })}
        </div>
      </div>
      {/* <ServicesTech/> */}
      <TechStack />
    </section>
    </>
  )
}

export default Services
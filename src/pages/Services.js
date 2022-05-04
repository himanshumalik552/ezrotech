import React from 'react'
import ServiceData from '../data/ServicesData.js'
import TechStack from './techStack/TechStack'

const Services = () => {

  return (
    <section class="wrapper  font_family_development bg_color py-lg-32 ">
      <div class="container-xxl py-32 mx-auto">
        <div className="row justify-content-center">
          <div class="title col-lg-7 col-md-10 col-xs-11 text-align-center ">
            <h2 class="service_heading h2 py-8 ">
              Our service
            </h2>
            <p className="service_para py-lg-32 py-md-20 py-xs-12  ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, accusantium dolorem id iusto aperiam deleniti sequi obcaecati provident. Molestias illum sequi repellendus consequatur eveniet accusamus atque fugiat, asperiores quasi fugit.
            </p>
          </div>

        </div>
        <div class="flex py-20  ">
          {ServiceData.map((service) => {
            return (
              <div class=" service_cards background-color-white px-lg-28 py-lg-24 px-18 py-16  border-radius-10">
                <div class=" py-16">
                  <img src={service.icon}
                    alt={service.name} class="icon_size_service" />
                  <h4 class="h4 font-weight-700  text-color-development_color_4 pt-16">
                    {service.name}
                  </h4>
                  <p class="p font-weight-400 text-color-development_color_3 py-10 ">
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
  )
}

export default Services
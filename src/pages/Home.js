import React from 'react'

const Home = () => {
  let aboutURL = "";
  return (
    <>
      {/* Section 1 */}
      <section id="background-image1" class=" wapper  py-lg-72 py-32  ">
        <div class=" border-radius-10 mx-auto text-color-white">
          <div
            class="row py-32 flex-column justify-content-center align-items-center text-color-white ">
            <div class="col-lg-8 col-md-11 col-xs-12 text-align-center py-4">
              <h2 class=" h1 py-lg-64 py-md-32 py-xs-16  ">
                Your Business in a single workspace
              </h2>

            </div>
            <div class="col-lg-6 col-md-9 col-xs-11  text-align-center pb-lg-32 pb-xs-20">
              <p class="p  font-weight-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque at erat sed erat posuere elementum eget id neque
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque at erat sed erat posuere elementum eget id neque
                </p>
            </div>

            <div class="py-32 text-align-center">
              <a href={aboutURL} class="btn_primary_about py-18 px-48 border">
                About Us
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Sectoin 2 */}
      <section class="wrapper py-lg-32 py-md-20 pt-32 ">
        <div class="container-xxl py-lg-0 py-16 mx-auto">
          <div class="row flex-column-reverse py-lg-32 py-md-20 flex-lg-row ">
            <div
              class="col-lg-6 col-md-12 col-xs-12 py-20 pl-lg-72 my-0 display-flex justify-content-center flex-column">
              <div class="display-flex flex-column ">
                <div class="col-lg-9 col-md-11 col-xs-12 ">
                  <h3 class="  h2 text-color-v2_color_4 py-16">We evolve with the times</h3>
                  <p class="p text-color-v2_color_3 ">We explore emerging technologies to create
                    amazing experiences for users and business
                  </p>
                  <p class="p text-color-v2_color_3 py-20 "> That means we spend time learning new languages
                    and frameworks so that your solution is made using the best possible tools and techniques
                  </p>

                </div>
                <div class="py-16 row">
                  <a href={aboutURL} class=" btn_primary  px-32 border-radius-4  py-12 fontWeight-500     ">Get
                    Started</a>
                </div>
              </div>
            </div>
            <div
              class="col-lg-6 col-md-12 col-xs-12 display-flex ">
              <div class="pl-lg-100">
                <img alt="section 2" src="https://grorapidassets.s3.amazonaws.com/images/webinartemplate/V2/ai.png" id="icvbt"
                  class="width-100  " />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section-3 */}
      <section class="wrapper  py-lg-32 py-md-20 ">
        <div class="container-xxl py-lg-0 py-16 mx-auto">
          <div class="row  grpd ">
            <div class="col-lg-6 col-md-12 col-xs-12 py-32 display-flex  ">
              <div class="pl-lg-40">
                <img alt='innovation' src="https://grorapidassets.s3.amazonaws.com/images/webinartemplate/V2/Innovation.png" id="icvbt"
                  class="width-100 " />
              </div>
            </div>
            <div
              class="col-lg-6 col-md-12 col-xs-12 py-20 my-0 display-flex justify-content-center flex-column">
              <div class="display-flex flex-column pl-lg-72 ">
                <div class="col-lg-9 col-md-11 col-xs-12 ">
                  <h3 class="  h3 text-color-v2_color_4 py-10">Beyond the tech
                  </h3>
                  <p class="p text-color-v2_color_3 py-20 ">At the core of our company is the drive to
                    explore, to venture into unknown territory and create something of value. We’re eager to grow, to forge
                    lifelong partnerships with businesses and people, and we’re willing to give it our very best to get
                  </p>
                </div>
                <div class="py-16 row ">
                  <a href={aboutURL}
                    class=" btn_primary  px-32  border-radius-4 py-12 fontWeight-500 border  ">Get Started</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Home
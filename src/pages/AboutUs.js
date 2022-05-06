import React from 'react'
import CountUpComponent from './countup/CountUpComponent'
import About1 from '../images/about/about-img.svg';
import About2 from '../images/about/about-extra-1.svg';
import About3 from '../images/about/about-extra-2.svg';

const AboutUs = () => {
  return (
    <div>
      <div className="bg_about"></div>
      <div className="bg_about bg2_about"></div>
      <div className="bg_about bg3_about"></div>
      <section id="about" className='wrapper py-lg-72 py-32'>
      <div className="container-xxl mx-auto">
        <header className="section-header row py-20 flex-column justify-content-center align-items-center text-align-center text-color-white">
          <div className='col-lg-8'>
          <h3 className='h2  '> About Us</h3>
          <p className='py-20 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
         
        </header>

        <div class="row about-container">

          <div class="col-lg-6 content order-lg-1 order-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <div class="icon-box wow fadeInUp">
              <div class="icon"><i class="fa fa-shopping-bag"></i></div>
              <h4 class="title">Eiusmod Tempor</h4>
              <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>

            <div class="icon-box wow fadeInUp" data-wow-delay="0.2s">
              <div class="icon"><i class="fa fa-photo"></i></div>
              <h4 class="title">Magni Dolores</h4>
              <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>

            <div class="icon-box wow fadeInUp" data-wow-delay="0.4s">
              <div class="icon"><i class="fa fa-bar-chart"></i></div>
              <h4 class="title">Dolor Sitema</h4>
              <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>

          </div>

          <div class="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
            <img src={About2} class="width-100" alt=""/>
          </div>
        </div>

        <div class="row about-extra">
          <div class="col-lg-6 wow fadeInUp">
            <img src={About1} class="width-100" alt="about1" />
          </div>
          <div class="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
            <h4>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h4>
            <p>
              Ipsum in aspernatur ut possimus sint. Quia omnis est occaecati possimus ea. Quas molestiae perspiciatis occaecati qui rerum. Deleniti quod porro sed quisquam saepe. Numquam mollitia recusandae non ad at et a.
            </p>
            <p>
              Ad vitae recusandae odit possimus. Quaerat cum ipsum corrupti. Odit qui asperiores ea corporis deserunt veritatis quidem expedita perferendis. Qui rerum eligendi ex doloribus quia sit. Porro rerum eum eum.
            </p>
          </div>
        </div>

        <div class="row about-extra">
        

          <div class="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
            <h4>Neque saepe temporibus repellat ea ipsum et. Id vel et quia tempora facere reprehenderit.</h4>
            <p>
             Delectus alias ut incidunt delectus nam placeat in consequatur. Sed cupiditate quia ea quis. Voluptas nemo qui aut distinctio. Cumque fugit earum est quam officiis numquam. Ducimus corporis autem at blanditiis beatae incidunt sunt. 
            </p>
            <p>
              Voluptas saepe natus quidem blanditiis. Non sunt impedit voluptas mollitia beatae. Qui esse molestias. Laudantium libero nisi vitae debitis. Dolorem cupiditate est perferendis iusto.
            </p>
            <p>
              Eum quia in. Magni quas ipsum a. Quis ex voluptatem inventore sint quia modi. Numquam est aut fuga mollitia exercitationem nam accusantium provident quia.
            </p>
          </div>
          <div class="col-lg-6 wow fadeInUp order-1 order-lg-2">
            <img src={About3} class="width-100" alt=""/>
          </div>
          
        </div>

      </div>
     </section>
      <CountUpComponent/>
    </div>
  )
}

export default AboutUs

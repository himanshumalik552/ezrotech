import React from 'react'
import './Services.scss'
const Services = () => {
  return (
  <>
  <div className="container_services">
  <ul className="cards">
    <li className="card_services cards__item">
      <div className="card__frame">
        <div className="card__picture">
          <img src="https://image.flaticon.com/icons/svg/1496/1496034.svg" alt="" width="120"/>
        </div>
        <h2 className="card__title">Design</h2>
      </div>
      <div className="card__overlay"></div>
      <div className="card__content">
        <h2>Design</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ipsum veritatis id quia cupiditate sed architecto aliquam nostrum unde nam minima voluptas dicta, beatae sint reprehenderit sit ducimus officiis ratione?</p>
      </div>
    </li>
    <li className="card_services cards__item">
      <div className="card__frame">
        <div className="card__picture">
          <img src="" alt="" width="120"/>
        </div>
        <h2 className="card__title">Code</h2>
      </div>
      <div className="card__overlay"></div>
      <div className="card__content">
        <h2>Code</h2>
        <p>Dignissimos ipsam culpa vitae vel hic harum omnis doloremque debitis laudantium neque quos iure voluptates quidem ratione esse modi, rerum illum facere eius accusantium dolorem incidunt beatae officiis voluptatem? Nostrum.</p>
      </div>
    </li>
    <li className="card_services cards__item">
      <div className="card__frame">
        <div className="card__picture">
          <img src="https://image.flaticon.com/icons/svg/478/478543.svg" alt="" width="120"/>
        </div>
        <h2 className="card__title">Launch</h2>
      </div>
      <div className="card__overlay"></div>
      <div className="card__content">
        <h2>Launch</h2>
        <p>Asperiores, harum dignissimos at neque quaerat, excepturi, ipsa in consectetur blanditiis tempore error! Libero fuga possimus qui saepe temporibus praesentium, ut ratione facere rem distinctio, beatae omnis officiis illum animi.</p>
      </div>
    </li>
  </ul>
</div>
  </>
  )
}

export default Services
import React from 'react'
import './techstack.css'
import CardTech from './CardTech'
import TechData from './TechData.js';
const TechStack = () => {
return (
<>
    <section className='wrapper py-48'>
        <div className='container-xxl m-auto'>
        <div className="row justify-content-center">
        <div className="col-lg-6 col-md-10 col-xs-12 content">
            <h2 className="tech_head h2 text-align-center text-color-white wow animate__fadeInUp"  data-wow-delay="0.4s">
            Technologies we use 
            </h2>
            <p className="tech_para py-16 text-align-center text-color-white wow animate__fadeInUp "  data-wow-delay="0.5s">
            We've always been at the forefront of technological advancements. We use cutting edge technologies, advanced frameworks and proven methodologies to ensure that our solutions are future-ready and scalable.
            </p>
        </div>
       </div>
        <div className="container_tach">
            
            {TechData.map((tech,index)=>{
            return(
            <CardTech key={index} image={tech.imageUrl} techName={tech.techName} delaytime={tech.delay}  />
            )
            })}
        </div>
        </div>  
    </section>
</>

)
}

export default TechStack
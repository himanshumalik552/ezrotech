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
            <h2 className="tech_head h2 text-align-center text-color-white ">
                Tech Steck
            </h2>
            <p className="tech_para py-16 text-align-center text-color-white ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus nostrum, commodi nemo laborum ipsa
                reiciendis quo explicabo labore blanditiis unde dolor numquam consequuntur itaque ullam, similique vel
                velit? Deleniti, debitis.
            </p>
        </div>
       </div>
        <div className="container_tach">
           
            {TechData.map((tech,index)=>{
            return(
            <CardTech key={index} image={tech.imageUrl} techName={tech.techName} />
            )
            })}
        </div>
        </div>  
    </section>
</>

)
}

export default TechStack
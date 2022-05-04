import React from 'react'
import './techstack.css'
import CardTech from './CardTech'
import TechData from './TechData.js';
const TechStack = () => {
return (
<>
    <section>
        <div class="row justify-content-center">
        <div class="col-lg-6 col-md-10 content">
            <h2 class="tech_head h2 text-align-center ">
                Tech Steck
            </h2>
            <p class="tech_para py-16 text-align-center ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus nostrum, commodi nemo laborum ipsa
                reiciendis quo explicabo labore blanditiis unde dolor numquam consequuntur itaque ullam, similique vel
                velit? Deleniti, debitis.
            </p>
        </div>
    </div>
        <div class="container_tach">
            {TechData.map((tech)=>{
            return(
            <CardTech image={tech.imageUrl} techName={tech.techName} />
            )
            })}
        </div>
    </section>
</>

)
}

export default TechStack
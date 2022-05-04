
import React from 'react'
// import TechData from '../techteam/TeamData';
import '../techteam/TechTeam.css'
const TechTeam = () => {
  // const  facebookLink = "";
  // const  twitterLink = "";
  // const  googleLink = "";
  // const  linkedinLink = "";
  return (
   <>
  <div class=" row py-40 justify-content-evenly">
      <div class="techcard  col-lg-4 py-20 ">
        <div class="imgBx py-20">
            <img src="https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images"/>
        </div>
        <div class="details">
            <h2>SomeOne Famous<br/><span>Director</span></h2>
        </div>
      </div>
    
       <div class="techcard col-lg-4 py-20  ">
         <div class="imgBx">
            <img src="https://images.unsplash.com/photo-1549417229-aa67d3263c09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images"/>
         </div>
         <div class="details">
            <h2>SomeOne Famous<br/><span>Producer</span></h2>
          </div>
       </div>

       <div class="techcard  col-lg-4 py-20  ">
         <div class="imgBx">
            <img src="https://images.unsplash.com/photo-1548094878-84ced0f6896d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images"/>
         </div>
         <div class="details">
            <h2>SomeOne Famous<br/><span>Actor</span></h2>
          </div>
       </div>
 
  </div>
   </>
  )
}

export default TechTeam
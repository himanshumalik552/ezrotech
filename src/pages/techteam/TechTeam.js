
import React from 'react'
import TechData from '../techteam/TeamData';
import '../techteam/TechTeam.css'
const TechTeam = () => {
  // const  facebookLink = "";
  // const  twitterLink = "";
  // const  googleLink = "";
  // const  linkedinLink = "";
  return (
   <>
   <div class="container">
    <div class="row justify-content-center">
      {TechData.map((item)=>{
        return(
<div class=" col-xs-12 col-md-4  col-lg-3 py-32 px-32">
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" alt='team' src="https://picsum.photos/130/130?image=1027"/>
        </div>
        <div class="team-content">
          <h3 class="name">{item.name}</h3>
          <h4 class="title">Web Developer</h4>
        </div>
        {/* <ul class="social">
          <li><a href={facebookLink} class="fa fa-facebook" aria-hidden="true"></a></li>
          <li><a href={twitterLink} class="fa fa-twitter" aria-hidden="true"></a></li>
          <li><a href={googleLink} class="fa fa-google-plus" aria-hidden="true"></a></li>
          <li><a href={linkedinLink} class="fa fa-linkedin" aria-hidden="true"></a></li>
        </ul> */}
      </div>
    </div>
        )
      }) }
  </div>
</div>
   </>
  )
}

export default TechTeam
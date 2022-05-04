import React from 'react'

const CardTach = (props) => {
  let aboutURL = "";
  return (
    <>
  
      <div class="card">
				<div class="content">
					<div class="imgBx">
						<img  src={props.image} alt={props.techName} />
					</div>
				</div>
				<ul class="sci">
					<li>
						<a href={aboutURL}>{props.techName}</a>
					</li>
				</ul>
			</div>
    </>
  )
}

export default CardTach
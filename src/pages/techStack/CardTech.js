import React from "react";

const CardTach = (props) => {
  let aboutURL = "";
  return (
    <>
      <div className="card wow fadeInLef"  data-wow-delay={props.delaytime}>
        <div className="content">
          <div className="imgBx">
            <img src={props.image} alt={props.techName} />
          </div>
        </div>
        <ul className="sci">
          <li>
            <a href={aboutURL}>{props.techName}</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CardTach;

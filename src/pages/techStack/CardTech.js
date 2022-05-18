import React from "react";

const CardTach = (props) => {
  let aboutURL = "";
  return (
    <>
      <div className="card ">
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

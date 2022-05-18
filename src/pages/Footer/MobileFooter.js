import React from 'react'
import { Link } from 'react-router-dom';

export const MobileFooter = () => {

  const googleplus  ="https://myaccount.google.com/profile?pli=1";
  const facebook  ="https://www.facebook.com";
  const instagram  ="https://www.instagram.com";
  let whatsapp  ="";
  let twitter  ="";
  const Style = {
    backgroundColor:"ThreeDFace",
    textAlign: "center",
    padding: "10px",
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    boxShadow: "rgba(0, 0, 0, 0.50) 5px 20px 20px",
  };
  return (
    <div className='mobile_footer' style={Style} >
      
  <ul  className=' row justify-content-center  '>
    <li className="facebook"><Link href={facebook}><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></Link></li>
    <li className="twitter"><Link href={twitter}><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></Link></li>
    <li className="instagram"><Link href={instagram}><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></Link></li>
    <li className="google"><Link href={googleplus}><i className="fa fa-google fa-2x" aria-hidden="true"></i></Link></li>
    <li className="whatsapp"><Link href={whatsapp}><i className="fa fa-whatsapp fa-2x" aria-hidden="true"></i></Link></li>
  </ul>

</div>
  )
}

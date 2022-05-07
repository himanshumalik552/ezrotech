import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
const FooterCommon = () => {

  const googleplus  ="https://myaccount.google.com/profile?pli=1";
  const facebook  ="https://www.facebook.com";
  const instagram  ="https://www.instagram.com";
  let whatsapp  ="";
  let twitter  ="";

  return (
    <div>
      <section
  className="wrapper   px-lg-48 px-xs-0 py-20">
  <div className="container-xxl py-32  mx-auto  footer ">

      <div className="row justify-content-center align-items-center ">
        <div className="col-lg-4 col-md-12 col-xs-12 py-12 text-align-center">
          <p className="body1 px-8 text-color-white">© Copyright 2022 - EzroTech. All rights reserved
          </p>
        </div>
        <div
          className="col-lg-4 col-md-12 col-xs-12 py-20 display-flex justify-content-center">
          <Link to="/" className="py-4 px-4 ">
            <img alt='logo' src="https://grorapidassets.s3.amazonaws.com/images/webinartemplate/job/logo.png"
              className="width-15" /></Link>
        </div>
        <div
          className="col-lg-4 text-align-center col-xs-12 py-12 col-md-12 mr-lg-0 py-xs-16">
            
<div className="wrapper_footer">
  <ul  className=' row justify-content-center  '>
    <li className="facebook"><Link href={facebook}><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></Link></li>
    <li className="twitter"><Link href={twitter}><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></Link></li>
    <li className="instagram"><Link href={instagram}><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></Link></li>
    <li className="google"><Link href={googleplus}><i className="fa fa-google fa-2x" aria-hidden="true"></i></Link></li>
    <li className="whatsapp"><Link href={whatsapp}><i className="fa fa-whatsapp fa-2x" aria-hidden="true"></i></Link></li>
  </ul>
</div>
   
        </div>
      </div>

  </div>
</section>
    </div>
  )
}

export default FooterCommon
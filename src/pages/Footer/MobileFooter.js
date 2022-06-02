import React from 'react'

export const MobileFooter = () => {

  const googleplus  ="https://myaccount.google.com/profile?pli=1";
  const facebook  ="https://www.facebook.com";
  const instagram  ="https://www.instagram.com";
  let whatsapp  ="";
  let twitter  ="";
  const Style = {
    backgroundColor:"#5f5f82",
    textAlign: "center",
    padding: "10px",
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
  };

  const data = [{
    className:"facebook",
    link:facebook,
    icon:"fa fa-facebook fa-2x",
  },
  {
    className:"twitter",
    link:twitter,
    icon:"fa fa-twitter fa-2x",
  },{
    className:"instagram",
    link:instagram,
    icon:"fa fa-instagram fa-2x",
  },{
    className:"google",
    link:googleplus,
    icon:"fa fa-google fa-2x",
  },{
    className:"whatsapp",
    link:whatsapp,
    icon:"fa fa-whatsapp fa-2x",
  },
]
  return (
  <div className='mobile_footer' style={Style} > 
  
  <ul  className=' row justify-content-center  '>
    {data.map((item, index)=>     
      <li key={index} className={item.className}><a  rel="noreferrer"  target="_blank" href={item.link}><span><i className={item.icon}  aria-hidden="true"></i></span></a></li>      
    )
    }
  </ul>

</div>
  )
}

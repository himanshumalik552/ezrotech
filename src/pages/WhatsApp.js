import React from 'react'
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
const WhatsApp = () => {
  return (
    <WhatsAppWidget
    phoneNo="9761955118"
    position="left"
    widgetWidth="230px" 
    widgetWidthMobile="100px"
    autoOpen={false}
    autoOpenTimer={1000}
    messageBox={true}
    messageBoxTxt="Hi Team, is there any related service available ?"
    iconSize="60"
    iconColor="white"
    iconBgColor="tomato"
    headerIcon=""
    headerIconColor="pink"
    headerTxtColor="black"
    headerBgColor="tomato"
    headerTitle="Dheeraj Sharma"
    headerCaption="Online"
    bodyBgColor="#bbb"
    chatPersonName="Dheeraj Sharma"
    chatMessage={<>Hi there 👋 <br /><br /> How can I help you?</>}
    footerBgColor="#999"
    btnBgColor=""
    btnTxtColor=""
/>
  )
}

export default WhatsApp
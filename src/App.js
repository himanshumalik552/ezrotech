import React, { useEffect } from "react";
import WOW from "wowjs";
import 'animate.css';

import { BrowserRouter as Router } from "react-router-dom";
import './css/Framework.css';
import './css/App.css';
import { MobileFooter } from "./pages/Footer/MobileFooter";
import Navbar from "./pages/navbar/Navbar";
import FooterCommon from "./pages/Footer/FooterCommon";
import WhatsApp from "./pages/WhatsApp";
import SectionHome from "./SectionHome";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
// import TechTeam from "./pages/techteam/TechTeam";
import Services from './pages/services/Services';
import { Switch, Route } from "react-router-dom";
import ContactUs from "./pages/contactus/ContactUs";
import TechStack from "./pages/techStack/TechStack";



function App() {

  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
    window.onload = function () { setTimeout(function () { window.scrollTo(0, 1); }, 0); }
  }, [])
  return (

    <Router>
      <Navbar />
    {/* <SectionHome/> */}
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contactus" component={ContactUs} />
        <Route path='/TechStack' component={TechStack}/>
        <Route path="/services" component={Services} />
        <Route path="/footer" component={FooterCommon} />
      </Switch> 
      <MobileFooter/>
      <FooterCommon />  
      <WhatsApp />
    </Router>

  );
}
export default App;

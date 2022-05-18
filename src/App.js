import React, { useEffect } from "react";
import WOW from "wowjs";
import 'animate.css';

import { BrowserRouter as Router } from "react-router-dom";
import './css/Framework.css';
import './css/App.css';

import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import TechTeam from "./pages/techteam/TechTeam";
import Services from './pages/services/Services';
import FooterCommon from "./pages/Footer/FooterCommon";
import WhatsApp from "./pages/WhatsApp";
import { Switch, Route } from "react-router-dom";
import { MobileFooter } from "./pages/Footer/MobileFooter";


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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/techteam" component={TechTeam} />
        <Route path="/services" component={Services} />
        <Route path="/footer" component={FooterCommon} />
      </Switch>

      <FooterCommon />
      <MobileFooter/>
      <WhatsApp />
    </Router>

  );
}
export default App;

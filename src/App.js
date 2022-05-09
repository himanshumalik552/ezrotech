import React,{useEffect} from "react";
import 'animate.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './css/Framework.css';
import './css/App.css';
import WOW from "wowjs";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import TechTeam from "./pages/techteam/TechTeam";
import Services from './pages/services/Services';
import FooterCommon from "./pages/Footer/FooterCommon";
import WhatsApp from "./pages/WhatsApp";



function App() {

  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();

   window.addEventListener("load",function() {
      setTimeout(function(){
          // This hides the address bar:
          window.scrollTo(0, 1);
      }, 0);
  });

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
        <FooterCommon/>
      <WhatsApp/>
    </Router>
    
  );
}
export default App;

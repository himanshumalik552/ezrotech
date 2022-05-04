import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './css/Framework.css';
import './css/App.css';
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/about";
import TechTeam from "./pages/techteam/TechTeam";
import Contact from "./pages/contact";
import Services from './pages/Services'
import Faq from "./pages/faq";
import WhatsApp from "./pages/WhatsApp";
import Footer from "./pages/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
      TechTeam
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/techteam" component={TechTeam} />
        <Route path="/" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route path="/faq" component={Faq} />
      </Switch>
      <Footer/>
      <WhatsApp/>
    </Router>
  );
}
export default App;

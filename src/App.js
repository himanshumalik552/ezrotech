import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './Framework.css';
import './App.css';
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Faq from "./pages/faq";
import WhatsApp from "./pages/WhatsApp";
import Footer from "./pages/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/faq" component={Faq} />
      </Switch>
      <Footer/>
      <WhatsApp/>
    </Router>
  );
}
export default App;

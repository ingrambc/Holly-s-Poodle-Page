import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import MyDogs from "./pages/MyDogs";
import AvailablePuppies from "./pages/AvailablePuppies";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
        <Header />
        <Wrapper>
          <Route exact path="/RigbyJasperPoodles/MyDogs" component={ MyDogs } />
          <Route exact path="/RigbyJasperPoodles/AvailablePuppies" component={ AvailablePuppies } />
          <Route exact path="/RigbyJasperPoodles/contact" component={ Contact } />
          <Route exact path="/RigbyJasperPoodles/about" component={ About } />
          <Route exact path="/RigbyJasperPoodles" component={ About } />
        </Wrapper> 
        <Footer />

    </Router>
  );
}

export default App;
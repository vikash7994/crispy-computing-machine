import React from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Upgrade from './components/Upgrade';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
 const App = () => {
  return(
<><Navbar/>

<Switch>
<Route exact path="/" component={Home} />
<Route exact path="/Services" component={Services} />
<Route exact path="/About" component={About} />
<Route exact path="/Work" component={Work} />
<Route exact path="/Upgrade" component={Upgrade} />
<Route exact path="/Contact" component={Contact} />
</Switch>
<Footer/>
</>
    
  );
  
};

export default App;
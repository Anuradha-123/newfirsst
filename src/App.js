import React from 'react';
import Home from './Home';
import Aboutus from './Aboutus';
import Services from './Services';
import { Routes,Route } from "react-router-dom";


const App =() => {
  return(
    <>
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/aboutus" component={Aboutus} />
      <Route path="/services" component={Services} />
    </Routes>
    </>
    );
}

export default App;
import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import Navbar from './navbar'
import Services from './nosservices'
import Fotter from './fotter'
import Routes from './routes';
import './App.css';

class App extends Component {
  
  render() {
    return (
    
        



         <Router>

<div className="App">
  <React.Fragment>
  <Navbar/>
  <Routes />
     <Fotter/>   
  </React.Fragment>
  

  
</div>
</Router>
     
    );
  }
}

export default App;

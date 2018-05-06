import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import Accueil from './accueil'
import Services from './nosservices'

import Contact from './contactus'


class Routes extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path='/' render={()=><Redirect to='/accueil' />} />
        <Route path="/accueil" component={Accueil} />   
        <Route path="/nosservices"  component={Services} />
        
        <Route path="/contactus" component={Contact} />


      </React.Fragment>
    );
  }
}

export default Routes;

import React, {Component} from 'react'
import { Link } from "react-router-dom";
import Accueil from './accueil'
import Services from './nosservices'
import './navbar.css'

class Navbar extends Component{
    render(){
        return (
            <div>

                <div class="container">
      <header class="blog-header py-3">
        <div class="row flex-nowrap justify-content-between align-items-center">
        <div class="col-4 text-center">
            <a class="blog-header-logo text-dark" href="#">The Planner</a>
          </div>
         
          <div class="col-4 d-flex justify-content-end align-items-center">
            <a class="text-muted" href="#">
              <img src="http://simpleicon.com/wp-content/uploads/facebook-3.svg"style={{width:"20px",height:"20px"}}/>
              <img src=" https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Instagram_simple_icon.svg/1024px-Instagram_simple_icon.svg.png"style={{width:"20px",height:"20px"}}/>
              <img src=" https://png.icons8.com/ios/1600/youtube-play-filled.png"style={{width:"30px",height:"30px"}}/>
            </a>
          
          </div>
        </div>
      </header>

      <div class="nav-scroller py-1 mb-2">
        <nav class="nav d-flex justify-content-between">
        <Link to="/accueil"> <a class="p-2 text-muted" href="#">Accueil</a></Link>
        <Link to="/nosservices"> <a class="p-2 text-muted" href="#">Nos services </a></Link>
          <a class="p-2 text-muted" href="#">Partenaires</a>
          <a class="p-2 text-muted" href="#">Portfolio</a>
          <a class="p-2 text-muted" href="#">Galerie</a>
          <Link to="/contactus">  <a class="p-2 text-muted" href="#">Contact Us</a></Link>
         
        </nav>
      </div>
      </div>
                </div>
        )
    }



}


export default Navbar;
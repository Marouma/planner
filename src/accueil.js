import React, { Component } from 'react';
import './accueil.css'

class Accueil extends Component {
  
  render() {
   
    return (
      <div>
          <main role="main">
<div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="first-slide" src="http://weddingdream.net/images/homepagetiles/purple_blue_wedding_flowers_centrepiece_headtable.jpg" alt="First slide"/>
            <div class="container">
              
            </div>
          </div>
          <div class="carousel-item">
            <img class="second-slide" src="http://weddingdream.net/images/carousel/wedding-dream-slide4.jpg" alt="Second slide"/>
            <div class="container">
              
            </div>
          </div>
          <div class="carousel-item">
            <img class="third-slide" src="http://weddingdream.net/images/carousel/wedding-dream-slide2.jpg" alt="Third slide"/>
            <div class="container">  
            </div>
            <div class="carousel-item">
            <img class="third-slide" src="http://weddingdream.net/images/carousel/wedding-dream-slide3.jpg" alt="Third slide"/>
            <div class="container">
             </div>
        </div>
        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      </div>
      </div>
</main>

     <h2>A PROPOS DE NOUS</h2>
     <p>Nous sommes une agence événementiel spécialisé dans l'organisation de tous types de cérémones</p>
      </div>
    );
  }
}

export default Accueil;
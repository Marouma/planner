import React, { Component } from 'react';
import './contactus.css'

class Contactus extends Component {
  
  render() {
    return (
        <div> 
            <h2>Contact Us</h2>
<div className="Contactus">

<div> 

<form>
<div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputNom">Nom</label>
      <input type="text" class="form-control" id="inputNom" placeholder="Nom"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputprenom">Prénom</label>
      <input type="text" class="form-control" id="inputprenom" placeholder="Prénom"/>
    </div>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Addresse Email</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Votre Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button type="button" class="btn btn-light">Envoyer</button>
</form>
</div> 
  <div className="infos">
  
          
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Home_Icon.svg/1024px-Home_Icon.svg.png"style={{width:"20px",height:"20px"}}/> Adresse 
            <img src="http://cdn.onlinewebfonts.com/svg/img_157010.png"style={{width:"20px",height:"20px"}}/> Téléphone 
    
</div>
 
</div>
</div>
    
    );
  }
}

export default Contactus;
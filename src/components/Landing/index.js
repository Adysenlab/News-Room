import React from 'react';
import { auth } from '../../firebase';
import SignInForm from '../SignIn'
import * as routes from '../../constants/routes';
const style = {
  'max-width':'1400px',
  'margin-top':'80px'
}


 export default class LandingPage extends React.Component{


  handleGoogleSignin = (event) => {
    auth.doGoogleSignIn().then( ()=>{
      this.props.history.push(routes.HOME);
  
    }).catch( (reason)=> {
      console.log("error login ::"+ reason);
    })
     
   }
  
   render(){
     return(
      <div >
 <div class="w3-container w3-padding-32 w3-theme-d1 w3-pale-yellow w3-center" >
      <h1 class="w3-margin w3-jumbo">Adysen-lab</h1>
      <p class="w3-xlarge">Innovation within</p>
      <button className="w3-button w3-black w3-padding-large w3-large w3-margin-top" 
      onClick={this.handleGoogleSignin}>Login With Google</button>
    </div>
    
    <div class="w3-row-padding w3-theme">
    
    <div class="w3-third w3-section">
    <div class="w3-card-4">
    <img src="images/img_5terre.jpg" />
    <div class="w3-container w3-white">
    <h4>Cinque Terre</h4>
    <p>The Cinque Terre (five lands) is a portion of the Italian Riviera. The coastline with five villages: Monterosso, Vernazza, Corniglia, Manarola, and Riomaggiore
    is a UNESCO World Heritage Site.</p>
    </div>
    </div>
    </div>
    
    <div class="w3-third w3-section">
    <div class="w3-card-4">
    <img src="images/img_monterosso.jpg"  />
    <div class="w3-container w3-white">
    <h4>Monterosso</h4>
    <p>Monterosso al Mare is located at the center of a small natural gulf, protected by a small artificial reef,
    in the Riviera of La Spezia. It is the northernmost village of the Cinque Terre.</p>
    </div>
    </div>
    </div>
    
    <div class="w3-third w3-section">
    <div class="w3-card-4">
    <img src="images/img_vernazza.jpg" />
    <div class="w3-container w3-white">
    <h4>Vernazza</h4>
    <p>Vernazza is another of the five towns in the region. Vernazza is the fourth town heading north. It has no car traffic, and is one of the truest
    "fishing villages" on the Italian Riviera.</p>
    </div>
    </div>
    <br /><br/><br/>
    </div>
    </div>
    
    <div class="w3-container w3-theme-d4">
    <p class="w3-large">Europe Italy</p>
    </div>
  </div>

     )
   }
 }


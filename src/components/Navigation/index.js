import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//import SignOut from '../SignOut';
import * as routes from '../../constants/routes';
import { auth } from '../../firebase'



  

const styles = {
  title: {
    cursor: 'pointer',
  },
  Notifications: {
    width: '300px',
  },
  SignOut: {
    height: '23px',
    width: '23px',
  },
};
const Navigation = ({ authUser }) =>
  <div>
    { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </div>

const NavigationAuth = () =>
<div>
<div className="w3-top">
 <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
  <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2" 
  href="javascript:void(0);" ><i className="fa fa-bars"></i></a>
  <a href="#" className="w3-bar-item w3-button w3-padding-large w3-theme-d4">
  <i className="fa fa-home w3-margin-right"></i>Logo</a>
  <a href="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" 
  title="News"><i className="fa fa-globe"></i></a>
  <a href={ <Link to={routes.ACCOUNT} />} className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" 
  title="Account Settings"><i className="fa fa-user"></i></a>
  <a href="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" 
  title="Messages"><i className="fa fa-envelope"></i></a>
  <div className="w3-dropdown-hover w3-hide-small">


    <button className="w3-button w3-padding-large" 
    title="Notifications"><i className="fa fa-bell"></i><span className="w3-badge w3-right w3-small w3-green">3</span></button>     
    <div className="w3-dropdown-content w3-card-4 w3-bar-block" style={styles.Notifications}>
      <a href="#" className="w3-bar-item w3-button">One new friend request</a>
      <a href="#" className="w3-bar-item w3-button">John Doe posted on your wall</a>
      <a href="#" className="w3-bar-item w3-button">Jane likes your post</a>
    </div>

  </div>
  <a onClick={() => {
  auth.doSignOut().then(()=>{
      window.history.replaceState(routes.LANDING);
  }).catch(error => {
      console.log("signout error");
  })}
 } className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" 
  title="My Account">
    <img src="/w3images/avatar2.png" className="w3-circle" style={styles.SignOut} alt="Sign Out"/>
  </a>
 </div>
</div>

</div>




const NavigationNonAuth = () =>
<div>
<div className="w3-top">
 <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
  <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2" 
  href="javascript:void(0);" ><i className="fa fa-bars"></i></a>
  <a href="#" className="w3-bar-item w3-button w3-padding-large w3-theme-d4">
  <i className="fa fa-home w3-margin-right"></i>Logo</a>
  <a href="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" 
  title="News"><i className="fa fa-globe"></i></a>

 
  <a href={routes.SIGN_IN} className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" 
  title="My Account">
    <img src="/w3images/avatar2.png" className="w3-circle" style={styles.SignOut} alt="Sign In"/>
  </a>
 </div>
</div>

</div>

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(Navigation);



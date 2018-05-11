import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from '../SignUp';

import { PasswordForgetLink } from '../PasswordForget';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';


const SignInPage = ({ history }) =>
  <div>
    <SignInForm history={history} />
    <PasswordForgetLink />
    <SignUpLink />
  
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
  finished: false,
  stepIndex: 0,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }


  
  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
        console.log("sign in error")
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
      finished,
      stepIndex,
    } = this.state;

    

    const isInvalid =
      password === '' ||
      email === '';

    return (
      
        <form onSubmit={this.onSubmit} >
        <div className="w3-container w3-card w3-white w3-round w3-margin">
    
        <h4> Sign in</h4><br/>
        <hr className="w3-clear"/>
    <h4> { error && <p>{error.message}</p> } </h4>
    <label>eneter the unique ID </label>
            <input
              value={email}
                onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
                 hintText="Email Address"
            />
            <br/>  
            <label>eneter the password that you had set </label>
            
            <input
        value={password}
        onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
          hintText="password"
          type="password"
        />
        <br/>
        <button className="w3-button w3-theme-d1 w3-margin-bottom"
          
          
          type ="submit"
          onSubmit ={ this.onSubmit }
        >See you </button>
           
        </div>
        <div className="w3-container w3-card w3-white w3-round w3-margin">
        <h4>Alternate Sign in</h4><br/>
        <hr className="w3-clear"/>
        <button type="button"
        onClick={auth.doGoogleSignIn} 
        primary={true}
        className="w3-button w3-theme-d2 w3-margin-bottom"> 
        Login with google</button>

          
        </div>

        </form>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};

import React, { Component } from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';

import { auth, db } from '../../firebase';
import * as routes from '../../constants/routes';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const SignUpPage = ({ history }) =>
  <div>
    <SignUpForm history={history} />
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {

        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(updateByPropertyName('error', error));
          });

      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      username === '' ||
      email === '';

    return (
        

        <Card>
    <CardHeader
      title="Signup"
      subtitle="utilize next generation"
      
    />
    
    <CardText>
    <TextField
        value={username}
        onChange={event => this.setState(updateByPropertyName('username', event.target.value))}
          hintText="Full Name"
        />
        
        <br/>
        <TextField
        value={email}
        onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
          hintText="Email Address"
        />
        
        <br/>
        <TextField
        value={passwordOne}
        onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
        type="password"
          hintText="Password"
        />
        <br/>
       
        <TextField
        value={passwordTwo}
        onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
        type="password"
          hintText="Confirm Password"
        />
        
        
    </CardText>
    <CardActions>
    <RaisedButton label="Sign Up" primary={true}  type="submit" disabled={isInvalid} />

    { error && <p>{error.message}</p> }
    </CardActions>
  </Card>


        
    );
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};
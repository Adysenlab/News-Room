import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';

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


  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  renderStepActions(step) {
    const {stepIndex,email, password} = this.state;

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={stepIndex === 2 ? 'Finish' : 'Next'}
          type ={stepIndex == 2 ? 'submit': 'button'}
          disabled = {stepIndex === 2 ? (password === '' ||
          email === '') : false}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handlePrev}
          />
        )}
      </div>
    );
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
      
        
        <Card onSubmit={this.onSubmit}>
    <CardHeader
      title="Sign in"
      subtitle="Where the game begins"
    />
    
    <CardTitle title={ error && <p>{error.message}</p> } />
    <CardText>
      
    
        <Stepper activeStep={stepIndex} orientation="vertical">
          <Step>
            <StepLabel>Login to the website using email</StepLabel>
            <StepContent>
            <TextField
              value={email}
                onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
                 hintText="Email Address"
            />
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>eneter the password that you had set </StepLabel>
            <StepContent>
            <TextField
        value={password}
        onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
          hintText="password"
          type="password"
        />
        
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Sign in if credentials are correct</StepLabel>
            <StepContent>
            

              
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
        </Stepper>
            
        
      

    </CardText>
    
  </Card>
     
        
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};

import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import { auth } from '../../firebase';

const SignOutButton = () =>
<RaisedButton label="SIGN OUT" secondary={true} onClick={auth.doSignOut} fullWidth={true}  />


export default SignOutButton;

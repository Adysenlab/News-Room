import React from 'react';

import BottomNavigationExampleSimple from '../newNavigation'
import TextField from 'material-ui/TextField';


const LandingPage = () =>
  <div >
    
    <TextField
      hintText="Hint Text"
      floatingLabelText="Floating Label Text"
      fullWidth={true}
    /><br />
      <BottomNavigationExampleSimple/>
    
  </div>

export default LandingPage;

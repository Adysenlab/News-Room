import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';

function handleClick() {
  alert('onClick triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
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
<Drawer open={true} className= {"w3-sidebar w3-bar-block w3-card "} >
          
          <MenuItem  containerElement={<Link to={routes.HOME} />} >HOME</MenuItem>
          <MenuItem  containerElement={<Link to={routes.ACCOUNT} />} >ACCOUNT</MenuItem>
          <Divider/>
          <MenuItem linkButton={true} containerElement={<SignOutButton/>} >Signout</MenuItem>
        </Drawer>



const NavigationNonAuth = () =>
 <Toolbar>
<ToolbarGroup firstChild={true}>
</ToolbarGroup>
<ToolbarGroup>
  <ToolbarTitle text="Options" />
  <FontIcon className="muidocs-icon-custom-sort" />
  <ToolbarSeparator />
  <RaisedButton  primary={true} ><Link to={routes.SIGN_IN}>Sign In</Link></RaisedButton>
  <IconMenu
    iconButtonElement={
      <IconButton touch={true}>
        <NavigationExpandMoreIcon />
      </IconButton>
    }
  >
    <MenuItem primaryText="Sign Up" containerElement={<Link to={routes.SIGN_UP} />}/>
    <MenuItem primaryText="More Info" />
  </IconMenu>
</ToolbarGroup>
</Toolbar>

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(Navigation);



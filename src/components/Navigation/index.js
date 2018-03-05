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
  <ul>
    <li><Link to={routes.LANDING}>Landing</Link></li>
    <li><Link to={routes.HOME}>Home</Link></li>
    <li><Link to={routes.ACCOUNT}>Account</Link></li>
    <li><SignOutButton /></li>
  </ul>

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
    <MenuItem primaryText="Download" />
    <MenuItem primaryText="More Info" />
  </IconMenu>
</ToolbarGroup>
</Toolbar>

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(Navigation);



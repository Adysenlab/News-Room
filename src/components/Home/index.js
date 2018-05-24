import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';

import Postings from './templates/Card'

import { getFirestoreData } from '../../actions/defActions'
class HomePage extends Component {
  componentDidMount() {
    //const { getPosts } = this.props;
    this.props.getPosts();
    // db.onceGetPosts().then(snapshot =>
    //   onSetPosts(snapshot.data())
    // );
  }

  render() {
    const { posts } = this.props;
    
    return (
      <div className="w3-row" >
      
        <div className="w3-col m3"><h1>left panel</h1></div>
        <div className="w3-col m7">
        <h1>Home</h1>
        <p>The Home Page is accessible by every signed in user.</p>

        { !!posts && <UserList users={() => this.props.getPosts()} /> }
      </div>
      <div className="w3-col m2"> <h1>right panel</h1> </div>
      </div>
      
    );
  }
}
class UserList extends React.Component{
  render(){
    return(
      <Postings postings={this.props.users}/>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.postState.posts,
});

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(getFirestoreData()),
});

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, mapDispatchToProps)
)(HomePage);

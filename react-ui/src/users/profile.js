import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Profile extends Component {
  render() {
    console.log('access via withRouter?', this.props.location.state.user);
    return(
      <div>
        I am profile.
      </div>
    );
  }
}

export default withRouter(Profile);

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Profile extends Component {
  render() {
    //this.props.location.state.user.username or favorites
    return(
      <div>
        Welcome {this.props.location.state.user.username} !
      </div>
    );
  }
}

export default withRouter(Profile);

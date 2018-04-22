import React, { Component } from 'react';

import Landing from './home/Landing';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    return(
      <Landing />
    );
  }
}

          //WILL BE PART OF USER PROFILE
          //ONCE USER LOGs IN
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       message: null,
//       fetching: true
//     };
//   }
//
//   componentDidMount() {
//     fetch('/api')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`status ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(json => {
//         this.setState({
//           message: JSON.stringify(json),
//           fetching: false
//         });
//       }).catch(e => {
//         this.setState({
//           message: `API call failed: ${e}`,
//           fetching: false
//         });
//       })
//   }
//
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//         </div>
//         <p className="App-intro">
//             {'create-react-app with a custom Node/Express server'}
//         </p>
//         <p className="App-intro">
//           {this.state.fetching
//             ? 'Fetching message from API'
//             : this.state.message}
//         </p>
//       </div>
//     );
//   }
// }

export default App;

import React, { Component } from "react";
import Login from './components/Login'
class App extends Component {
  componentDidMount() {
    console.log("init app");
  }
  render() {  
    return (
      <Login available_users={['ahmed','mohamed']}/>
    );
  }
}

export default App;

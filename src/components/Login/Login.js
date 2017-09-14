import React, { Component } from 'react';
import axios from 'axios';
import './Login.css';


class Login extends Component {
  constructor(props){
      super(props);
      this.state = {
        login: false
      };
      this.signInCallback = this.signInCallback.bind(this);
      this.login = this.login.bind(this);
    }

  signInCallback(authResult){
    if (authResult.code) {
      axios.post('/auth/google/callback', { code: authResult.code})
      .done(function(data) {
        console.log(data);
      }); 
    } else if (authResult.error) {
      console.log('There was an error: ' + authResult.error);
    }
  };

  login(){
    axios.post('/auth/google/callback')
      .then((res) => { console.log(res) })
  }
  componentDidMount(){
  }

  render() {
    let color = this.state.background;
    return (
      <div className="login">
        <div id="login_container">
          <div id="g_login_bttn">
            <div id="g_icon"></div>
            <a href="http://localhost:8087/auth/google" rel='external'>LOGIN WITH GOOGLE</a>
          </div>
        </div>
      </div>
    );
  }
}


export default Login;
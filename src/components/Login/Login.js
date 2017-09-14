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
      this.handleLogin = this.handleLogin.bind(this);
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
    if(this.state.login){
      document.getElementById('graphs').style.display = 'block'
    } else {
      document.getElementById('graphs').style.display = 'none'
    }
  }
  handleLogin(){
    console.log('fired')
    if(!this.state.login){
      this.setState({
        login: true
      })
    }
  }

  render() {
    let color = this.state.background;
    return (
      <div className="login">
        <div id="login_overlay"></div>
        <div id="login_container">
          <h1>HELLO!</h1>
          <div id="about_me">
            {/* <div id="me_pic"></div> */}
            <p>Welcome to my app! Here, you can navigate to a Google login page to checkout some charts I made using the YouTube and Pinterest APIs. Enjoy!</p>
          </div>
          <div id="login_bttn">
            <div id="fb_icon"></div>
            <a href="http://localhost:8087/auth/google" rel='external' onClick={this.handleLogin}>LOGIN WITH GOOGLE</a>
          </div>
        </div>
        <div id="graphs">I AM A GRAPH</div>
      </div>
    );
  }
}


export default Login;
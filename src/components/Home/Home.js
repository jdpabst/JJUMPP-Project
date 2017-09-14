import React, { Component } from 'react';
import axios from 'axios';
import './Home.css';


class Home extends Component {
  constructor(props){
      super(props);
      this.state = {
        background: 'lime'
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
      <div className="home">
        <div id="home_overlay"></div>
        <div id="home_container">
          <h1>HELLO!</h1>
          <div id="about_me">
            {/* <div id="me_pic"></div> */}
            <p>Welcome to my app! Here, you can login with Google and navigate through some charts I made using the YouTube and Pinterest APIs. Enjoy!</p>
          </div>
          <div id="login_bttn">
            <div id="fb_icon"></div>
            <a href="http://localhost:8087/auth/google" rel='external' >LOGIN WITH GOOGLE</a>
          </div>
        </div>
      </div>
    );
  }
}


export default Home;
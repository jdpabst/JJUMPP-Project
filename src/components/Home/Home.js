import React, { Component } from 'react';
import axios from 'axios';
import './Home.css';


class Home extends Component {
  constructor(props){
      super(props);
      this.state = {

      };
      this.signInCallback = this.signInCallback.bind(this);
      this.login = this.login.bind(this);
    }

  signInCallback(authResult){
    if (authResult.code) {
      axios.post('/auth/google/callback', { code: authResult.code})
      .done(function(data) {
        // $('#signinButton').hide();
      }); 
    } else if (authResult.error) {
      console.log('There was an error: ' + authResult.error);
    }
  };

  login(){
    axios.post('/auth/google/callback')
      .then((res) => { console.log(res) })
  }


  render() {
    return (
      <div className="home">

        {/* <div id="signinButton" style={{height: '50px', width: '150px', background: 'lime'}} onClick={ this.login }>
          <span className="g-signin"
            data-scope="https://www.googleapis.com/auth/plus.login"
            data-clientid="120400538341-esucnei1nt6cpql4l19ap8dpv0m0vffg.apps.googleusercontent.com"
            data-redirecturi="postmessage"
            data-accesstype="offline"
            data-cookiepolicy="single_host_origin"
            data-callback={ this.signInCallback }>
          </span>
        </div>
        <div id="result"></div> */}
        <a href="http://localhost:8087/auth/google" rel='external'>LOGIN</a>

      </div>
    );
  }
}


export default Home;
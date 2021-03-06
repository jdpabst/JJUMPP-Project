import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {handleLogin} from './../../ducks/reducer';
import './Home.css';


class Home extends Component {
  constructor(props){
      super(props);
      this.state = {
        login: false
      };
      this.signInCallback = this.signInCallback.bind(this);
      this.login = this.login.bind(this);
      // this.handleLogin = this.handleLogin.bind(this);
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
    if(window.location.href.charAt(window.location.href.length - 1) === '#'){
      this.props.handleLogin();
      document.getElementById('graphs').style.display = 'block'
    }
  }
  // handleLogin(){
  //   console.log('fired')
  //   if(!this.state.login){
  //     this.setState({
  //       login: true
  //     })
  //   }
  // }

  render() {
    let color = this.state.background;
    return (
      <div className="home" id="home">
        <div id="home_overlay"></div>
        <div id="home_container">
          <h1>HELLO!</h1>
          <div id="about_me">
            <p>Welcome to my app! Here, you can login to checkout a bar chart I created using the YouTube Data API. Enjoy!</p>
          </div>
          <Link to='/login' style={{textDecoration: 'none', color: 'white'}}><div id="login_bttn">
            <div id="fb_icon">{this.props.login}</div>
          </div></Link>
        </div>
        <Link to='/graphs' style={{textDecoration: 'none', color: 'white'}}><div id="graphs">GRAPHS</div></Link>
      </div>
    );
  }
}


function mapStateToProps(state){
  return {
      login: state.login
  }
}

export default connect(mapStateToProps, { handleLogin } )(Home);
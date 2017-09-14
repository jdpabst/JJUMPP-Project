import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import './Graphs.css';


class Graphs extends Component {
  constructor(){
    super();
    this.state = {
      videosArr: [
        {
          snippet:{},
          statistics: {}
        }
      ]
  }    
}

componentDidMount(){
  axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&order=relevance&q=yogabycandace&type=video&key=AIzaSyD-98pdn2HMAEmroyZrC-Fye_j24121uuE`).then( videosArr => {
      this.setState({
          videosArr: videosArr.data.items,
      })
    })
    console.log(this.state.videosArr)
  }
  render() {
    return (
      <div className="graphs">
          <h1>GRAPHS</h1>
      </div>
    );
  }
}



export default Graphs;
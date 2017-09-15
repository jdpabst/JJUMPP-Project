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
          snippet:{
            title: ''
          },
          statistics: {
            commentCount:"",
            dislikeCount:"",
            favoriteCount:"",
            likeCount:"",
            viewCount:""
          }
        }
      ]
  }    
}

componentDidMount(){
  let list = [];
  let arr = ['unINzOxPnow', '18DPn8SdkDE', 'BdTzZuwGEOw', '8zboEPyROUk', 'fWvvQh6XyHs', 'Pa-37deuCI8', 'h0Qeu8KX1BE', 'oHLC_Q_q4fw', 'ZTbF0hSXQXE', 'hiMeDj1jj5I']
  for(var i = 0; i < arr.length; i++){
    axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2C+statistics&id=${arr[i]}&maxResults=50&key=AIzaSyD-98pdn2HMAEmroyZrC-Fye_j24121uuE`).then((res) => {
      list.push({title: res.data.items[0].snippet.title, likes: res.data.items[0].statistics.likeCount});
      this.setState({
          videosArr: res.data.items[0].statistics,
          list: list
      })
    })
  }
}
  render() {
    let videos = this.state.videosArr;
    return (
      <div className="graphs">
          <h1>GRAPHS</h1>
          <div>{ videos.likeCount }</div>
          <div>{JSON.stringify(this.state.list)}</div>
      </div>
    );
  }
}



export default Graphs;
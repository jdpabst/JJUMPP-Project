import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
      ],
      data: [
        {name:"20 Minute Yoga for Back Flexibility",pv:758},
        {name:"Pre-Run Warm Up Yoga Video - 20 Minute",pv:314},
        {name:"20 Minute Yoga Flow for Core Strengthening",pv:1100},
        {name:"20 Min Yoga Flow for Beginners",pv:2956},
        {name:"20 Min Yoga for Tight Legs",pv:1037},
        {name:"20 Minute Total Body Beginner Flow",pv:4014},
        {name:"20 Minute Yoga with a Stability Ball",pv:919},
        {name:"20 min vinyasa with a block",pv:227},
        {name:"20 Min Yin Yoga",pv:287},
        {name:"20 Minute Blindfolded Yoga Practice",pv:119}
    ]
  }    
}

componentDidMount(){
  let list = [];
  let arr = ['unINzOxPnow', '18DPn8SdkDE', 'BdTzZuwGEOw', '8zboEPyROUk', 'fWvvQh6XyHs', 'Pa-37deuCI8', 'h0Qeu8KX1BE', 'oHLC_Q_q4fw', 'ZTbF0hSXQXE', 'hiMeDj1jj5I']
  for(var i = 0; i < arr.length; i++){
    axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2C+statistics&id=${arr[i]}&maxResults=50&key=AIzaSyD-98pdn2HMAEmroyZrC-Fye_j24121uuE`).then((res) => {
      list.push({name: res.data.items[0].snippet.title, pv: parseInt(res.data.items[0].statistics.likeCount)});
      this.setState({
        videosArr: res.data.items[0].statistics,
    })
    })
  }
  this.setState({
    list: list
  })
}
  render() {
    let videos = this.state.videosArr;
    console.log(this.state.list);
    return (
      <div className="graphs">
          <h1>GRAPHS</h1>
          <div>{ videos.likeCount }</div>
          <div>{JSON.stringify(this.state.list)}</div>
          <BarChart width={730} height={250} data={this.state.data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
          </BarChart>
      </div>
    );
  }
}



export default Graphs;
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
    list: []
  }    
}

componentDidMount(){
  let list = [];
  let arr = ['unINzOxPnow', '18DPn8SdkDE', 'BdTzZuwGEOw', '8zboEPyROUk', 'fWvvQh6XyHs', 'Pa-37deuCI8', 'h0Qeu8KX1BE', 'oHLC_Q_q4fw', 'ZTbF0hSXQXE', 'hiMeDj1jj5I']
  for(var i = 0; i < arr.length; i++){
    axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2C+statistics&id=${arr[i]}&maxResults=50&key=AIzaSyD-98pdn2HMAEmroyZrC-Fye_j24121uuE`).then((res) => {
      list.push({name: res.data.items[0].snippet.title, LIKES: parseInt(res.data.items[0].statistics.likeCount)});
      this.setState({
        videosArr: res.data.items[0].statistics,
        list: list
    })
    })
  }
  
}
  render() {
    let videos = this.state.videosArr;
    let list = this.state.list;
    let chart;
    if(this.state.list.length >= 10){
      chart = <BarChart className="bar_chart" width={800} height={400} data={this.state.list}>
          <XAxis/>
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Bar dataKey="LIKES" fill="#009D6E" />
        </BarChart>
      }
    return (
      <div className="graphs">
          <Link to='/' style={{textDecoration: 'none', color: 'black'}}><h2>HOME</h2></Link>
          <h1>YOGA BY CANDACE PLAYLIST 'LIKES' COUNT</h1>
          {chart}
          <ul id="list_list">{list.map((name, id) => {
            return <li id="list_item">{ name.name }</li>
          })}</ul>
      </div>
    );
  }
}



export default Graphs;
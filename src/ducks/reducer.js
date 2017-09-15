 const LIST = 'LIST'
 const TEST = 'TEST'
 const VIDEO = 'VIDEO'
 const LOGIN = 'LOGIN'

const initialState = {
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
    list: [],
    login: 'SIGN IN'
} 

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LIST:
      return {
        list:action.payload,
      }
    case TEST:
      return{
        test:action.payload,
      }
    case VIDEO:
      return{
        videosArr:action.payload,
      }
    case LOGIN:
      return{
        login:action.payload,
      }
    default:
      return state;
    }
    
}


export function handleList(param){
    return{
      type: LIST,
      payload: param
      }  
    }
export function handleTest(param){
  return{
    type: TEST,
    payload: param
  }
}
export function handleVideoArr(param){
  return{
    type: VIDEO,
    payload: param
  }
}
export function handleLogin(){
  return{
    type: LOGIN,
    payload: 'LOGGED IN'
  }
}



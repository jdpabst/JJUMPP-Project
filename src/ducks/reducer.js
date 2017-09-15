 const LIST = 'LIST'
 const TEST = 'TEST'
 const VIDEO = 'VIDEO'

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
    list: []
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



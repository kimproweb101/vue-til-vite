import {posts} from './index'

// 학습 노트 데이터 조회 API
function fetchPosts(){
  return posts.get('/')
}

function createPost(postData){
  return posts.post('/', postData)
}

export {fetchPosts, createPost}
import React from 'react'
import Navbar from '../components/header/Navbar';
import PostInfo from '../components/postInfo/PostInfo';
import PostComment from '../components/postComment/PostComment';

const Post = () => {
  return (
    <main style={{background: "#f5f5f5"}}>
      <Navbar/>
      <PostInfo />
      <PostComment/>
    </main>
  )
}
export default Post;
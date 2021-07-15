import React from 'react'
import './post.css';
const Post = ({ name,message }) => {
    return (
        <>
          <center>
          <div className="post-container">
         
          <h3>{message}</h3>
          </div>
          </center>
        </>  
    )
}

export default Post

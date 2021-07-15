import React,{useState,useEffect} from 'react'
import { db } from './firebase';
import Post from './Post'
import firebase from 'firebase';

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [input,setInput] = useState("")
    useEffect(() => {
        db.collection("posts").orderBy("timestamp","desc")
        .onSnapshot(snapshot=>
            setPosts(
            snapshot.docs.map((doc)=>({
              id:doc.id,
              data:doc.data(),
        }))   
        )
            );
        
    }, []);
    
    
    const sendPost = e =>{
        e.preventDefault();
db.collection('posts').add({
message:input,
timestamp:firebase.firestore.FieldValue.serverTimestamp(),
});
setInput("");
    };

    return (
            <>
            <div className="Feed">
                <div className="feed-input">
                    <h2>Enter your post here!</h2>
                    <form>
                       <input 
                       value={input} 
                       onChange={(e)=>setInput(e.target.value)}
                       type="text" />
                       <button type="submit" 
                       onClick={sendPost}
                      
                       >Send</button> 
                       
                    </form>
                    </div> 
            </div>
       {posts.map(({id,data:{name,message}})=>(
          <Post 
          key={id}
          message={message}
          
          /> 
       ))}
       
       </>
    )
}

export default Feed

import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post'








const MyPosts = (props) => {

    

    let linkText = React.createRef()
    
   
    let addPosts = () => {    
        let info = linkText.current.value
        props.addPost(info) 
        console.log(props.post)
    }
    let backUp = () => {
        let info = linkText.current.value
        props.updateTextArea(info)

    }

    let postsArray = props.post.map(post => <Post message ={post.text} like={post.like}/>)
       
    return (
        <div>
            My posts
            <div>
                <textarea onChange={backUp} value={props.newPostText} ref={linkText}></textarea>
                <button onClick ={addPosts}>add post</button>
                {postsArray}
            </div>
        </div>
    )
}

export default MyPosts;
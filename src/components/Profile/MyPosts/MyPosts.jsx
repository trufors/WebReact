import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post'









const MyPosts = (props) => {


    let linkText = React.createRef()
    
   
    let onAddPost = () => {    
        props.addPosts()   
    }

    let backUp = () => {
        let info = linkText.current.value
        props.updateNewTextArea(info)

    }

    let postsArray = props.post.map(post => <Post message ={post.text} like={post.like}/>)
       
    return (
        <div>
            My posts
            <div>
                <textarea onChange={backUp} value={props.newPostText} ref={linkText}></textarea>
                <button onClick ={onAddPost}>add post</button>
                {postsArray}
            </div>
        </div>
    )
}

export default MyPosts;
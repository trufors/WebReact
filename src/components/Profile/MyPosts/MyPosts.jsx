import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>add post</button>
                <Post message='My fyrst post' like='28'/>
                <Post message='I am cat' like='29'/>
                <Post message='Kakashka' like='233'/>
                
            </div>
        </div>
    )
}

export default MyPosts;
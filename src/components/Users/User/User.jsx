import React from 'react';
import classes from './User.module.css'


const User = (props) => {
    
    let checkFollowedIn = (followed) => (followed) ? 'Delete friend' : 'Add friend'
    
    return (
            <div className = {classes.container}>
                <div className={classes.user}>
                    <img className = {classes.userAvatar} alt = "userAvatar" src = "https://img10.joyreactor.cc/pics/post/jojo-reference-Billy-Herrington-gachimuchi-6711766.jpeg"/>
                    <div className = {classes.userInfo}>
                        <div className = {classes.userText}>
                            <h3>{props.name}</h3>
                            <p>{props.status}</p>
                    
                        </div>
                        <div className={classes.country}>
                            <p>{props.country}</p>   
                        </div>

                    </div>
                    
                
                </div>
                <button className={classes.button}>{checkFollowedIn(props.addFriends)}</button>
            </div>
    )
}

export default User;


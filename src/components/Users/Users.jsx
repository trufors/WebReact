import React from 'react';
import classes from './Users.module.css'
import User from './User/User'


const Users = (props) => {
    console.log(props.users)
    let usersArray = props.users.map((users) => <User name = {users.name} id = {users.id} status = {users.status}  country ={users.country} followed= {users.followed}/>)
        console.log(usersArray)
    
    return (
        <div className={classes.content}>
            <div className={classes.container}>
                {usersArray}
            </div>   
            <button className={classes.buttonMore}>Check More Friends</button>  
        </div>

        
    )
}

export default Users;
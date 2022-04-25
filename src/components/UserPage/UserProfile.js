




import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DashBoard from './DashBoard';
const UserProfile = () => {

   const [userlists, setuserlists] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/registerusers")
            .then(res => {
                console.log(res)
                setuserlists(res.data)
                
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return 
        (<div> {
        userlists.map(userlist => (<div><label>Name</label><input type="text" value={userlist.username}></input></div>
    ))}</div>)
 
}
 export default UserProfile;

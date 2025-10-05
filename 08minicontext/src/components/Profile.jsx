import React from 'react'
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';


const Profile = () => {

  const {user} = useContext(UserContext);
  // let name = user ? user.userName : "Guest";
  // let password = user ? user.password : "No Password";
  if(!user) return <h1>Please Login First</h1>
  let name = user?.userName || "Guest";
  let password = user?.password || "No Password";
  return (
     <>
     <h1>
      User Name is : {name}
      </h1>
      <h2>
        User Passowrd is : {password}
        </h2></>
  )
}

export default Profile
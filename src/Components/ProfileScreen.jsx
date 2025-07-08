
import { useEffect, useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ProfileScreen = () => {
    const [user,setUser] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data[0]));
    })

  return (
    <div>
    <div style={{padding: '40px'}} className="profile-container">
       <h1>Welcome, Leanne Graham </h1>
        <div className="profile">
          <div className="profile-img">
        <FaRegCircleUser size={55}/>
        </div>
        <div className="profile-details">
        <h1 className="user-name">{user.name}</h1>
        <p className="user-mail">{user.email}</p>
 </div>
  </div>
  <div className="profile-screen">
<div className="profile-cont">
    <label className="label-box">User ID</label>
    <input value={user.id} className="input-field"/>
 
    <label className="label-box">Name</label>
    <input value={user.name} className="input-field"/>

    <label className="label-box">Email</label>
    <input value={user.email} className="input-field"/>

    <label className="label-box">Address</label>
    <input value={user.address} className="input-field"/>

    <label className="label-box">Phone</label>
    <input value={user.phone} className="input-field"/>
  </div>
  </div>
    <div className="button">
    <button className="back-btn" onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
  </div>
  </div>
   </div>
 
  )
}

export default ProfileScreen

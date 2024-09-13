import React, { useState } from 'react';
import useStore from './store/store';

const UserProfile = () => {
    const {user,setUser} = useStore();
    const [name,setName] = useState(user.name);
    const [age,setAge] = useState(user.age);

    const handleUpdateUser= () => {
        setUser({
            name,
            age:parseInt(age,10)
        })
    }
  return (
    <div>
      <h1>User Profile</h1>
      <p>{user.name}</p> 
      <p>{user.age}</p>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder='Age' />
      <button onClick={handleUpdateUser}>Update profile</button>
    </div>
  );
}

export default UserProfile;

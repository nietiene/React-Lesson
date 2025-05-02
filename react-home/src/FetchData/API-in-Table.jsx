import axios from "axios";
import React, { useEffect, useState } from "react";
import AddNew from "./AddNew";

const Table = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [formData, setFormData] = useState({name:"", password:""});
  const [showAddNew, setShowAddNew] = useState(false);

useEffect(() => {
  fetchUser();
}, []);

const fetchUser = () => {
  axios.get("http://localhost:3000/user")
  .then((resp) => {
    setUsers(resp.data.users);
  }).catch((err) => {
    console.error("Error in fetching user", err);
  });
}

// Prepare system to start editing
const StartEditing = (user) => {
  setEditUser(user.id);
  setFormData({name: user.name, password: user.password});
}

// After Preparation Perform Editing Logic

const PerformEditing = () => {
  axios.put(`http://localhost:3000/user/${editUser}`, formData)
  .then(() => {
    fetchUser();
    setEditUser(null);
    setFormData({name: "", password: ""});
  }).catch((err) => {
    console.error("Error", err);
  });
}

//Perform Delete Logic
const PerformDeleting = (id) => {
  axios.delete(`http://localhost:3000/user/${id}`)
  .then(() => {
    fetchUser();
  }).catch((err) => console.error("Error", err));
}

return (
  <div>
    <button onClick={() => setShowAddNew(true)}>Add New</button>
    {showAddNew && (
      <AddNew fetchUser={fetchUser} onClose={() => setShowAddNew(false)}/>
    )}
     <table border={2}>
      <tr>
        <th>Name</th>
        <th>Password</th>
        <th colSpan={2}>Action</th>
      </tr>

     {users.map((user) => (
       <tr key={user.id}>
       {editUser === user.id ? (
        <>
        <td>
          <input type="text" value={formData.name} 
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          placeholder="Enter Name"
          />
        </td>
        <td>
           <input type="password" value={formData.password} 
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          placeholder="Enter Password"
          />
        </td>
        <td><button onClick={PerformEditing}>Save</button></td>
        <td><button onClick={() => setEditUser(null)}>Cancel</button></td>
        </>
    ) :(
      <>
        <td>{user.name}</td>
        <td>{user.password}</td>
        <td><button onClick={() => StartEditing(user)}>Edit</button></td>
        <td><button onClick={() => PerformDeleting(user.id)}>Delete</button></td>
      </>
    )} 
    </tr>
  ))}
     </table>
  </div>
)
}

export default Table
import axios from "axios";
import React, { useEffect, useState } from "react";

const API = () => {
    const [users, setUsers] = useState([]);
    const [updateUser, setUpdateUser] = useState(null); // When no user selected for updating
    const [formData, setFormData] = useState({name: "", password: ""});

    useEffect(() => {
        fetchUser();
    }, []);
    
    const fetchUser = () => {
        axios.get("http://localhost:3000/user")
        .then((response) => {
            setUsers(response.data.users);
        })
        .catch((err) => {
            console.error("Error In data fetching", err);
        });
    };
   // Delete User
   const HandleDelete = (id) => {
    axios.delete(`http://localhost:3000/user/${id}`)
     .then(() => fetchUser()) // refresh user to display new user
     .catch((err) => {
        console.error("Error Deleting User", err);
     })
   }
    // Edit user
    const HandleEdit = (user) => {
        setUpdateUser(user.id); // differentiate user to edit tell react react which user we will shor edit form
        setFormData({name: user.name, password: user.password});
    }

    // Hndle Edit
    const HandleUpdate = () => {
        axios.put(`http://localhost:3000/user/${updateUser}`, formData)
        .then(() => {
            fetchUser();
            setUpdateUser(null);
            setFormData({name:"", password:""});
        })
       .catch((err) => {
        console.error("Error", err);
       });
    }

    return (
        <div>
            <h2>List Of User</h2>
            {users.map((user) => (
                <ol key={user.id}>
                    {updateUser === user.id ? (
                        <>
                          <li>
                            <input type="text" value={formData.name}
                             onChange={(e) => setFormData({...formData, name: e.target.value})}
                             placeholder="Name"
                            />
                          </li>
                          <li>
                            <input type="text" value={formData.password} 
                             onChange={(E) => setFormData({...formData, password: E.target.value})}
                             placeholder="Password"
                            />
                          </li>
                          <li>
                            <button onClick={HandleUpdate}>Save</button>
                            <button onClick={(e) => setUpdateUser(null)}>Cancel</button>
                          </li>
                        </>
                    ) : (
                        <>
                         <li><strong>Name:</strong> {user.name}</li>
                         <li><strong>Password:</strong> {user.password}</li>
                           <li>
                              <button onClick={() => HandleEdit(user)}>Edit</button>
                              <button onClick={() => HandleDelete(user.id)}>Delete</button>
                           </li>
                        
                        </>
                    )}
                </ol>
            ))}
        </div>
    )
}
export default API;
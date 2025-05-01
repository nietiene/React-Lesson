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
        setFormData({name: user.name, password: user.password}); // display existing name and passowrd of user
    }

    // Hndle Edit
    const HandleUpdate = () => {
        axios.put(`http://localhost:3000/user/${updateUser}`, formData)
        .then(() => {
            fetchUser(); // reftesh the screen to get updated user
            setUpdateUser(null); // exist in editing mode
            setFormData({name:"", password:""}); // reset Input to empty
        })
       .catch((err) => {
        console.error("Error", err);
       });
    }


  const HandleAddNew = () => {
    if (!formData.name || !formData.password) {
        alert("Both name and password are required");
        return;
    }
    axios.post("http://localhost:3000/user/add", formData)
    .then(() => {
        fetchUser();
        setFormData({id:"", name:"", password:""});
    })
    .catch((err) => {
        console.error("Error In New User", err);
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
                             onChange={(e) => setFormData({...formData, password: e.target.value})}
                             placeholder="Password"
                            />
                          </li>
                          <li>
                            <button onClick={HandleUpdate}>Save</button>
                            <button onClick={() => setUpdateUser(null)}>Cancel</button>
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
            {/* Add New User */}
            <h2>Add New</h2>
            <input type="number"
            value={formData.id}
            onChange={(e) => setFormData({...formData, id: e.target.value})}
            placeholder="Enter Id"/> <br />

            <input type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            placeholder="Enter Name"/> <br />

            <input type="password" 
             value={formData.password}
             onChange={(e) => setFormData({...formData, password: e.target.value})}
             placeholder="Enter Password"/>
          <button onClick={HandleAddNew}>Add</button>
        </div>
    )
}
export default API;
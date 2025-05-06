// User Managmetn Dashbolard
import React, { useEffect, useState} from "react";
import axios from "axios";
const UserManagmentDashboard = () => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [isloading, setIsLoading] = useState(true);
    const [isLoggedIn, setLoggedIn] = useState(false)
    const [updatedData, setUpdatedData] = useState("");
    

        const FetchedData = async () => {
            try {
              setIsLoading(false);
              const response = await axios.get("http://localhost:3001/user")
              setUser(response.data);
             
            } catch (err) {
              setIsLoading(false);
              setError(err.message);
             } finally {
                setIsLoading(false);
             }
              
    }
    useEffect(() => {
        FetchedData();
    }, []);
   
 const updateData = (user) => {
   setUpdatedData(user.id);
   setFormData({id: user.id ,name: user.name, password: user.password});
 }

 const HandleUpdate = async () => {
   try {
    setIsLoading(false);
    await axios.put(`http://localhost:3001/user/${updatedData}`, formData);
    FetchedData();
    setError(null);
    setUpdatedData({name:"", password:""})
 } catch(err) {
    setIsLoading(false);
    setError(err.message);
 } 

}


const Deleted = async (id) => {
    try {
        setIsLoading(false);
        await axios.delete(`http://localhost:3001/user/${id}`);
        FetchedData();
    } catch(err) {
        setError(err.message);
        setIsLoading(false);
    }
    
} 

const AddNew = async() => {
    try {
        setIsLoading(false);
       await axios.post(`http://localhost:3001/user`, {
        withCredentials: true
        ,formData});
       setFormData({name:"", password:""});
       FetchedData();
       setShowForm(false);
    } catch (err) {
        setIsLoading(false);
        setError(err.message);
    }
}

const handleLogin = async() => {
    try {
        const response = await axios.get(
            "http://localhost:3001/login",
            {name, password},
            {withCredentials: true}
        );
        setUser(response.data.user);
        setLoggedIn(true);
        setError(null);
    } catch(err) {
        setError("Login Failed");
        setLoggedIn(false);
    }
}
    if (isloading) return <div>Loading.....</div>
    if (error) return <div>{error}</div>

    return (
        <div>
        <button onClick={() => setShowForm(!showForm)}>
            {showForm ? "Close Form" : "Add New"}
        </button>
        {showForm && (
            <>
              <h3>New User</h3>
              <label htmlFor="">Name</label>
              <input type="text" name="name" 
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Enter Name"/> <br />
              <label htmlFor="">Password</label>
              <input type="text" name="password" 
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              placeholder="Enter Password"/> <br />
              <button onClick={AddNew}>Save</button>
            </>
        )}
            <table border={2}>
                <thead>
                 <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Password</th>
                    <th colSpan={2}>Operations</th>
                 </tr>
                </thead>
              <tbody> 
             {user.map((user => (
                <tr key={user.id}>
                 {updatedData === user.id ? (
                    <>
                    <td>
                        <input type="text" name="id"value={formData.id} 
                         readOnly/>
                       </td> 
                    <td>
                        <input type="text" name="name"value={formData.name} 
                        onChange={(e) => setFormData({...formData, name: e.target.value})}/>
                       </td> 
                       <td>
                        <input type="text" name="password"value={formData.password} 
                        onChange={(e) => setFormData({...formData, password: e.target.value})}/>
                       </td>
                      <td><button onClick={HandleUpdate}>Save</button></td>  
                        <td><button onClick={() => setUpdatedData(null)}>Cancel</button></td>  
                    </>
                   
                 ): (
                    <>
                     <td>{user.id}</td>
                     <td>{user.name}</td>
                     <td>{user.password}</td>
                   <td><button onClick={() => updateData(user)}>Update</button></td>  
                   <td><button onClick={() => Deleted(user.id)}>Delete</button></td>  
                    </>
                 )}
                </tr>
            )))}
            </tbody> 
            </table>
        </div>
    )
}

export default UserManagmentDashboard;
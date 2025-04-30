import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosData = () => {
    const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/user")
    .then((response) => {
        console.log("Received data", response.data)
        setUsers(response.data.users);
    })
    .catch((error) => {
        console.error("Error in fetching data", error);
    });

  }, []);
   
    return (
        <div>
            <h2>List Of Users (Using Axios)</h2>
            {users.map((user) => {
                return (
                    <ol key={user.id}>
                          <li><strong>Name:</strong> {user.name}</li>
                          <li><strong>Password:</strong>{user.password}</li>
                    </ol>
                )
            })}
        </div>
    )
}
export default AxiosData
import React, { useEffect, useState } from "react";

const FetchData = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json()) // convert data to JSON
        .then((data) => {
            setUsers(data); // Store data in State
        })
        .catch((error) => {
            console.error("Error In fetching Data", error);
        })
    }, []); // Run Once when component is mounted or fetched

    return (
        <div>
            <h2>User List (By using fetch)</h2>
            <ul>
                {users.map((user) => {
                  return <li key={user.id}>{user.name} - {user.email}</li>
                })}
            </ul>
        </div>
    )
}
export default FetchData
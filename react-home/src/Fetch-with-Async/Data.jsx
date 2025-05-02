import React, {useEffect, useState } from "react";

const FetchWithAsync = () => {
    const [data, setData] = useState([]); // array to store users
    const [loading, setLoading] = useState(true); // this loading until database respond
    const [error, setError] = useState(null); // Error to be displayed

   useEffect(() => {

    const FetchingUser = async () => {
       try {
        const response = await fetch("http://localhost:3000/user"); // fetch Data
        const result = await response.json(); // confert data into JSON format
        setData(result); // store data in our array
    } catch (err) {
        setError(err); // Error to be displayed
    } finally {
       setLoading(false); // even error or data displayed must stop
    }}
    FetchingUser(); // run our function
},  []);

   if (loading) return <div>Loading......</div>
   if (error) return <div>{err.message}</div>

   return (
    <div>
      <h2>list User List</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
   )
}
export default FetchWithAsync;
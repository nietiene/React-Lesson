import React, { useEffect, useState } from "react";

const Data = ( { id }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError ] = useState(null);

    useEffect(() => {
        const fetchingUser = async () => {
            try {
                const users = await fetch(`http://localhost:3000/user/${id}`);
                const result = await users.json();
                setData(result);    
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        fetchingUser();
    }, [id]);

   

    if (loading) return <div>Loading....</div>
    if (error) return <div>{error.message}</div>

    return (
        <div>
            <p>Name: {data.name}</p>
            <p>Password: {data.password}</p>
        </div>
    )
}

export default Data;
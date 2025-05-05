import React, { useContext } from "react";
import UserContext from "./useContext";

const Home = () => {
    const {user, setUser} = useContext(UserContext);
  console.log("User:", user)
    return (
        <div>
            <h1>Welcome {user.name}</h1>
            <button onClick={() => setUser({...user, loggedIn: false})}>Logout</button>
        </div>
    )
}
export default Home;
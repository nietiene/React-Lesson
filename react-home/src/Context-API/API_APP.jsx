import React,{ useState } from "react";
import UserContext from "./useContext";
import Home from "./Home";
const API_App = () => {
    const [user, setUser] = useState({name:"Etiene", loggedIn: true});
    
    return (
        <UserContext.Provider value={{ user, setUser }}>
           <Home />
        </UserContext.Provider>
    )
}
export default API_App;
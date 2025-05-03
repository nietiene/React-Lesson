import React,{ useState } from "react";
import UserContext from "./useContext";

const API_App = () => {
    const [user, setuser] = useState({name:"Etiene", loggedIn: true});
    
    return (
        <UserContext.Provider value={{ user, setuser }}>
           <Home />
        </UserContext.Provider>
    )
}
export default API_App;
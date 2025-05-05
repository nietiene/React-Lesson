import { useState } from "react";
import Navbar from "./Navbar";
import Profile from "./profile";
import UserContext from "./context";

const HomeApp = ()  => {
    const [user, setUser] = useState({name: "Etiene", isLogged: true});

    return (
        <UserContext.Provider value={{ user, setUser }} >
            <Profile/>
            <Navbar/>
        </UserContext.Provider>
    )
}

export default HomeApp;
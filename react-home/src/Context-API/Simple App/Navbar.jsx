import { useContext } from "react";
import UserContext from "./context";

const Navbar = () => {
    const {user, setUser} = useContext(UserContext);
    const logout = () => {
        setUser({...user, isLogged: false});
    }
    return (
        <div>
            
            <h2>Hello {user.name}</h2>
            <span>{user.isLogged ? "Loggged In" : "Logged Out"}</span>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Navbar
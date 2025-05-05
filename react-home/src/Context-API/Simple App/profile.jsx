import UserContext from "./context";
import { useContext } from "react";

const Profile = () => {
    const { user } = useContext(UserContext);

    return (
        <p>{user.name}</p>
    )
}
export default Profile;
import { Outlet, Link } from "react-router-dom";

export default function DashBoard(){
    return (
        <div>
          <h2>Admin DashBoard</h2>
          <nav>
            <Link to="analytics">Analytics</Link> |
            <Link to="setting">Settings</Link> 
          </nav>
        <hr />

        <Outlet />
        </div>
    )
}
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./Dashoard";
import Setting from "./Setting";
import Analytics from "./Analytics";

export default function PageMain(){
    return (
        <Router>
            <Routes>
              <Route path="/" element={<h2>Welcome</h2>}/>
                <Route path="dashboard" element={<DashBoard/>}>
                    <Route path="analytics" element={<Analytics />}/>
                    <Route path="setting" element={<Setting />}/>
                </Route>   
               
            </Routes>
        </Router>

    )
}
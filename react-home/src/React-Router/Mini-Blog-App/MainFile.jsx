import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";     
import Post from "./post";

export default function MainFile(){
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/About" element={<About />}/>
                <Route path="/data/:id" element={<Post />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </Router>

    )
}
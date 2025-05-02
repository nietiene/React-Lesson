import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
//BrowserRouter = component that enables routing in a React app using the browser's URL.

export default function DashBoard() {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/About" element={<About />}/>
                <Route path="/Contact" element={<Contact />}/>
            </Routes>
        </Router>

    )
}
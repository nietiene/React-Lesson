import { BrowserRouter as Router, Routes,  Route, Link} from "react-router-dom";
import Product from "./Product";

const MainPage = () => {
    return (
        <Router>
            <nav>
                {/* This Is link which will display product details*/}
                <Link to="product/1">T-shirt</Link>| 
                <Link to="product/2">Laptop</Link> |
                <Link to="product/3">I phone</Link> |
                <Link to="product/4">MacBook</Link>
            </nav>
            <Routes>
                <Route path="/" element={<h2>Welcome Please choose A product</h2>}></Route>
                <Route path="/product/:id" element={<Product />}></Route>
            </Routes>
        </Router>
    )
}


export default MainPage;
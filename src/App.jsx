;
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Cart from "./components/cart";
import {Link} from "react-router-dom"
import Product from "./components/Product";

function App() {
 

  return (
    <>
   <Link to={"/"}>home</Link>
   <br />
   <Link to={"/cart"}>Cart</Link>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/product/:id" element={<Product/>}/>
    </Routes>
        </>
    
  );
}

export default App;

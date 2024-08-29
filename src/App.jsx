
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Cart from "./components/cart";
import { MdOutlineWbSunny } from "react-icons/md";
import { LuMoon } from "react-icons/lu";
import {Link} from "react-router-dom"
import Product from "./components/Product";
import Dot from "./components/Dot";
import { useState } from "react";
import Search from "./components/Search";

function App() {
 const [x, setX] = useState(0);
 const [y, setY] = useState(0);

 const [Theme,SetTHEME] = useState(true)
 function move(e) {
   const maxX = window.innerWidth; 
      const maxY = window.innerHeight ; 
   const newX = Math.max(0, Math.min(e.pageX, maxX));
   const newY = Math.max(0, Math.min(e.pageY, maxY));
   setX(newX);
   setY(newY);
 }


  return (
    <div
      onMouseMove={(e) => move(e)}
      className={`${
        Theme ? "bg-black text-white" : "bg-white text-black"
      } min-h-screen `}>
      <Dot x={x} y={y} />

      <div className="flex  justify-between my-4 uppercase text-3xl p-3 ">
        <Link to={"/"}>home</Link>

        <Search th={Theme}/>
        <div className="flex gap-3">
          <div onClick={() => SetTHEME((Theme) => !Theme)}>
            {Theme ? <LuMoon /> : <MdOutlineWbSunny />}
          </div>
          <Link to={"/cart"}>Cart</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;

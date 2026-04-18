import { HashRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Login from "./pages/Login";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <HashRouter>
      <h1>Grocery SPA</h1>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/products">Products</Link> | 
        {!isLoggedIn ? <Link to="/login">Login</Link> :
        <button onClick={()=>setIsLoggedIn(false)}>Logout</button>}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={isLoggedIn ? <Products /> : <Navigate to="/login"/>} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
      </Routes>
    </HashRouter>
  );
}

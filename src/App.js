import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Form from "./components/User/Form";
import Signup from "./components/User/Signup";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import Store from "./components/Store/Store";
import Cart from "./components/Store/Cart";
import Footer from "./components/Header/Footer";

function App() {





  return (
    <div >
      <Header />

      <Routes>

        <Route path="/about" element={<About />}/>
        <Route path="/events" element={<Events />}/>
        <Route path="/store" element={<Store />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/login" element={<Form />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/" element={<Home />}/>
       

      </Routes>
      <Footer />
    </div>
  );
}

export default App;

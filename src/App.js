import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div>
            <Navbar />
                <Routes>
                    <Route exact path="/about" element={ <About /> } />
                    <Route exact path="/login" element={ <Login /> } />
                    <Route exact path="/" element={ <Home /> } />
                </Routes>
        </div>
    )
}

  export default App;
import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import UserSignupPage from "../pages/UserSignupPage";
import UserPage from "../pages/UserPage";


function App() {
    return (
        <div>
            <div className="container">
                <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/signup" element={<UserSignupPage/>}/>
                <Route path="/:username" element={<UserPage/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;

import * as React from "react";
import {Route, Routes} from "react-router-dom";
import "./App.css";
import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/admin" element={<Admin/>}/>
            </Routes>
        </div>
    );
}

export default App
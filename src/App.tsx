import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import { useState } from "react";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/auth" element={<div>하하</div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

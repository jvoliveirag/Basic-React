import React from "react";
import { Routes, Route } from "react-router-dom";

import Create from '../pages/Create'
import Read from '../pages/Read';
import ReadByPlaca from '../pages/ReadByPlaca';

export default function Routers() {
    return (
        <Routes>
            <Route exact path="/" element={<Create />} />
            <Route exact path="/ReadByPlaca" element={<ReadByPlaca />} />
            <Route exact path="/Read" element={<Read />} />
        </Routes>
    )
}
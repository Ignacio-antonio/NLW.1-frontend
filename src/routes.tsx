import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';

const Routas = () => {
    return(
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/create-point" element={<CreatePoint/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routas;
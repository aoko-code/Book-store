import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';

export default function Routing(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}/>

            </Route>
        </Routes>
        </BrowserRouter>
    )
}
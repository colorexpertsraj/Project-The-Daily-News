import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainLayout from './hoc/mainLayout';

import Home from './components/home';
import Contact from './components/contact';
import Header from './components/header';
import PostComponent from './components/posts';

const RoutesAll = () => (
    <BrowserRouter>
        <Header/>
        <MainLayout>
            <Routes>
                <Route path="/article/:id" element={<PostComponent/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </MainLayout>
    </BrowserRouter>
)


export default RoutesAll
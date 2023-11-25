import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from '../../page/Post';
import Login from '../../page/Login';
import Register from '../../page/Register';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/Post' element={<Post/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router
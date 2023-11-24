import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from '../../page/Post';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/Post' element={<Post/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router
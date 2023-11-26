import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "../../page/Post";
import Login from "../../page/Login";
import Register from "../../page/Register";
import CrearPost from "../crearPost/CrearPost";
import PostInfo from "../postInfo/PostInfo";
import Home from "../../page/home";
import Red from "../red/Red";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Post" element={<Post />} />
        <Route path="/CrearPost" element={<CrearPost />} />
        <Route path="/PostInfo" element={<PostInfo />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

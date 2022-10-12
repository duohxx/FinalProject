/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable*/  
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignIn from "./contains/signIn/SignIn";
import Register from "./contains/register/register";
import Main from "./contains/main/main";
import store from './redux/store';
import Blog from "./contains/blog/Blog";
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/blog" element={<Blog />} />
          <Route index element={<Main />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    
  );
}

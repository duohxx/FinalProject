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
import Information from "./contains/subjectList/Information";
import { Provider } from 'react-redux'
import theme from "assets/theme";
import { ThemeProvider } from "@mui/material/styles";

export default function App() {
  return ( 
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/register" element={<Register />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/blog" element={<Blog /> } />
            <Route path="/Information" element={<Information />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

import React, { useEffect, useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlboalStyled from "./styles/Global";
import { Theme } from "./styles/theme/theme";
import { ThemeProvider } from "styled-components";

import Header from "./components/Header/Header";

import { ModalProvider } from "./context/ModalContext";

import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import About from "./pages/About/About";
import Profile from "./pages/Profile/Profile";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ModalProvider>
          <ThemeProvider theme={Theme}>
            <GlboalStyled />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/register" element={<Register />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
          </ThemeProvider>
        </ModalProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

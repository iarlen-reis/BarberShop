import React, { useEffect, useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlboalStyled from "./styles/Global";
import { Theme } from "./styles/theme/theme";
import { ThemeProvider } from "styled-components";

import Header from "./components/Header/index";

import { ModalProvider } from "./context/ModalContext";

import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import About from "./pages/About/About";

// auth
import { onAuthStateChanged, getAuth, User } from "firebase/auth";
import { app } from "./services/firebase";

function App() {
  const auth = getAuth(app);
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) return setUser(user);
      setUser(null);
    });
  }, [auth, user]);

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
              <Route path="/register" element={<Register />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </ThemeProvider>
        </ModalProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

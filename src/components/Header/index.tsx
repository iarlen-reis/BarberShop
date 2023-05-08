import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "/Images/Login.png";

import {
  HeaderStyled,
  HeaderContainer,
  LogoStyled,
  ButtonLogoutStyled,
} from "./styles";

import { useAuthContext } from "../../context/AuthContext";

import { useNavigate } from "react-router-dom";

const index = () => {
  const { user, logout } = useAuthContext();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();

    navigate("/login");
  };

  return (
    <>
      <HeaderStyled>
        <HeaderContainer>
          <LogoStyled src={Logo} alt="Logo da página" />
          {user?.uid && user.uid !== "" && (
            <ButtonLogoutStyled onClick={handleLogout}>Sair</ButtonLogoutStyled>
          )}
        </HeaderContainer>
      </HeaderStyled>
      <Outlet />
    </>
  );
};

export default index;

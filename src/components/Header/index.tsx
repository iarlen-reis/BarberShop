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

const index = () => {
  const { user, logout } = useAuthContext();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <HeaderStyled>
        <HeaderContainer>
          <LogoStyled src={Logo} alt="Logo da página" />
          {user.displayName && (
            <ButtonLogoutStyled onClick={handleLogout}>Sair</ButtonLogoutStyled>
          )}
        </HeaderContainer>
      </HeaderStyled>
      <Outlet />
    </>
  );
};

export default index;

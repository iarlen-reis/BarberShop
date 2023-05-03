import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "/Images/Login.png";

import { HeaderStyled, HeaderContainer, LogoStyled } from "./styles";

const index = () => {
  return (
    <>
      <HeaderStyled>
        <HeaderContainer>
          <LogoStyled src={Logo} alt="Logo da página" />
        </HeaderContainer>
      </HeaderStyled>
      <Outlet />
    </>
  );
};

export default index;

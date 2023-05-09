import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "/Images/Login.png";

import {
  HeaderStyled,
  HeaderContainer,
  LogoStyled,
  NavStyled,
  ProfileStyled,
  ButtonLogoutStyled,
} from "./styles";

import { CgProfile } from "react-icons/cg";

import { useAuthContext } from "../../context/AuthContext";

import { useNavigate, Link } from "react-router-dom";

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
          <Link to="/">
            <LogoStyled src={Logo} alt="Logo da página" />
          </Link>
          {user?.uid && user.uid !== "" && (
            <NavStyled>
              <li>
                <ProfileStyled>
                  <Link to="/profile">
                    <CgProfile />
                  </Link>
                </ProfileStyled>
              </li>
              <li>
                <ButtonLogoutStyled onClick={handleLogout}>
                  Sair
                </ButtonLogoutStyled>
              </li>
            </NavStyled>
          )}
        </HeaderContainer>
      </HeaderStyled>
      <Outlet />
    </>
  );
};

export default index;

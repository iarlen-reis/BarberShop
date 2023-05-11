import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Logo from "/Images/Logo.png";

import {
  HeaderStyled,
  HeaderContainer,
  LogoStyled,
  NavStyled,
  ProfileStyled,
  ButtonLogoutStyled,
  MobileStyled,
} from "./styles";

import { CgProfile } from "react-icons/cg";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

import { useAuthContext } from "../../context/AuthContext";

import { useNavigate, Link } from "react-router-dom";

const index = () => {
  const { user, logout } = useAuthContext();
  const [mobile, setMobile] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setMobile(!mobile);

    navigate("/login");
  };

  return (
    <>
      <HeaderStyled>
        <HeaderContainer>
          <Link to="/">
            <LogoStyled src={Logo} alt="Logo da página" />
          </Link>
          {user?.uid && user.uid !== "" ? (
            <NavStyled mobile={mobile}>
              <li onClick={() => setMobile(false)}>
                <Link to="/about">Sobre</Link>
              </li>
              <li>
                <ProfileStyled onClick={() => setMobile(!mobile)}>
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
          ) : (
            <NavStyled mobile={mobile}>
              <li onClick={() => setMobile(false)}>
                <Link to="/about">Sobre</Link>
              </li>
            </NavStyled>
          )}
          <MobileStyled>
            {mobile ? (
              <IoMdClose onClick={() => setMobile(!mobile)} />
            ) : (
              <BiMenuAltRight onClick={() => setMobile(!mobile)} />
            )}
          </MobileStyled>
        </HeaderContainer>
      </HeaderStyled>
      <Outlet />
    </>
  );
};

export default index;

import React from "react";

import { ContainerStyled } from "../../styles/Global";

import {
  ProfileStyled,
  ProfileImageStyled,
  ProfileNameStyled,
  ProfileEmailStyled,
} from "./styles";

import { useAuthContext } from "../../context/AuthContext";

import UserImage from "/Images/user.png";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <ContainerStyled>
      <ProfileStyled>
        <ProfileImageStyled>
          <img src={UserImage} alt="Imagem dp usuário" />
        </ProfileImageStyled>
        <div>
          <ProfileNameStyled>{user?.displayName}</ProfileNameStyled>
          <ProfileEmailStyled>{user?.email}</ProfileEmailStyled>
        </div>
      </ProfileStyled>
    </ContainerStyled>
  );
};

export default Profile;

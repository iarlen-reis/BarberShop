import React from "react";

import { ContainerStyled } from "../../styles/Global";

import {
  ProfileStyled,
  ProfileImageStyled,
  ProfileNameStyled,
  ProfileEmailStyled,
  ButtonDeleteStyled,
  ServiceStyled,
} from "./styles";

import { AiOutlineDelete } from "react-icons/ai";

import { useAuthContext } from "../../context/AuthContext";
import { getUserDocuments } from "../../hooks/useFetchDocuments";

import UserImage from "/Images/user.png";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const { user, DeleteUser } = useAuthContext();

  const { schedules } = getUserDocuments();

  const pendingSchedules = schedules?.filter((schedules) =>
    schedules.status.includes("pendente"),
  ).length;

  const canceledSchedules = schedules?.filter((schedules) =>
    schedules.status.includes("cancelado"),
  ).length;

  const finishedSchedules = schedules?.filter((schedules) =>
    schedules.status.includes("finalizado"),
  ).length;

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <ContainerStyled>
      <ProfileStyled>
        <ProfileImageStyled>
          {user.photoURL ? (
            <img src={user.photoURL} alt="Imagem do usuário" />
          ) : (
            <img src={UserImage} alt="Imagem do usuário" />
          )}
        </ProfileImageStyled>
        <div>
          <ProfileNameStyled>{user?.displayName}</ProfileNameStyled>
          <ProfileEmailStyled>{user?.email}</ProfileEmailStyled>
        </div>
        <ServiceStyled>
          <h2>Agendamentos:</h2>
          <div>
            <p>Pendentes: {pendingSchedules}</p>
            <p>Cancelados: {canceledSchedules}</p>
            <p>Finalizados: {finishedSchedules}</p>
          </div>
        </ServiceStyled>
        <div>
          <ButtonDeleteStyled onClick={DeleteUser}>
            <AiOutlineDelete />
            Deletar conta
          </ButtonDeleteStyled>
        </div>
      </ProfileStyled>
    </ContainerStyled>
  );
};

export default Profile;

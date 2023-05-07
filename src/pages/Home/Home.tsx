import React, { useEffect } from "react";

import { ContainerStyled } from "../../styles/Global";

import { IoAddOutline } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";

import InfoTable from "../../components/InfoTable/InfoTable";

import {
  HomeStyled,
  WellcomeStyled,
  IntroducionStyled,
  ActionStyled,
} from "./styles";

import { useModalContext } from "../../context/ModalContext";

import Modal from "../../components/Modal/Modal";

import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { setModal } = useModalContext();

  const { user } = useAuthContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user.displayName) {
      return navigate("/login");
    }
  }, [user]);

  return (
    <ContainerStyled>
      <HomeStyled>
        <WellcomeStyled>
          <IntroducionStyled>
            <h1>Bem-vindo, {user.displayName}.</h1>
            <p>Esses são seus horários reservados.</p>
          </IntroducionStyled>
          <ActionStyled>
            <IoAddOutline onClick={setModal} />
            <FiFilter />
          </ActionStyled>
        </WellcomeStyled>
        <InfoTable />
      </HomeStyled>
      <Modal />
    </ContainerStyled>
  );
};

export default Home;

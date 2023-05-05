import React from "react";

import { ContainerStyled } from "../../styles/Global";

import { IoAddOutline } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";

import InfoTable from "../../components/InfoTable/InfoTable";

import { HomeStyled, WellcomeStyled, ActionStyled } from "./styles";

import { useModalContext } from "../../context/ModalContext";

import Modal from "../../components/Modal/Modal";

const Home = () => {
  const { setModal } = useModalContext();

  return (
    <ContainerStyled>
      <HomeStyled>
        <WellcomeStyled>
          <h1>Bem-vindo, Iarlen Reis</h1>
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

import React, { useState } from "react";

import { ContainerStyled } from "../../styles/Global";

import { IoAddOutline } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";

import InfoTable from "../../components/InfoTable/InfoTable";

import { HomeStyled, WellcomeStyled, ActionStyled } from "./styles";

const Home = () => {
  const [modal, setModal] = useState(false);

  return (
    <ContainerStyled>
      <HomeStyled>
        <WellcomeStyled>
          <h1>Bem-vindo, Iarlen Reis</h1>
          <ActionStyled>
            <IoAddOutline onClick={() => setModal(!modal)} />
            <FiFilter />
          </ActionStyled>
        </WellcomeStyled>
        <InfoTable />
      </HomeStyled>
    </ContainerStyled>
  );
};

export default Home;

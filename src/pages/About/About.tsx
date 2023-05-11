import React from "react";
import { ContainerStyled } from "../../styles/Global";
import { AboutStyled, DescriptionStyled, ImageStyled } from "./styles";

import AboutImage from "/Images/About.png";

function About() {
  return (
    <ContainerStyled>
      <AboutStyled>
        <DescriptionStyled>
          <h1>BarberShop</h1>
          <p>
            BarberShop é uma aplicação desenvolvida utilizando React com
            Typescript, estilizada com Styled-components e integrada com o
            Google Firebase. É um site para gerenciamento de barbearia, onde o
            cliente pode agendar seu horário e descrever o serviço que deseja.
          </p>
          <p>
            A aplicação possui autenticação com e-mail/senha e com uma Google,
            onde o usuário pode se conectar pelo método que preferir, a
            autenticação é feita utilizando Firebase Authentication. Para
            armazenar os agendamentos dos clientes foi utilizado o Cloud
            Firestore.
          </p>
          <p>
            Além de criar fazer seus agendamentos, o cliente pode verificar os
            serviços agendados e deletá-lo a qualquer momento. O cliente também
            pode filtrar os agendamentos através da situação dele, que pode ser:
            pendente, cancelado ou cancelado.
          </p>
        </DescriptionStyled>
        <ImageStyled>
          <img src={AboutImage} alt="uma mulher marcando a lista de tarefas" />
        </ImageStyled>
      </AboutStyled>
    </ContainerStyled>
  );
}

export default About;

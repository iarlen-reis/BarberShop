import React from "react";

import { Link } from "react-router-dom";
import {
  FooterStyled,
  FooterContainer,
  LinksContainer,
  LinkStyled,
  DevelopedByStyled,
} from "./styles";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <LinksContainer>
          <LinkStyled>
            <a
              href="https://github.com/iarlen-reis/BarberShop"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <Link to="/about">Sobre</Link>
          </LinkStyled>
          <LinkStyled>
            <a
              target="_blank"
              href="https://br.vexels.com/png-svg/previsualizar/229286/logotipo-de-rosto-de-barba-pontuda"
              rel="noreferrer"
            >
              br.vexels.com
            </a>

            <a
              href="https://firebase.google.com/docs?hl=pt-br"
              target="_blank"
              rel="noreferrer"
            >
              Firebase
            </a>
          </LinkStyled>
        </LinksContainer>
        <div>
          <DevelopedByStyled>
            By
            <a
              href="https://github.com/iarlen-reis"
              target="_blank"
              rel="noreferrer"
            >
              Iarlen Reis
            </a>
          </DevelopedByStyled>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;

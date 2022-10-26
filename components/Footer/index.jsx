import { Container } from "@mui/material";
import React from "react";
import FooterBottom from "./FooterBottom";
import { FooterArea } from "./FooterStyle";
import FooterTop from "./FooterTop";

const Footer = () => {
  return (
    <FooterArea>
      <Container>
        <FooterTop />
        <hr />
        <FooterBottom />
      </Container>
    </FooterArea>
  );
};

export default Footer;

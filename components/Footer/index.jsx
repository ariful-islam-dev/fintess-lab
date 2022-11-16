import { Container } from '@mui/material';
import React from 'react';
import { FooterArea } from '../Styles/Footer';
import FooterBottom from './FooterBottom';
import FooterTop from './FooterTop';

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

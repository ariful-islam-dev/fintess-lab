import Image from "next/image";
import React from "react";
import logoImage from "../../../public/logo.svg";
import { Logo as SiteLogo } from "../../Styles/Header";

const Logo = ({ display }) => {
  return (
    <>
      <SiteLogo
        sx={{
          display: display,
        }}
      >
        <Image src={logoImage} alt="Picture of the author" />
      </SiteLogo>
    </>
  );
};

export default Logo;

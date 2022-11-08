import Image from "next/image";
import Link from "next/link";
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
        <Link href={"/"} passHref>
          <a>
            <Image src={logoImage} alt="Picture of the author" />
          </a>
        </Link>
      </SiteLogo>
    </>
  );
};

export default Logo;

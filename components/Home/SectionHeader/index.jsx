import { ArrowForwardIos } from "@mui/icons-material";
import Link from "next/link";
import React from "react";
import { Href, SectionHeading, SectionTitle } from "../../Styles/Home";

const SectionHeader = ({ title, link }) => {
  return (
    <SectionHeading>
      <SectionTitle>{title}</SectionTitle>
      <Link href={"/products"} legacyBehavior>
        <Href>
          {link}
          <ArrowForwardIos sx={{ fontSize: "12px" }} />
        </Href>
      </Link>
    </SectionHeading>
  );
};

export default SectionHeader;

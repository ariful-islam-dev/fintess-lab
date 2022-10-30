import { ShoppingCart } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import React from "react";

const CardHeader = () => {
  return (
    <>
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
      >
        <Badge badgeContent={17} color="error">
          <ShoppingCart />
        </Badge>
      </IconButton>
    </>
  );
};

export default CardHeader;

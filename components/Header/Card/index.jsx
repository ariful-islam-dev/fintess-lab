import { ShoppingCart } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import React from "react";
import { useCart } from "../../../hooks/useCart";

const CardHeader = () => {
  const { cart } = useCart();
  return (
    <>
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
      >
        <Badge badgeContent={cart ? cart?.length : "0"} color="error">
          <ShoppingCart />
        </Badge>
      </IconButton>
    </>
  );
};

export default CardHeader;

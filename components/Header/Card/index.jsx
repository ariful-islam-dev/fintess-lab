import { ShoppingCart } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getLocalStore } from "../../../utils/storage";

const CardHeader = () => {
  const { cart } = useStoreState((state) => state.cart);
  const { addCart } = useStoreActions((state) => state.cart);
  const router = useRouter();
  useEffect(() => {
    const userCart = getLocalStore("cart");
    if (userCart && cart.length === 0) {
      addCart(userCart);
    }
  }, [cart, addCart]);
  return (
    <>
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
        onClick={() => router.push("/cart")}
      >
        <Badge
          badgeContent={cart ? (cart?.length).toString() : "0"}
          color="error"
        >
          <ShoppingCart />
        </Badge>
      </IconButton>
    </>
  );
};

export default CardHeader;

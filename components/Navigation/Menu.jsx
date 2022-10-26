import { InputButton } from "@mui/material";
import useHeader from "../../hooks/useHeader";

const MenuItems = ({ menu }) => {
  const { handleOpenNavMenu } = useHeader();
  return (
    <>
      <InputButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
      >
        {menu}
      </InputButton>
    </>
  );
};

export default MenuItems;

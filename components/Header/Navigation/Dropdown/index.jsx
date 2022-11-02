import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { alpha, styled } from "@mui/material/styles";
import { useStoreState } from "easy-peasy";
import * as React from "react";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const dropMenus = [
  "Compression Gear",
  "Workout Gloves",
  "Knee Support",
  "Elbow Support",
  "T-Shirt",
  "Head Ware",
];

export default function Dropdown({ children }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [dropdown, setDropdown] = React.useState([]);
  const open = Boolean(anchorEl);
  const menu = useStoreState((state) => state.menu);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    if (children === "men") {
      setDropdown(menu.men);
    }
    if (children === "women") {
      setDropdown(menu.women);
    }
    if (children === "accessories") {
      setDropdown(menu.accessories);
    }
    if (children === "exercise") {
      setDropdown(menu.exercise);
    }
  }, [dropdown, menu]);

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableElevation
        sx={{ color: "#374151" }}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {children}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {dropdown.map((item) => (
          <MenuItem onClick={handleClose} disableRipple key={item}>
            {item}
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
}

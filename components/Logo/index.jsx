import { Typography } from "@mui/material";

const Logo = ({ style }) => {
  return (
    <>
      <Typography
        variant="h5"
        noWrap
        component="a"
        href=""
        sx={{
          mr: 2,
          display: style,
          fontWeight: 700,
          textDecoration: "none",
          color: "#000000",
          flexGrow: 1,
        }}
      >
        FITNESS <span style={{ color: "orange" }}>LAB</span>
      </Typography>
    </>
  );
};

export default Logo;

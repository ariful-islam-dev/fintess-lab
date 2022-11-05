import { Container } from "@mui/material";
import React, { useState } from "react";
import Authentication from "../../components/Authentication/Login";

const Auth = () => {
  const [login, setLogin] = useState(false);
  const handleLogin = () => {
    setLogin(!login);
  };
  return (
    <Container>
      <Authentication login={login} handleLogin={handleLogin} />
    </Container>
  );
};

export default Auth;

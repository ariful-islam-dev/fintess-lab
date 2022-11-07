import { Container } from "@mui/material";
import React, { useState } from "react";
import Authentication from "../../components/Authentication";

const Auth = () => {
  const [login, setLogin] = useState(true);
  const handleLogin = () => {
    setLogin(!login);
  };
  return (
    <Container>
      <Authentication UserLogin={login} handleLogin={handleLogin} />
    </Container>
  );
};

export default Auth;

// import { useMutation } from "@apollo/react-hooks";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import * as React from "react";
import { useForm } from "react-hook-form";
import Login from "./Login";
import Signup from "./SignUp.jsx";

const Authentication = ({ UserLogin, handleLogin }) => {
  const { register: reg, handleSubmit, reset, formState, watch } = useForm();
  const { errors } = formState;
  const router = useRouter();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {UserLogin ? (
        <Login handleLogin={handleLogin} />
      ) : (
        <Signup handleLogin={handleLogin} />
      )}
    </Box>
  );
};

export default Authentication;

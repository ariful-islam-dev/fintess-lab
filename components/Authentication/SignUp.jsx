import { gql, useMutation } from "@apollo/client";
// import { useMutation } from "@apollo/react-hooks";
import { Card, CardContent } from "@mui/material";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { useRouter } from "next/router";
import * as React from "react";
import { useForm } from "react-hook-form";

import {
  AuthHeader,
  AuthHeading,
  AuthTitle,
  ErrorMessage,
  Input,
  InputBox,
  Label,
} from "../Styles/Auth";
import { ButtonMaster } from "../Styles/reusable";

const REG_USER = gql`
  mutation Register($username: String!, $password: String!, $email: String!) {
    register(
      input: { username: $username, email: $email, password: $password }
    ) {
      jwt
      user {
        username
        email
        id
      }
    }
  }
`;

const Signup = ({ UserLogin, handleLogin }) => {
  const { register: reg, handleSubmit, reset, formState, watch } = useForm();
  const { errors } = formState;
  const router = useRouter();

  const [register, { data, loading, error }] = useMutation(REG_USER);

  const onSubmit = (userData) => {
    reg({
      variables: {
        username: userData.username,
        password: userData.password,
        email: userData.email,
      },
    });

    if (!error && data) {
      const {
        jwt,
        user: { id, email, username },
      } = data?.register;
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: id,
          username: username,
          email: email,
          accessToken: jwt,
        })
      );
      router.push("/");
    }
  };
  return (
    <Card
      sx={{
        my: 5,
        padding: 2,
      }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <AuthHeader>
        <AuthHeading variant="h4" component={"h4"}>
          Sign Up and Start Shopping
        </AuthHeading>
        <AuthTitle variant="title" component={"body2"}>
          Or{" "}
          <Button sx={{ color: "red" }} onClick={handleLogin}>
            Login
          </Button>
        </AuthTitle>
      </AuthHeader>
      <CardContent>
        <InputBox>
          <Label>Username</Label>
          <Input type="text" {...reg("username", { required: true })} />
          {errors.username && <ErrorMessage>Username is Required</ErrorMessage>}
        </InputBox>

        <InputBox>
          <Label>Email</Label>
          <Input
            {...reg("email", {
              required: "required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && <ErrorMessage>{errors.email?.message}</ErrorMessage>}
        </InputBox>

        <InputBox>
          <Label>Password</Label>
          <Input
            {...reg("password", {
              required: "required",
              minLength: {
                value: 8,
                message: "min length is 8",
              },
            })}
            type="password"
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </InputBox>

        <InputBox>
          <Label>Confirm Password</Label>
          <Input
            type="password"
            {...reg("confirmPassword", {
              required: true,
              validate: (val) => {
                if (watch("password") != val) {
                  return "Your passwords do no match";
                }
              },
            })}
          />
          {errors.confirmPassword && (
            <ErrorMessage variant="body2">
              {errors.confirmPassword?.message}
            </ErrorMessage>
          )}
        </InputBox>
      </CardContent>
      <CardActions sx={{ display: "flex", flexDirection: "column" }}>
        <ButtonMaster sx={{ width: "100%" }} type="submit">
          Sign Up
        </ButtonMaster>
      </CardActions>
    </Card>
  );
};

export default Signup;

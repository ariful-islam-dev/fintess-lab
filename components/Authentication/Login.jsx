import { gql, useMutation } from "@apollo/client";

// import { useMutation } from "@apollo/react-hooks";
import { Card, CardContent, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
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

const LOGIN_USER = gql`
  mutation Login($username: String!, $password: String!) {
    login(input: { identifier: $username, password: $password }) {
      jwt
      user {
        username
        email
        id
      }
    }
  }
`;

const Login = ({ handleLogin }) => {
  const { register: reg, handleSubmit, reset, formState, watch } = useForm();
  const { errors } = formState;
  const router = useRouter();

  const [login, { data, loading, error }] = useMutation(LOGIN_USER);

  const onSubmit = (userData) => {
    if (UserLogin) {
      login({
        variables: {
          username: userData.username,
          password: userData.password,
        },
      });

      if (!error && data) {
        const {
          jwt,
          user: { id, email, username },
        } = data?.login;
        localStorage.setItem(
          "user",
          JSON.stringify({
            id: id,
            username: username,
            email: email,
            accessToken: jwt,
          })
        );
      }
    }

    router.push("/");
  };
  return (
    <>
      <Card
        sx={{
          my: 5,
          padding: 2,
          width: { md: "70%", xs: "100%" },
        }}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <AuthHeader>
          <AuthHeading variant="h4" component={"h4"}>
            Login into your account
          </AuthHeading>
          <AuthTitle variant="title" component={"body2"}>
            Or{" "}
            <Button sx={{ color: "red" }} onClick={handleLogin}>
              Create An Account
            </Button>
          </AuthTitle>
        </AuthHeader>
        <CardContent>
          <InputBox>
            <Label>Username</Label>
            <Input type="text" {...reg("username", { required: true })} />
            {errors.username && (
              <ErrorMessage>Username is Required</ErrorMessage>
            )}
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
        </CardContent>
        <CardActions sx={{ display: "flex", flexDirection: "column" }}>
          <ButtonMaster sx={{ width: "100%" }} type="submit">
            Login
          </ButtonMaster>

          <Typography>Or</Typography>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <ButtonMaster sx={{ width: "40%" }} btn="light">
              Google
            </ButtonMaster>
            <ButtonMaster sx={{ width: "40%" }} btn="light">
              Facebook
            </ButtonMaster>
          </Stack>
        </CardActions>
      </Card>
    </>
  );
};

export default Login;

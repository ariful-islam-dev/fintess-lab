import { useMutation } from "@apollo/client";

// import { useMutation } from "@apollo/react-hooks";
import { Card, CardContent, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { LOGIN_USER } from "../Apollo/mutation";

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

const Login = ({ handleLogin }) => {
  const { register: reg, handleSubmit, reset, formState, watch } = useForm();
  const { errors } = formState;
  const router = useRouter();
  const authAction = useStoreActions((action) => action.auth.authStore);
  const { cart } = useStoreState((state) => state.cart);

  const [login, { data, loading, error }] = useMutation(LOGIN_USER);

  const onSubmit = (userData) => {
    login({
      variables: {
        username: userData.username,
        password: userData.password,
      },
    });

    if (!error && data) {
      authAction(data?.login);
      if (cart.length > 0) {
        router.push("/cart");
      } else {
        router.push("/products");
      }
    }
  };
  return (
    <>
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

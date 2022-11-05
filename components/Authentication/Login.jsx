import { Box, Card, CardContent, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {
  AuthHeader,
  AuthHeading,
  AuthTitle,
  Input,
  InputBox,
  Label,
} from "../Styles/Auth";
import { ButtonMaster } from "../Styles/reusable";

export default function Authentication({ login, handleLogin }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          my: 5,
          padding: 2,
          width: { md: "70%", xs: "100%" },
        }}
        component="form"
      >
        <AuthHeader>
          <AuthHeading variant="h4" component={"h4"}>
            {login ? "Login into your account " : "Sign Up and Start Shopping"}
          </AuthHeading>
          <AuthTitle variant="title" component={"body2"}>
            Or{" "}
            <Button sx={{ color: "red" }} onClick={handleLogin}>
              {login ? "Create An Account" : "Login"}
            </Button>
          </AuthTitle>
        </AuthHeader>
        <CardContent>
          <InputBox>
            <Label>Username</Label>
            <Input type={"text"} placeholder="john1234" />
          </InputBox>
          {login || (
            <>
              <InputBox>
                <Label>Email</Label>
                <Input type={"email"} placeholder="example@example.com" />
              </InputBox>
              <InputBox>
                <Label>Password</Label>
                <Input type={"password"} placeholder="********" />
              </InputBox>
            </>
          )}
          <InputBox>
            <Label>Confirm Password</Label>
            <Input type={"password"} placeholder="********" />
          </InputBox>
        </CardContent>
        <CardActions sx={{ display: "flex", flexDirection: "column" }}>
          <ButtonMaster sx={{ width: "100%" }}>
            {login ? "Login" : "Sign Up"}
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
    </Box>
  );
}

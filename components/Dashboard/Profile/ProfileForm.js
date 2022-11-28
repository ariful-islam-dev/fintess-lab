// import { useMutation } from "@apollo/react-hooks";
import { useMutation } from "@apollo/client";
import { CardContent, Dialog, DialogTitle } from "@mui/material";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useRouter } from "next/router";
import * as React from "react";
import { useForm } from "react-hook-form";
import { USER_PROFILE } from "../../Apollo/mutation";
import { ErrorMessage, Input, InputBox, Label } from "../../Styles/Auth";
import { Card } from "../../Styles/Home";
import { ButtonMaster } from "../../Styles/reusable";

const Profile = ({ open, handleClose }) => {
  const{auth}=useStoreState(state=> state.auth)
  const { register: reg, handleSubmit, reset, formState, watch } = useForm();
  const { errors } = formState;
  const router = useRouter();

  const { cart } = useStoreState((state) => state.cart);
  const authAction = useStoreActions((state) => state.auth.authStore);

  const [createProfile, {data, loading, error}]=useMutation(USER_PROFILE)

  const onSubmit = (userData) => {
    createProfile({

      variables: {
        name: userData.name,
        phone:userData.phone,
        user: auth.user.id,
        publishedAt: new Date()
      }
    })
  
   
  };
console.log(data)
  return (
    <Dialog open={open} onClose={handleClose}>
      <Card component={'form'} onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle id="alert-dialog-title">Create Your Profile</DialogTitle>
        <CardContent>
        <InputBox>
          <Label>Full Name</Label>
          <Input type="text" {...reg("name", { required: true })} />
          {errors.name && <ErrorMessage>Name is Required</ErrorMessage>}
        </InputBox>
        <InputBox>
          <Label>Phone Number</Label>
          <Input type="tel" {...reg("phone", { required: true })} />
          {errors.phone && <ErrorMessage>Phone Number is Required</ErrorMessage>}
        </InputBox>
        </CardContent>
        <ButtonMaster type="submit" onClick={handleClose}>Submit</ButtonMaster>
      </Card>
    </Dialog>
  );
};

export default Profile;

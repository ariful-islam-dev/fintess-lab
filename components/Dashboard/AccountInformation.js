import { useQuery } from "@apollo/client";
import { FileUpload } from "@mui/icons-material";
import EditIcon from '@mui/icons-material/Edit';
import { TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useStoreState } from "easy-peasy";
import React from "react";
import useModal from "../../hooks/useModal";
import { GET_USER_PROFILE } from "../Apollo/query";
import { SectionHeading } from "../Styles/Home";
import { Box1, ButtonMaster, Heading3 } from "../Styles/reusable";
import Profile from "./Profile/ProfileForm";

export default function AccountInformation() {
  const {auth}=useStoreState(state=> state.auth)
  const {handleClickOpen, open, handleClose}=useModal()
  const {data, loading}=useQuery(GET_USER_PROFILE, {
    variables: {id: auth?.user?.id}
  })


  return (
    <Box1>
      <SectionHeading>
      <Heading3 border>{data ? data?.usersPermissionsUser.data.attributes.profile.data.attributes.name: "Account information"}</Heading3>
      <ButtonMaster onClick={handleClickOpen} btn="light" ><EditIcon/></ButtonMaster>
      
        <Profile open={open} handleClose={handleClose}/>
     
      </SectionHeading>
      <Stack rowGap={3}>
        <Stack direction="row" spacing={3}>
          <FileUpload></FileUpload>
        </Stack>
        <Stack direction="row" spacing={3}>
          <TextField
            sx={{
              width: "50%",
              background: "#fff",
              border: "1px solid #E5E7EB",
              borderRadius: "10px",
            }}
            id="outlined-basic"
            disabled
            variant="outlined"
            value={data?.usersPermissionsUser.data.attributes.profile.data.attributes.name}
          />
        
        </Stack>
        <Stack direction="row" spacing={3}>
          <TextField
            sx={{
              width: "50%",
              background: "#fff",
              border: "1px solid #E5E7EB",
              borderRadius: "10px",
            }}
            id="outlined-basic"
            disabled
            variant="outlined"
            value={data?.usersPermissionsUser.data.attributes.profile.data.attributes.phone}
          />
          <TextField
            sx={{
              width: "50%",
              background: "#fff",
              border: "1px solid #E5E7EB",
              borderRadius: "10px",
            }}
            id="outlined-basic"
            disabled
            variant="outlined"
            value={data?.usersPermissionsUser.data.attributes.email}
          />
        </Stack>
      </Stack>
    </Box1>
  );
}

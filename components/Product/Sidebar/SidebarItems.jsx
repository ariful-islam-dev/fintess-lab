import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";

const SidebarItems = ({ data }) => {
  return (
    <FormGroup>
      {data?.map((item) => (
        <FormControlLabel
          key={item.id}
          control={<Checkbox />}
          label={item?.attributes?.name || item?.attributes?.period}
        />
      ))}
    </FormGroup>
  );
};

export default SidebarItems;

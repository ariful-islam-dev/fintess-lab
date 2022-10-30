import { List, ListItem, ListItemText } from "@mui/material";
import * as React from "react";

export default function Widget({ item }) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List
      sx={{ width: "100%" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {Object.values(item)[0].map((list) => (
        <ListItem disablePadding key={list.name}>
          <ListItemText primary={list.name} />
        </ListItem>
      ))}
    </List>
  );
}

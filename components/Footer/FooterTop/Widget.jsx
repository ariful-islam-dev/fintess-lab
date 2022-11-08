import { ListItem } from "@mui/material";
import List from "@mui/material/List";
import * as React from "react";
import { Anchor } from "../../Styles/Footer";

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
        <ListItem key={list.name} sx={{ padding: " 0" }}>
          <Anchor href={list.path} passHref>
            <a> {list.name}</a>
          </Anchor>
        </ListItem>
      ))}
    </List>
  );
}

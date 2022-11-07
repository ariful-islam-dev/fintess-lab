import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import { Container, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import * as React from "react";
import sub1 from "../../../public/images/image7.png";
import sub2 from "../../../public/images/image8.png";
import product from "../../../public/images/mainProduct.png";
// import sub3 from '../../../public/images/image 7.png';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const mainProduct = {
  backgroundImage: `url(${product.src})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundColor: "black",
  backgroundSize: "cover",
  height: 500,
  margin: 0,
};

const subProduct1 = {
  backgroundImage: `url(${sub1.src})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundColor: "black",
  backgroundSize: "cover",
  height: 192,
  margin: 0,
};
const subProduct2 = {
  backgroundImage: `url(${sub2.src})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundColor: "black",
  backgroundSize: "cover",
  height: 170,

  margin: 0,
};

const ProductDetails = ({ data }) => {
  const [value, setValue] = React.useState(2);
  return (
    <Container sx={{ my: 10 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid sx={{ pl: 2 }} xs={12} md={12}>
                <Item sx={{ ...mainProduct }}></Item>
              </Grid>
              <Grid item xs={4} md={4}>
                <Item sx={{ ...subProduct2 }}></Item>
              </Grid>
              <Grid item xs={4} md={4}>
                <Item sx={{ ...subProduct2 }}></Item>
              </Grid>
              <Grid item xs={4} md={4}>
                <Item sx={{ ...subProduct2 }}></Item>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6} md={6}>
            <Item>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <ListItem>
                  <Box>
                    <Typography>Addidas full body </Typography>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography>
                        <Rating
                          sx={{ pr: 3 }}
                          name="read-only"
                          value={value}
                          readOnly
                        />
                      </Typography>
                      <Typography>Brand: </Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography>Price: </Typography>
                      <Typography>You save: </Typography>
                    </Box>
                  </Box>
                </ListItem>
                <Divider variant="inset" component="li" />

                <ListItem>
                  <Typography>Color</Typography>
                  <ListItemText primary="Work" secondary="Jan 7, 2014" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <BeachAccessIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Vacation" secondary="July 20, 2014" />
                </ListItem>
              </List>
            </Item>
          </Grid>
        </Grid>
      </Box>
      {/* #####################################
                        COMMENTS
      #######################################*/}
      <Box sx={{ flexGrow: 1, my: 5, bgcolor: "#ffff" }}>
        <Typography>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
          vero atque quaerat nulla veritatis ipsam error necessitatibus? Est
          quod ex ratione vel reiciendis libero animi quidem expedita, qui
          maiores? Quaerat commodi magnam repellat cum necessitatibus suscipit
          dolores quidem pariatur amet.
        </Typography>
        <Divider component="li" />
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Rating
                    sx={{ pr: 3 }}
                    name="read-only"
                    value={value}
                    readOnly
                  />
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};
export default ProductDetails;

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import { useStoreActions } from "easy-peasy";
import Image from "next/image";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Card, CardImageBox } from "../Styles/Home";

import { ButtonMaster } from "../Styles/reusable";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "start",
  color: theme.palette.text.secondary,
}));

const ProductsDetails = ({ data }) => {
  const [quantity, setQuantity] = useState(1);
  const { addCart } = useStoreActions((action) => action.cart);

  const [thumbnail, setThumbnail] = useState(
    data?.attributes.thumbnails?.data[0]?.attributes.url
  );
  const info = data?.attributes;
  const subImage = data?.attributes.thumbnails?.data;

  const handleLocalStorageCart = () => {
    const newProduct = {
      productId: data.id,
      title: data?.attributes?.title,
      thumbnail: thumbnail,
      quantity: quantity,
      price: data.attributes?.discount_price
        ? data.attributes?.discount_price * quantity
        : data.attributes?.price * quantity,
    };

    addCart(newProduct);
  };

  const handleIncrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleDecrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  return (
    <Box sx={{ my: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <CardImageBox>
            <Image
              src={thumbnail}
              alt="Card Image"
              // layout="fill"
              height={500}
              width={450}
            />
          </CardImageBox>

          <Card sx={{ mt: 2 }}>
            <Stack direction="row" mt={1} spacing={1}>
              {subImage?.map((item) => (
                <Box key={item.id}>
                  <Image
                    src={item.attributes.url}
                    alt="Card Image"
                    width="100%"
                    height={"100vh"}
                    onClick={() => setThumbnail(item.attributes.url)}
                  />
                </Box>
              ))}
            </Stack>
          </Card>
        </Grid>
        {/*########################################## 
              RIGHT SECTION
          ###########################################*/}
        <Grid item xs={12} md={6}>
          <Stack sx={{ flexGrow: 1, mb: 6 }}>
            <Typography variant="h6">{data?.attributes.title}</Typography>
            <Stack
              direction="row"
              spacing={1}
              divider={<Divider orientation="vertical" flexItem />}
            >
              <Rating sx={{ pr: 3 }} name="read-only" readOnly />

              <Typography>
                Brand: {data?.attributes.brand.data?.attributes?.name}{" "}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={3}>
              {info?.discount_price && (
                <Typography>Present Price:{info?.discount_price} </Typography>
              )}
              <Typography>Price:{info?.price} </Typography>
              {info?.discount_price && (
                <Typography>
                  You save:
                  {info?.discount_price
                    ? `${`${(info?.price - info?.discount_price).toFixed(
                        2
                      )} ( ${Math.floor(
                        ((info?.price - info?.discount_price) / info?.price) *
                          100
                      )}) % `}`
                    : `${info?.price}`}
                </Typography>
              )}
            </Stack>
          </Stack>
          <Divider />

          {/* COLOR */}
          {data?.attributes.colors?.data?.length !== 0 && (
            <Stack sx={{ flexGrow: 1, my: 6 }}>
              <Grid container spacing={2}>
                <Grid xs={2}>
                  <Typography variant="h5">Color </Typography>
                </Grid>
                <Grid xs={10}>
                  <Stack direction="row" spacing={3}>
                    {data?.attributes.colors.data.map((cl) => (
                      <Box
                        key={cl.id}
                        sx={{
                          background: `${cl.attributes.name?.toLowerCase()}`,
                          width: "20px",
                          height: "20px",
                        }}
                      />
                    ))}
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
          )}
          <Divider />
          {/* SIZE */}
          {data?.attributes?.sizes?.data?.length !== 0 && (
            <Stack sx={{ flexGrow: 1, my: 6 }}>
              <Grid container spacing={2}>
                <Grid xs={2}>
                  <Typography>Size </Typography>
                </Grid>
                <Grid xs={10}>
                  <Stack direction="row" spacing={3}>
                    {data?.attributes?.sizes?.data?.map((size) => (
                      <Box
                        key={size.id}
                        sx={{
                          padding: "5px",
                          borderRadius: " 5px",
                          boxShadow: " 1px 1px 1px #ccc",
                        }}
                      >
                        {size.attributes.kind}
                      </Box>
                    ))}
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
          )}
          <Divider />
          {/* METARIAL */}
          {data?.attributes?.metarial?.data && (
            <Stack sx={{ my: 6 }}>
              <Grid container spacing={2}>
                <Grid xs={2}>
                  <Typography variant="h5">Material </Typography>
                </Grid>
                <Grid xs={10}>
                  <Stack direction="row" spacing={3}>
                    <Box
                      sx={{
                        background: `#ddd`,
                        p: 1,
                        borderRadius: 1,
                      }}
                      color="primary"
                    >
                      {info.metarial.data.attributes.name}
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
          )}
          <Divider />
          {/* QUANTITY */}
          <Stack
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography variant="h5">Quantity </Typography>
              </Grid>
              <Grid item xs={8}>
                <Stack direction="row" spacing={1}>
                  <ButtonMaster
                    btn="light"
                    cart="cart"
                    onClick={handleDecrementQuantity}
                    sx={{ cursor: "pointer" }}
                  >
                    <RemoveIcon />
                  </ButtonMaster>
                  <Typography variant="h6">{quantity}</Typography>
                  <ButtonMaster
                    btn="light"
                    cart="cart"
                    onClick={handleIncrementQuantity}
                    sx={{ cursor: "pointer" }}
                  >
                    <AddIcon />
                  </ButtonMaster>
                </Stack>
              </Grid>
            </Grid>
            <Stack direction="row" marginY={2} spacing={3}>
              <ButtonMaster>Buy now</ButtonMaster>
              <ButtonMaster btn="light" onClick={handleLocalStorageCart}>
                Add to Cart
              </ButtonMaster>
            </Stack>
          </Stack>
          <Divider />
          <Stack>
            {info?.warranty?.data && (
              <Stack
                sz={{
                  mt: 2,
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Typography variant="h5">Warranty In formation:</Typography>
                <Box
                  sx={{
                    background: `#ccc`,
                    borderRadius: "5px",
                    m: 2,
                  }}
                  color="primary"
                >
                  {info?.warranty.data.attributes.period.toUpperCase()}
                </Box>
              </Stack>
            )}
            {info?.categories.data?.length !== 0 && (
              <Stack
                sx={{
                  mt: 2,
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Typography variant="h5">Categories </Typography>

                <Stack direction="row" spacing={3}>
                  {info?.categories.data?.map((cat) => (
                    <Box
                      key={cat.id}
                      sx={{
                        background: `#ccc`,
                        borderRadius: "5px",
                        m: 2,
                      }}
                    >
                      {cat.attributes.Type}
                    </Box>
                  ))}
                </Stack>
              </Stack>
            )}
          </Stack>
        </Grid>
      </Grid>

      {/* #####################################
                        COMMENTS
      #######################################*/}
      <Box sx={{ flexGrow: 1, my: 5, bgcolor: "#ffff", p: 4, borderRadius: 2 }}>
        <Box sx={{ py: 6 }}>
          <Typography variant="h4">Spesification</Typography>
          <ReactMarkdown>{data?.attributes.description}</ReactMarkdown>
        </Box>
        <Divider />

        <List sx={{ width: "100%", bgcolor: "background.paper", py: 6 }}>
          <Typography variant="h4">Review</Typography>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <Stack spacing={1}>
              <Typography>Mohammad Shariar Parvez </Typography>
              <Rating sx={{ pr: 3 }} name="read-only" readOnly />

              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda consequuntur iusto nobis libero beatae dignissimos
                ullam temporibus est harum commodi.{" "}
              </Typography>
            </Stack>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default ProductsDetails;

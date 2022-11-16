import { Box, Rating, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../../hooks/useCart";

import AddIcon from "@mui/icons-material/Add";
import {
  Card,
  CardImageBox,
  CardPrice,
  CardPricingSection,
  CardTitle,
  StyledCardContent,
} from "../../Styles/Home";
import { ButtonMaster } from "../../Styles/reusable";
const ProductCard = ({ item, popular }) => {
  const off = Number.parseFloat(
    (item.attributes.price - item.attributes.discount_price) /
      item.attributes.price
  );
  const { handleCart, cart } = useCart();

  const handleAddLocalStorage = (item) => {
    handleCart(item);
  };

  const product = cart?.find((cat) => cat.id === item.id);

  return (
    <div>
      <Card>
        <CardImageBox>
          <Image
            src={item?.attributes?.thumbnails?.data[0]?.attributes.url}
            alt="Card Image"
            width={500}
            height={500}
          />

          {item?.attributes.discount_price && (
            <ButtonMaster
              sx={{
                position: "absolute",
                top: "10px",
                left: "10px",
              }}
              off="true"
            >
              {Math.floor(off * 100)} % off
            </ButtonMaster>
          )}
        </CardImageBox>
        <StyledCardContent>
          <CardTitle variant={"h4"}>
            <Link href={`/products/${item.id}`} passHref legacyBehavior>
              <a>{item.attributes.title.slice(0, 15)}</a>
            </Link>
          </CardTitle>
          {popular && (
            <Typography variant="body2">
              <Rating name="no-value" value={null} />
            </Typography>
          )}
          <CardPricingSection>
            {item?.attributes?.discount_price ? (
              <Typography variant="body2" sx={{ display: "flex" }}>
                <CardPrice>
                  $
                  {Number.parseFloat(item.attributes.discount_price).toFixed(2)}
                </CardPrice>{" "}
                <CardPrice
                  sx={{
                    fontSize: "13px",
                    lineHeight: "25px",
                    paddingLeft: "5px",
                    color: "gray",
                  }}
                >
                  <s>${Number.parseFloat(item.attributes.price).toFixed(2)}</s>
                </CardPrice>
              </Typography>
            ) : (
              <CardPrice>
                ${Number.parseFloat(item.attributes.price).toFixed(2)}
              </CardPrice>
            )}

            {product ? (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <ButtonMaster
                  btn="light"
                  cart={"cart"}
                  onClick={() => handleAddLocalStorage(item)}
                >
                  <AddIcon />
                </ButtonMaster>
                <Typography>{product?.quantity}</Typography>
                <ButtonMaster
                  btn="light"
                  cart={"cart"}
                  onClick={() => handleAddLocalStorage(item)}
                >
                  <AddIcon />
                </ButtonMaster>
              </Box>
            ) : (
              <Box>
                <ButtonMaster
                  btn="light"
                  cart={"cart"}
                  onClick={() => handleAddLocalStorage(item)}
                >
                  <AddIcon />
                </ButtonMaster>
              </Box>
            )}
          </CardPricingSection>
        </StyledCardContent>
      </Card>
    </div>
  );
};

export default ProductCard;

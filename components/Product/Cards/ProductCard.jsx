import { StarBorder } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

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

  return (
    <div>
      <Card>
        <CardImageBox>
          <Image
            src={item.attributes.thumbnails.data[0].attributes.url}
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
            <Link href={`/products/${item.id}`} passHref>
              <a>{item.attributes.title.slice(0, 15)}</a>
            </Link>
          </CardTitle>
          {popular && (
            <Typography variant="body2">
              <StarBorder />
              <StarBorder />
              <StarBorder />
              <StarBorder />
              <StarBorder />
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

            <ButtonMaster btn="light" plus>
              <AddIcon />
            </ButtonMaster>
          </CardPricingSection>
        </StyledCardContent>
      </Card>
    </div>
  );
};

export default ProductCard;

import Link from "next/link";

import cardImg from "../../../public/images/image 2.jpg";
import {
  Card,
  CardImage,
  CardImageBox,
  CardPrice,
  CardPricingSection,
  CardTitle,
  StyledCardContent,
} from "../../Styles/Home";
import { ButtonMaster } from "../../Styles/reusable";

export default function ProductCard({ item }) {
  return (
    <Card>
      <CardImageBox>
        <CardImage
          src={cardImg.src}
          alt="Card Image"
          width={500}
          height={500}
        />
        <ButtonMaster
          sx={{
            position: "absolute",
            top: "10px",
            left: "10px",
          }}
          off="true"
        >
          {(
            ((item.attributes.price - item.attributes.discount_price) /
              item.attributes.price) *
            100
          ).toFixed(2)}
          %OFF
        </ButtonMaster>
      </CardImageBox>
      <StyledCardContent>
        <CardTitle variant={"h4"}>
          <Link href={`/products/${item.id}`} passHref>
            <a>{item.attributes.title.slice(0, 15)}</a>
          </Link>
        </CardTitle>
        <CardPricingSection>
          <CardPrice>{item.attributes.price}</CardPrice>
          <ButtonMaster btn="light">+</ButtonMaster>
        </CardPricingSection>
      </StyledCardContent>
    </Card>
  );
}

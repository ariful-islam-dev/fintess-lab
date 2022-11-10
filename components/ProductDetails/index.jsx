import React from "react";

const ProductsDetails = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>Product Data Id {data.id}</h1>
    </div>
  );
};

export default ProductsDetails;

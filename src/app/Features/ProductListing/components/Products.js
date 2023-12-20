import React, { useEffect } from "react";
import Product from "./Product";
import useFetchProducts from "../hooks/useFetchProducts";
function Products() {
  const { productData } = useFetchProducts();
  return (
    <div className=" flex justify-evenly gap-2  flex-wrap w-full   mt-6">
      {productData?.map(({ id, image, name, price, stars }) => (
        <Product
          key={id}
          id={id}
          image={image}
          name={name}
          price={price}
          stars={stars}
        />
      ))}
    </div>
  );
}

export default Products;

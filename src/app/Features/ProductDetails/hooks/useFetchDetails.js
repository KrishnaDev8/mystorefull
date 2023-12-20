import React, { useEffect, useState } from "react";
import { data } from "@/app/Data/Data";
function useFetchDetails(productId) {
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    setProductDetails(
      data?.filter((product) => product.id === Number(productId))
    );
  }, []);

  return { productDetails };
}

export default useFetchDetails;

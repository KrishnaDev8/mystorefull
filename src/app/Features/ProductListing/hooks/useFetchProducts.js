import React, { useEffect, useState } from "react";
import { data } from "@/app/Data/Data";
function useFetchProducts() {
  const [productData, setProductData] = useState();
  useEffect(() => {
    setProductData(data);
  }, []);
  return { productData };
}

export default useFetchProducts;

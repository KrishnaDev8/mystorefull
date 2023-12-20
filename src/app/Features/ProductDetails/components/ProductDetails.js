import React from "react";
import useFetchDetails from "../hooks/useFetchDetails";
import Image from "next/image";
import clsx from "clsx";
function ProductDetails({ productId }) {
  const { productDetails } = useFetchDetails(productId);
  return (
    <div className="h-full flex flex-col   mt-6">
      <div className="  flex  gap-5  ">
        <Image
          src={productDetails[0]?.image}
          height={500}
          width={500}
          alt={`image for ${productDetails[0]?.name}`}
        />
        <div className="flex flex-col gap-5 ">
          <h1 className=" text-3xl font-bold">{productDetails[0]?.name}</h1>
          <div className="flex items-center gap-2 ">
            <span
              className={clsx(
                "   flex justify-center font-medium text-white rounded-lg flex-nowrap whitespace-nowrap px-3",
                productDetails[0]?.stars <= 2
                  ? " bg-yellow-500   "
                  : productDetails[0]?.stars > 3
                  ? "bg-[#267E3E]"
                  : " bg-[#24963F]"
              )}
            >
              {productDetails[0]?.stars} &#9733;
            </span>
            <span className=" text-sm text-gray-400">
              ({productDetails[0]?.orders})
            </span>
          </div>

          <div className="flex flex-col">
            <h1 className="">Description :</h1>
            <p className="leading-5 text-sm text-gray-400">
              {productDetails[0]?.desc}
            </p>
          </div>
        </div>
      </div>
      <div className=" w-[500px] flex justify-between p-5">
        <span className=" text-lg font-medium">
          &#8377;{productDetails[0]?.price}
        </span>
        <button
          // onClick={handleAddItem}
          className=" text-sm bg-primary-red text-white px-5 py-1 rounded-lg font-medium "
        >
          Add +
        </button>
      </div>
      <div className="mt-5">
        <h1>Nutrition (per serving)</h1>
        {productDetails[0]?.nutrition?.map((list) => (
          <li
            className="leading-5 text-sm text-gray-500"
            dangerouslySetInnerHTML={{ __html: list }}
          ></li>
        ))}
      </div>
    </div>
  );
}

export default ProductDetails;

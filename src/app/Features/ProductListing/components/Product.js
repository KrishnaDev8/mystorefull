import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
function Product({ name, price, image, stars, id }) {
  const router = useRouter();
  function handleNavigateToDetailsPage(e) {
    e.stopPropagation();
    router.push(`/productdetails/${id}`);
  }
  function handleAddItem(e) {
    e.stopPropagation();
  }
  return (
    <div
      onClick={handleNavigateToDetailsPage}
      className=" shadow-lg rounded-lg cursor-pointer"
    >
      <Image
        className=" hover:animate-pulse"
        src={image}
        height={300}
        width={300}
        alt={`showing image of ${name}`}
      />
      <div className="p-2 flex justify-between ">
        <div className="flex flex-col">
          <h2>{name}</h2>
          <h2 className=" text-sm text-gray-450"> &#8377; {price}</h2>
        </div>

        <div className="flex flex-col gap-4 items-end">
          <span className="text-[green] ">{stars}</span>
          <button
            onClick={handleAddItem}
            className=" text-sm bg-primary-red text-white px-2 py-1 rounded-lg font-medium"
          >
            Add +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;

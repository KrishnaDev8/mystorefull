"use client";
import React from "react";
import { useRouter } from "next/navigation";
function Page({ params }) {
  const router = useRouter();
  console.log(params.productId);
  return (
    <div className=" h-screen">
      <ProductDetails productId={params?.productId} />
    </div>
  );
}

export default Page;

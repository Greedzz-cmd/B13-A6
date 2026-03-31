import React, { use } from "react";
import ProductCard from "./productCard/ProductCard";

const ProductsAndCarts = ({ productsPromise }) => {
  const data = use(productsPromise);
  console.log(data.products);
  return (
    <div className="text-center my-30 container mx-auto">
      <h2 className="text-5xl font-bold">Premium Digital Tools</h2>
      <p className="text-[#627382] mt-4 mb-5">
        Choose from our curated collection of premium digital products designed{" "}
        <br />
        to boost your productivity and creativity.
      </p>
      <div className="flex gap-4 justify-center mb-10">
        <button className="btn btn-primary">Products</button>
        <button className="">Cart (2)</button>
      </div>
      <ProductCard products={data.products}></ProductCard>
    </div>
  );
};

export default ProductsAndCarts;

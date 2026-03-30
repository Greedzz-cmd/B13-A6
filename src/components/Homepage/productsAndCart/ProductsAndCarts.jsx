import React from "react";

const ProductsAndCarts = () => {
  return (
    <div className="text-center my-30">
      <h2 className="text-5xl font-bold">Premium Digital Tools</h2>
      <p className="text-[#627382] mt-4 mb-5">
        Choose from our curated collection of premium digital products designed{" "}
        <br />
        to boost your productivity and creativity.
      </p>
      <div className="flex gap-4 justify-center">
        <button className="btn btn-primary">Products</button>
        <button className="">Cart (2)</button>
      </div>
    </div>
  );
};

export default ProductsAndCarts;

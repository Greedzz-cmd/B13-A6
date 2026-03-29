import React from "react";

const ProductsAndCarts = () => {
  return (
    <div className="text-center">
      <h2>Premium Digital Tools</h2>
      <p>
        Choose from our curated collection of premium digital products designed{" "}
        <br />
        to boost your productivity and creativity.
      </p>
      <div className="flex gap-4 justify-center">
        <button className="">Products</button>
        <button className="">Cart (2)</button>
      </div>
    </div>
  );
};

export default ProductsAndCarts;

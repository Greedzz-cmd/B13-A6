import React, { use, useState } from "react";
import ProductCards from "./productCards/ProductCards";
import CartCards from "./cartCards/CartCards";

const ProductsAndCarts = ({
  productsPromise,
  boughtProducts,
  setBoughtProducts,
  activeTab,
  setActiveTab,
}) => {
  const data = use(productsPromise);

  return (
    <div className="text-center my-30 container mx-auto min-h-screen">
      <h2 className="text-5xl font-bold">Premium Digital Tools</h2>
      <p className="text-[#627382] mt-4 mb-5">
        Choose from our curated collection of premium digital products designed{" "}
        <br />
        to boost your productivity and creativity.
      </p>
      <div className="flex gap-4 justify-center mb-10">
        <div className="flex gap-4 justify-center border border-[#627382] rounded-full">
          <button
            onClick={() => setActiveTab("products")}
            className={
              activeTab === "products"
                ? "btn btn-primary transition-all duration-300 m-0.5"
                : "ml-4"
            }
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab("cart")}
            className={
              activeTab === "cart"
                ? "btn btn-primary transition-all duration-300 m-0.5"
                : "mr-4"
            }
          >
            Cart ({boughtProducts.length})
          </button>
        </div>
      </div>
      {activeTab === "products" ? (
        <ProductCards
          products={data.products}
          setBoughtProducts={setBoughtProducts}
          boughtProducts={boughtProducts}
        ></ProductCards>
      ) : (
        <CartCards
          boughtProducts={boughtProducts}
          setBoughtProduts={setBoughtProducts}
        ></CartCards>
      )}
    </div>
  );
};

export default ProductsAndCarts;

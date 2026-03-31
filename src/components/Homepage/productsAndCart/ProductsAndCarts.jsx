import React, { use, useState } from "react";
import ProductCards from "./productCards/ProductCards";
import CartCards from "./cartCards/CartCards";

const ProductsAndCarts = ({
  productsPromise,
  boughtProducts,
  setBoughtProducts,
}) => {
  const data = use(productsPromise);

  const [activeTab, setActiveTab] = useState("products");

  return (
    <div className="text-center my-30 container mx-auto min-h-screen">
      <h2 className="text-5xl font-bold">Premium Digital Tools</h2>
      <p className="text-[#627382] mt-4 mb-5">
        Choose from our curated collection of premium digital products designed{" "}
        <br />
        to boost your productivity and creativity.
      </p>
      <div className="flex gap-4 justify-center mb-10">
        <button
          onClick={() => setActiveTab("products")}
          className={activeTab === "products" ? "btn btn-primary" : ""}
        >
          Products
        </button>
        <button
          onClick={() => setActiveTab("cart")}
          className={activeTab === "cart" ? "btn btn-primary" : ""}
        >
          Cart ({boughtProducts.length})
        </button>
      </div>
      {activeTab === "products" ? (
        <ProductCards
          products={data.products}
          setBoughtProducts={setBoughtProducts}
          boughtProducts={boughtProducts}
        ></ProductCards>
      ) : (
        <CartCards boughtProducts={boughtProducts}></CartCards>
      )}
    </div>
  );
};

export default ProductsAndCarts;

import React from "react";

const CartCards = ({ boughtProducts }) => {
  let totalProductPrice = 0;
  return (
    <div className="text-left space-y-6 container mx-auto border-2 border-[#F2F2F2] p-10 rounded-xl">
      <h3 className="text-2xl font-bold">Your Cart</h3>
      <div className="space-y-4">
        {boughtProducts.map((product) => {
          totalProductPrice = totalProductPrice + product.price;

          return (
            <div
              key={product.id}
              className="flex justify-between bg-[#F9FAFC] items-center p-5 rounded-xl"
            >
              <div className="flex gap-4 items-center">
                <div>
                  <img src={product.icon} alt="" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-[#627382]">${product.price}</p>
                </div>
              </div>
              <div>
                <button className="btn btn-ghost text-[#FF3980]">Remove</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between">
        <p className="text-[#627382]">Total:</p>
        <p className="font-bold text-xl">${totalProductPrice}</p>
      </div>
    </div>
  );
};

export default CartCards;

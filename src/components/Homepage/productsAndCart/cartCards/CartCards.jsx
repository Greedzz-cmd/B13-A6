import React from "react";
import { toast } from "react-toastify";
import cartIcon from "../../../../assets/products/shopping-cart.png";

const CartCards = ({ boughtProducts, setBoughtProduts }) => {
  const handleRemove = (product) => {
    const updatedBoughtProducts = boughtProducts.filter(
      (cartProduct) => product.id !== cartProduct.id,
    );
    setBoughtProduts(updatedBoughtProducts);

    toast(() => (
      <div className="flex gap-4 px-2 items-center">
        <div>
          <img src={product.icon} alt="toast" />
        </div>

        <p>{product.name} removed from cart</p>
      </div>
    ));
  };

  const handleCheckout = () => {
    if (boughtProducts.length === 0) {
      toast("Please buy an item before checking out");
    } else {
      (setBoughtProduts([]), toast("CheckOut successful"));
    }
  };

  let totalProductPrice = 0;
  return (
    <div className="text-left space-y-6 container mx-auto border-2 border-[#F2F2F2] p-10 rounded-xl">
      <h3 className="text-2xl font-bold">Your Cart</h3>
      <div className="space-y-4">
        {boughtProducts.length === 0 ? (
          <div className="flex flex-col gap-4 justify-center items-center bg-[#F9FAFC] p-10 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-25 w-25"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />{" "}
            </svg>

            <p className="text-2xl">
              Your cart is empty. Please buy a product.
            </p>
          </div>
        ) : (
          boughtProducts.map((product) => {
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
                  <button
                    className="btn btn-ghost hover:bg-[#F9FAFC] text-[#FF3980]"
                    onClick={() => handleRemove(product)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="flex justify-between">
        <p className="text-[#627382]">Total:</p>
        <p className="font-bold text-xl">${totalProductPrice}</p>
      </div>
      <div>
        <button
          className="btn btn-primary  w-full transition-transform duration-300 hover:-translate-y-2"
          onClick={handleCheckout}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartCards;

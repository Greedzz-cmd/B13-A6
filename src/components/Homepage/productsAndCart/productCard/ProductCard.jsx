import React from "react";

const ProductCard = ({ products }) => {
  return (
    <div className="grid grid-cols-3 justify-items-center gap-10">
      {products.map((product) => {
        let badgeClass;
        if (product.tagType === "best-seller") {
          badgeClass = "badge-warning";
        } else if (product.tagType === "popular") {
          badgeClass = "badge-success";
        } else {
          badgeClass = "badge-primary";
        }

        return (
          <div
            key={product.id}
            className="card w-96 bg-base-100 border border-slate-300 shadow-sm text-left"
          >
            <div className="card-body">
              <div className="flex justify-end">
                <span
                  className={`text-sm badge badge-xs badge-soft ${badgeClass}`}
                >
                  {product.tag}
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex">
                  <div className="border border-[#F2F2F2] p-4 rounded-full">
                    <img src={product.icon} alt="" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold">{product.name}</h2>
                <p className="text-[#627382]">{product.description}</p>
                <span className="text-xl">
                  <span className="font-bold">${product.price}</span>
                  <span className="text-[#627382]">/{product.period}</span>
                </span>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs text-[#627382]">
                {product.features?.map((feature, i) => {
                  return (
                    <li key={i}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 me-2 inline-block text-success"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-6">
                <button className="btn btn-primary btn-block">Buy Now</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;

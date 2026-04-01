import React from "react";

const Navbar = ({
  boughtProducts,
  productsRef,
  plansRef,
  handleScrollCart,
  handleScroll,
}) => {
  return (
    <div>
      <div className="bg-base-100 shadow-sm">
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden transition-transform duration-300 hover:-translate-y-2 hover:bg-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a onClick={() => handleScroll(productsRef)}>Products</a>
                </li>
                <li>
                  <a>Features</a>
                </li>
                <li>
                  <a onClick={() => handleScroll(plansRef)}>Pricing</a>
                </li>
                <li>
                  <a>Testimonials</a>
                </li>
                <li>
                  <a>FAQ</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-primary font-bold text-3xl ">
              DigiTools
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a onClick={() => handleScroll(productsRef)}>Products</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a onClick={() => handleScroll(plansRef)}>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="flex gap-1.5">
              <div
                onClick={handleScrollCart}
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle transition-transform duration-300 hover:-translate-y-2 hover:bg-white"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
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
                  <span
                    className={`${boughtProducts.length > 0 ? "badge badge-sm indicator-item" : ""}`}
                  >
                    {boughtProducts.length > 0 ? boughtProducts.length : ""}
                  </span>
                </div>
              </div>
              <a className="btn btn-ghost transition-transform duration-300 hover:-translate-y-2 hover:bg-white">
                Log In
              </a>
              <a
                className="btn btn-primary transition-transform duration-300 hover:-translate-y-2"
                onClick={() => handleScroll(productsRef)}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

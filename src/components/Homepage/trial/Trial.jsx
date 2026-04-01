import React from "react";

const Trial = ({ handleScroll, productsRef, plansRef, setActiveTab }) => {
  return (
    <div className="bg-primary text-white text-center py-30">
      <h3 className="text-5xl font-bold">Ready to Transform Your Workflow?</h3>
      <p className="mt-4 mb-10">
        Join thousands of professionals who are already using Digitools to work
        smarter. <br />
        Start your free trial today.
      </p>
      <div className="flex gap-2 justify-center mb-4">
        <button className="btn btn-secondary transition-transform duration-300 hover:-translate-y-2">
          <span
            className="text-primary"
            onClick={() => {
              (handleScroll(productsRef), setActiveTab("products"));
            }}
          >
            Explore Products
          </span>
        </button>
        <button
          onClick={() => handleScroll(plansRef)}
          className="btn btn-ghost border border-white rounded-full hover:bg-transparent hover:text-white transition-transform duration-300 hover:-translate-y-2"
        >
          View Pricing
        </button>
      </div>
      <p>14-day free trial • No credit card required • Cancel anytime</p>
    </div>
  );
};

export default Trial;

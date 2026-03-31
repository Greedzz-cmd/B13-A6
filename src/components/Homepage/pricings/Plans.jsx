import React, { use } from "react";
import PlanCard from "./planCard/PlanCard";

const Plans = ({ plansPromise }) => {
  const data = use(plansPromise);

  return (
    <div className="text-center my-30">
      <h3 className="text-5xl font-bold">Simple, Transparent Pricing</h3>
      <p className="text-[#627382] mt-4 mb-10">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>
      <PlanCard plans={data.plans}></PlanCard>
    </div>
  );
};

export default Plans;

import { use } from "react";
import StepCard from "./stepCard/StepCard";

const Steps = ({ stepsPromise }) => {
  const data = use(stepsPromise);

  return (
    <div className="text-center bg-[#F9FAFC] py-30">
      <h3 className="font-bold text-5xl">Get Started in 3 Steps</h3>
      <p className="text-[#627382FF] mt-4 mb-10">
        Start using premium digital tools in minutes, not hours.
      </p>
      <StepCard steps={data.steps}></StepCard>
    </div>
  );
};

export default Steps;

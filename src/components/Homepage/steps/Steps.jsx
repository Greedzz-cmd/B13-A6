import React from "react";
import StepCard from "./stepCard/stepCard";

const fetchSteps = async () => {
  const res = await fetch("/data.json");
  return res;
};

const Steps = () => {
  const stepsPromise = fetchSteps();
  return (
    <div className="text-center">
      <h3>Get Started in 3 Steps</h3>
      <p>Get Started in 3 Steps</p>
      <div>
        <StepCard></StepCard>
      </div>
    </div>
  );
};

export default Steps;

import React from "react";

const StepCard = ({ steps }) => {
  return (
    <div>
      <p>{steps.step}</p>
      <img src={steps.icon} alt="" />
      <h3>{steps.title}</h3>
      <p>{steps.description}</p>
    </div>
  );
};

export default StepCard;

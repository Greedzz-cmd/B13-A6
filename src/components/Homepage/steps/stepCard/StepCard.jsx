import React from "react";

const StepCard = ({ steps }) => {
  return (
    <div className="flex gap-7 justify-center container mx-auto">
      {steps.map((step) => {
        return (
          <div key={step.id} className="bg-white shadow-md rounded-lg p-5">
            <div className="text-white flex justify-between">
              <p></p>
              <p className="bg-primary rounded-[50%] py-2 px-2.5">
                {step.step}
              </p>
            </div>
            <div className="py-10 px-6 space-y-4">
              <div className="flex justify-center">
                <img
                  src={step.icon}
                  alt=""
                  className="bg-linear-to-r from-[#4F39F610] to-[#9514FA10] p-7 rounded-full"
                />
              </div>
              <h3 className="text-2xl font-bold">{step.title}</h3>
              <p className="text-[#627382FF]">{step.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StepCard;

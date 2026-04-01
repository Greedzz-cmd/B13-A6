import React from "react";
import { toast } from "react-toastify";

const PlanCard = ({ plans }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-8 relative ">
      {plans.map((plan) => {
        let planBadgeClass;
        let cardBgClass;
        let btnBgClass;
        let btnTextClass;
        let textGray;

        if (plan.tag == null) {
          planBadgeClass = "";
          cardBgClass = "bg-[#F2F2F2] text-black";
          btnBgClass = "btn-primary";
          btnTextClass = "";
          textGray = "text-[#627382]";
        } else {
          planBadgeClass = "text-sm badge badge-xs badge-warning badge-soft";
          cardBgClass = "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white";
          btnBgClass = "bg-white rounded-full";
          btnTextClass = "text-primary";
          textGray = "";
        }

        return (
          <div key={plan.id}>
            <div
              className={`card w-96 h-110 ${cardBgClass} shadow-sm text-left transition-transform duration-300 hover:-translate-y-2`}
            >
              <div className="card-body">
                <span className={`${planBadgeClass} absolute -top-2 left-35`}>
                  {plan.tag}
                </span>
                <div className="">
                  <h2 className="text-3xl font-bold">{plan.name}</h2>
                  <p className={`mt-2 mb-6 ${textGray}`}>{plan.description}</p>
                  <span className="">
                    <span className="font-bold text-4xl">${plan.price}</span>
                    <span className={textGray}>/{plan.period}</span>
                  </span>
                </div>
                <ul className={`mt-6 flex flex-col gap-2 text-xs ${textGray}`}>
                  {plan.features.map((feature, i) => {
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
                  <button
                    onClick={() => toast("This feature isnt available yet")}
                    className={`btn ${btnBgClass} w-full font-bold transition-transform duration-300 hover:-translate-y-2`}
                  >
                    <span className={btnTextClass}>{plan.buttonText}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlanCard;

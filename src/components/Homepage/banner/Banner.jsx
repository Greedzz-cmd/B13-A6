import React from "react";
import { CiPlay1 } from "react-icons/ci";
import { FaRegDotCircle } from "react-icons/fa";
import bannerImg from "../../../assets/banner.png";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen my-20">
        <div className="hero-content flex-col lg:flex-row-reverse gap-15">
          <img src={bannerImg} />
          <div>
            <div className="bg-[#e1e7ffFF] px-4 rounded-full max-w-75 mb-4">
              <p className="flex gap-1 items-center text-primary">
                <FaRegDotCircle />
                New: AI-Powered Tools Available
              </p>
            </div>
            <h1 className="text-7xl font-bold">
              Supercharge Your <br />
              <span className="text-primary">Digital Workflow</span>
            </h1>
            <p className="py-6 text-[#627382FF]">
              Access premium AI tools, design assets, templates, and
              productivity <br /> software—all in one place. Start creating
              faster today. <br />
              Explore Products
            </p>
            <div className="flex gap-4">
              <button className="btn btn-primary">Explore Products</button>
              <button className="btn btn-secondary">
                <span className="text-primary flex gap-2 items-center">
                  <CiPlay1 /> Watch Demo
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

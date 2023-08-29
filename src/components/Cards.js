import React from "react";
import Items from "../Image";

const Cards = () => {
  const fadeInUpStyles = {
    animationDuration: "1s",
    animationFillMode: "both",
    WebkitAnimationDuration: "1s",
    WebkitAnimationFillMode: "both",
    opacity: 0,
    animationName: "fadeInUp",
    WebkitAnimationName: "fadeInUp",
  };
  return (
    <div className="flex flex-col md:flex-row justify-around items-center md:items-start mb-10 mt-12">
      <div className="mt-10 md:mt-0 md:w-[300px]">
        <h3 className="font-bold text-blue-700 cursor-pointer text-lg md:text-xl">
          TEAM ESSENTIALS
        </h3>
        <h6 className="font-semibold text-2xl md:text-3xl mt-2 md:w-[300px]">
          Explore resources to unleash the potential of your team
        </h6>
      </div>
      <div className="flex flex-col items-center md:items-start mt-8 md:mt-0">
        <div className="container mt-6 md:mt-0 max-w-lg  ">
          <img
            style={fadeInUpStyles}
            src={Items.background10}
            alt="Background"
            className="w-full h-auto mt-12  "
          />
        </div>
        <div
          style={fadeInUpStyles}
          className="bg-amber-100 p-4 md:p-8 mt-4 md:mt-0"
        >
          <div className="text-center">
            <h4 style={fadeInUpStyles} className="font-bold">
              Atlassian Community
            </h4>
            <p style={fadeInUpStyles} className="mt-2">
              Connect globally and meet locally to get more out of products.
            </p>
          </div>
          <div className="flex md:justify-around mt-3">
            <div className="mr-4">
              <span
                style={fadeInUpStyles}
                className="font-bold text-blue-500 cursor-pointer"
              >
                Search the forum
              </span>
            </div>
            <div>
              <span
                style={fadeInUpStyles}
                className="font-bold text-blue-500 cursor-pointer"
              >
                Join our community
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

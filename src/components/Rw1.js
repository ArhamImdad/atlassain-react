import React from "react";
import Items from "../Image";

const Rw1 = () => {
  return (
    <div className="flex justify-around ">
      <div className="mt-32">
        <div>
          <h3 className="font-bold text-blue-700 cursor-pointer">
            TEAM ESSENTIALS
          </h3>
          <br />
          <h6 className="font-semibold text-3xl w-[300px]">
            Explore resources to unleash the potential of your team
          </h6>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="container mt-24 max-w-lg">
          <img src={Items.background1} />
        </div>
        <div className="bg-amber-100 pb-8">
          <div className="text-center">
            <h4 className="mt-3 font-bold">Atlassian Community</h4>
            <p className="mt-3">
              Connect globally and meet locally to get more out of products.
            </p>
          </div>
          <div className="flex justify-around mt-5">
            <div>
              <span className="font-bold text-blue-500 cursor-pointer">
                Search the forum
              </span>
            </div>
            <div>
              <span className="font-bold text-blue-500 cursor-pointer">
                Join our community
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rw1;

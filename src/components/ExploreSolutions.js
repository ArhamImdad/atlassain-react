import React from "react";
import Items from "../Image";

const ExploreSolutions = () => {
  return (
    <section>
      <div className="bg-sky-50 text-center text-xl px-4 py-12 md:py-16">
        <h4 className="mt-3 text-lg md:text-xl">
          Join the 250,000+ companies that use our software to power team
          collaboration
        </h4>
        <div className="flex justify-center mt-6">
          <span className="font-bold text-blue-700 cursor-pointer">
            Watch a customer story
          </span>
        </div>
        <div className="flex flex-row mt-12 justify-center space-x-20">
          <div className="container w-40 h-32 cursor-pointer grayscale">
            <img src={Items.kiva} />
          </div>
          <div className="container w-20 h-16 mt-3 cursor-pointer grayscale">
            <img src={Items.twitter} />
          </div>
          <div className="container w-40 h-32 mt-8 cursor-pointer grayscale">
            <img src={Items.redfin} />
          </div>
          <div className="container w-20 h-16 mt-3 cursor-pointer grayscale">
            <img src={Items.nasa} />
          </div>
          <div className="container w-40 h-32 mt-8 cursor-pointer grayscale">
            <img src={Items.audi} />
          </div>
          <div className="container w-40 h-32 mt-6 cursor-pointer grayscale">
            <img src={Items.castlight} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSolutions;

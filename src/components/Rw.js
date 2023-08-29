import React from "react";
import Items from "../Image";

const Rw = () => {
  return (
    <section>
      <div>
        <div className="flex flex-col text-center space-y-6 md:mt-32">
          <div>
            <h3 className=" text-[#2684FF] font-bold  ">CAREERS</h3>
          </div>
          <div>
            <h3 className=" text-[#42526E] font-semibold text-lg md:text-4xl">
              We can't do it alone
            </h3>
          </div>
          <div>
            <p className="text-xl text-slate-700  ">
              We have an ambitious road ahead, and we’re looking for people to
              join
              <br />
              our global team to help shape the future of Atlassian.
            </p>
          </div>
          <div>
            <button className="bg-blue-700 text-white px-4 py-2 rounded-none hover:bg-blue-400 cursor-pointer max-w-{32px} max-h-10">
              Join the team
            </button>
          </div>
          <div className="flex justify-between">
            <div className="max-w-sm h-[50%]">
              <img src={Items.end1} className="" />
            </div>
            <div className="max-w-sm h-[50%] ">
              <img src={Items.end2} className="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rw;

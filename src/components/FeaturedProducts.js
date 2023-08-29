import React from "react";
import Items from "../Image";

const FeaturedProducts = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-around">
        <div className="w-full md:w-[275px]">
          <p className="font-bold text-2xl mb-2">
            Make work flow across teams while connecting back to company goals
          </p>
          <div className="mt-2">
            <div className="font-bold text-blue-700 hover:bg-blue-200 hover:underline hover:p-5 p-2 cursor-pointer">
              Work differently, together
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-3 mt-8">
            <div className="space-y-10 ">
              <div className="flex items-center space-x-3">
                <img
                  className="bg-gray-300 hover:text-blue-600 hover:bg-white cursor-pointer square-full w-12 h-12"
                  src={Items.confluence}
                  alt="Confluence Icon"
                />
                <div>
                  <b>Confluence</b> <br />
                  Content collaboration
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <img
                  className="bg-gray-300 hover:text-blue-600 hover:bg-white cursor-pointer square-full w-12 h-12"
                  src={Items.trello}
                  alt="Trello Icon"
                />
                <div>
                  <b>Trello</b> <br />
                  Visual project management
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <img
                  className="bg-gray-300 hover:text-blue-600 hover:bg-white cursor-pointer square-full w-12 h-12"
                  src={Items.jira}
                  alt="Jira Icon"
                />
                <div>
                  <b>Jira Work Management</b> <br />
                  Business team collaboration
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <img
                  className="bg-gray-300 hover:bg-white cursor-pointer square-full w-12 h-12"
                  src={Items.atlas}
                  alt="Atlas Icon"
                />
                <div>
                  <b>Atlas</b> <br />
                  Teamwork directory
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 md:mt-0">
          <img
            className="w-full h-auto md:w-[820px] md:h-[550px]"
            src={Items.background}
            alt="Background"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

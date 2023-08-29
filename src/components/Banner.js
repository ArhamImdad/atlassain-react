import React from "react";

const Banner = () => {
  return (
    <section>
      <div className="text-center relative">
        <img
          src="Image/background.png"
          alt="Background"
          className="mx-auto mb-8 rounded-lg"
        />
      </div>

      <div className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Atlassian solutions are designed for all types of work
          </h2>
          <div className="flex flex-col md:flex-row justify-center md:space-x-6">
            <button className="bg-blue-600 text-white font-bold text-xl px-8 md:px-12 py-4 md:py-8 rounded-full mb-4 md:mb-0">
              Work Management
            </button>
            <button className="bg-gray-200 text-blue-600 text-xl px-8 md:px-12 py-4 md:py-8 font-bold rounded-full">
              IT Service Management
            </button>
            <button className="bg-gray-200 text-blue-600 text-xl px-8 md:px-12 py-4 md:py-8 font-bold rounded-full">
              Agile and DevOps
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

import React from "react";
import Header from "../components/Header";
import Items from "../Image";
import "../components/Rw4.css";

const Home = () => {
  const fadeInUpStyles = {
    animationDuration: "1s",
    animationFillMode: "both",
    WebkitAnimationDuration: "1s",
    WebkitAnimationFillMode: "both",
    opacity: 0,
    animationName: "fadeInUp",
    WebkitAnimationName: "fadeInUp",
  };
  const isLoggedIn = Header !== null;
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
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
              <h4 className="font-bold">Atlassian Community</h4>
              <p className="mt-2">
                Connect globally and meet locally to get more out of products.
              </p>
            </div>
            <div className="flex md:justify-around mt-3">
              <div className="mr-4">
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

      <div>
        <div className="flex flex-col md:flex-row justify-around md:mt-4 space-y-4 md:space-y-0">
          <div className="max-w-sm h-[50%] rounded overflow-hidden shadow-lg text-center animate-fadeInUp duration-1000 delay-200">
            <img
              style={fadeInUpStyles}
              className="w-full h-[240px] cursor-pointer "
              src={Items.card1}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div style={fadeInUpStyles} className="font-bold text-xl mb-2">
                Work Life
              </div>
              <p style={fadeInUpStyles} className="text-gray-700 text-base">
                Real-life advice, inspiration, and stories from the working
                world today.
              </p>
            </div>
          </div>
          <div className="max-w-sm h-[50%] rounded overflow-hidden shadow-lg text-center">
            <img
              style={fadeInUpStyles}
              className="w-full h-[240px] cursor-pointer"
              src={Items.card2}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <h1 style={fadeInUpStyles} className="font-bold text-xl mb-2">
                Atlassian Team Playbook
              </h1>
              <p style={fadeInUpStyles} className="text-gray-700 text-base">
                Solve common team challenges with these group exercises.
              </p>
            </div>
          </div>
          <div className="max-w-sm h-[50%] rounded overflow-hidden shadow-lg text-center">
            <img
              style={fadeInUpStyles}
              className="w-full h-[240px] cursor-pointer"
              src={Items.card3}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div style={fadeInUpStyles} className="font-bold text-xl mb-2">
                The Agile Coach
              </div>
              <p style={fadeInUpStyles} className="text-gray-700 text-base">
                Atlassian's no-nonsense guide to agile development.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:mt-10 justify-around items-center md:items-start space-x-3 space-y-4 md:space-y-0">
          <div className="mt-10 md:mt-0 md:w-[300px]">
            <h3
              style={fadeInUpStyles}
              className="font-bold text-blue-500 text-lg md:text-xl"
            >
              EVENTS
            </h3>
            <h6
              style={fadeInUpStyles}
              className="font-semibold text-2xl md:text-3xl md:mt-4"
            >
              Hear from today’s fearless builders and innovators
            </h6>
            <h3
              style={fadeInUpStyles}
              className="text-blue-500 text-lg md:text-xl md:mt-4 cursor-pointer"
            >
              Learn more
            </h3>
          </div>
          <div className="max-w-sm h-[50%] rounded overflow-hidden shadow-lg ">
            <img
              style={fadeInUpStyles}
              className="w-full h-[360px] cursor-pointer"
              src={Items.card4}
              alt="Sunset in the mountains"
            />
          </div>
          <div className="max-w-sm h-[50%] rounded overflow-hidden shadow-lg ">
            <img
              style={fadeInUpStyles}
              className="w-full h-[360px] cursor-pointer"
              src={Items.card5}
              alt="Sunset in the mountains"
            />
          </div>
        </div>
      </div>

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
      <section className="py-16 bg-gray-100">
        <div className="flex justify-around ">
          <div className="">
            <img src={Items.logo} className="w-18 h-6 grayscale" />
          </div>
          <div>
            <div className="font-bold">PRODUCTS</div>
            <div className="mt-6">
              <div>
                <ul>
                  <li className="cursor-pointer hover:underline">Coffee</li>
                  <li className="cursor-pointer hover:underline">Jira Align</li>
                  <li className="cursor-pointer hover:underline">
                    Jira Service Management
                  </li>
                  <li className="cursor-pointer hover:underline">
                    Jira Product Discovery
                  </li>
                  <li className="cursor-pointer hover:underline">Confluence</li>
                  <li className="cursor-pointer hover:underline">Trello</li>
                  <li className="cursor-pointer hover:underline">Bitbucket</li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <h className="text-blue-500 cursor-pointer hover:underline">
                View all products
              </h>
            </div>
          </div>

          <div>
            <div className="font-bold">RESOURCES</div>
            <div className="mt-6">
              <div>
                <ul>
                  <li className="cursor-pointer hover:underline">
                    Technical Support
                  </li>
                  <li className="cursor-pointer hover:underline">
                    Purchasing & licensing
                  </li>
                  <li className="cursor-pointer hover:underline">
                    Atlassian Community
                  </li>
                  <li className="cursor-pointer hover:underline">
                    Knowledge base
                  </li>
                  <li className="cursor-pointer hover:underline">
                    Marketplace
                  </li>
                  <li className="cursor-pointer hover:underline">My Account</li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <h className="text-blue-500 cursor-pointer hover:underline">
                Create support ticket
              </h>
            </div>
          </div>

          <div>
            <div className="font-bold">EXPAND & LEARN</div>
            <div className="mt-6">
              <div>
                <ul>
                  <li className="cursor-pointer hover:underline">Partners</li>
                  <li className="cursor-pointer hover:underline">
                    Training & Certification
                  </li>
                  <li className="cursor-pointer hover:underline">
                    Documentation
                  </li>
                  <li className="cursor-pointer hover:underline">
                    Developer Resources
                  </li>
                  <li className="cursor-pointer hover:underline">
                    Enterprise services
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <h className="text-blue-500 cursor-pointer hover:underline">
                View all resources
              </h>
            </div>
          </div>

          <div>
            <div className="font-bold">ABOUT ATLASSIAN</div>
            <div className="mt-6">
              <div>
                <ul>
                  <li className="cursor-pointer hover:underline">Company</li>
                  <li className="cursor-pointer hover:underline">Careers</li>
                  <li className="cursor-pointer hover:underline">Events</li>
                  <li className="cursor-pointer hover:underline">Blogs</li>
                  <li className="cursor-pointer hover:underline">
                    Atlassian Foundation
                  </li>
                  <li className="cursor-pointer hover:underline">
                    Investor Relations
                  </li>
                  <li className="cursor-pointer hover:underline">
                    Trust & Security
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <h className="text-blue-500 cursor-pointer hover:underline">
                Contact us
              </h>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

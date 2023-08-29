import React from "react";
import Items from "../Image";

const Testimonials = () => {
  return (
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
                <li className="cursor-pointer hover:underline">Marketplace</li>
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
  );
};

export default Testimonials;

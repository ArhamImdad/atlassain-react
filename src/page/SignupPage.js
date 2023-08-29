import React from "react";
import Items from "../Image";
import axios from "axios";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const handleSignUp = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const response = await axios.post("http://localhost:5000/user/signup", {
        username,
        email,
        password,
      });
      console.log("Sign-up success!", response.data);
      window.location.href = "/login";
    } catch (error) {
      console.error("Sign-up error:", error.message);
    }
  };
  const backgroundStyle = {
    backgroundImage: `url(${Items.background02})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div>
      <div
        className="flex flex-col items-center justify-center h-screen"
        style={backgroundStyle}
      >
        <div className=" bg-white pt-20 pb-20 justify-center pr-10 pl-10 md:shadow-lg shadow-inner">
          <div>
            <img src={Items.logo} className="w-62 h-12 mb-4 " />
          </div>
          <h1 className="text-xl mb-4 text-center">Sign up to continue</h1>
          <form className="flex flex-col space-y-4" onSubmit={handleSignUp}>
            <label htmlFor="username" className="font-semibold"></label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              name=""
              className="border border-gray-300 rounded-md px-3 py-2"
              required
            />
            <label htmlFor="email" className="font-semibold"></label>
            <input
              type="text"
              placeholder="Enter your email"
              id="email"
              name="email"
              className="border border-gray-300 rounded-md px-3 py-2"
              required
            />
            <label htmlFor="password" className="font-semibold"></label>
            <input
              type="password"
              placeholder="Enter your password"
              id="password"
              name="password"
              className="border border-gray-300 rounded-md px-3 py-2"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Sign up
            </button>
            <p className="mt-4 text-center">
              <a href="#" className="text-blue-500 hover:underline">
                Already have an Atlassian account?
              </a>{" "}
              <Link
                to="/login"
                href="#"
                className="text-blue-500 hover:underline"
              >
                Log in
              </Link>
            </p>
            <hr className="my-6" />
            <div className="flex justify-center">
              <img src={Items.logo} className="w-32 h-6 grayscale" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const handleSignOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userData");
    window.location.href = "/";
  };
  let headerContent;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userDataFromLocalStorage = localStorage.getItem("userData");
    if (userDataFromLocalStorage) {
      setUserData(JSON.parse(userDataFromLocalStorage));
    }
  }, []);
  const isLoggedIn = userData !== null;

  if (isLoggedIn) {
    headerContent = (
      <div>
        <span className="text-gray-800 font-medium text-sm mr-2">Welcome</span>
        <button
          className="text-blue-500 px-4 py-2 hover:bg-gray-200 hover:text-blue-500"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    );
  } else {
    headerContent = (
      <div>
        <button className="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-gray-200">
          Try now
        </button>

        <Link
          to="/login"
          className="text-blue-500 px-4 py-2 hover:bg-gray-200 hover:text-blue-500 ml-2"
        >
          Sign In
        </Link>
      </div>
    );
  }

  return (
    <header className="bg-white border-b">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <div className="w-40 h-12 bg-cover bg-no-repeat relative">
            <img
              className="ml-4 w-25 h-8 absolute mt-2"
              src="image/logo.png"
              alt="Logo"
            />
          </div>
          <nav className="ml-8">
            <a
              href="#"
              className="text-gray-800 hover:text-gray-600 font-medium text-sm ml-6"
            >
              Products
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-600 font-medium text-sm ml-6"
            >
              Solutions
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-600 font-medium text-sm ml-6"
            >
              Resources
            </a>
          </nav>
        </div>
        {headerContent}
      </div>
    </header>
  );
};

export default Header;

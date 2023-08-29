import React, { useEffect, useState } from "react";
import Items from "../Image";
import Header from "../components/Header";

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userDataFromLocalStorage = localStorage.getItem("userData");
    if (userDataFromLocalStorage) {
      setUserData(JSON.parse(userDataFromLocalStorage));
    }
  }, []);

  return (
    <>
      <Header />
      {userData ? (
        <div className="h-screen bg-white flex flex-col justify-center items-center">
          <div className="bg-white md:shadow-lg shadow-none rounded p-6 w-96">
            <img
              className="w-32 h-32 mx-auto rounded-full"
              src={Items.Picture}
              alt="Profile"
            />
            <h2 className="text-2xl font-bold mt-4">
              Username: {userData.username}
            </h2>
            <p className="text-gray-600">Email: {userData.email}</p>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default ProfilePage;

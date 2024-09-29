import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { RxTwitterLogo } from "react-icons/rx";
import { FaDiscord, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="py-2 shadow bg-[#1A1E22]">
        <div className="container m-3 flex justify-between items-center">
          <h1 className="px-2 text-4xl py-1 text-white">Spill Tracker</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#"
                  className="text-[1.375rem] text-white border border-white px-4 py-1 duration-200 hover:bg-black rounded-full"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[1.375rem] text-white border border-white px-4 py-1 duration-200 hover:bg-black rounded-full"
                >
                  Oil Leaks
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[1.375rem] text-white border border-white px-4 py-1 duration-200 hover:bg-black rounded-full"
                >
                  Alerts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="  text-[1.375rem] text-white border border-white px-4 py-1 duration-200 hover:bg-black rounded-full"
                >
                  Live Notification
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="container mx-auto text-center py-16 px-4">
          <h1 className="text-7xl font-bold text-gray-800 mb-4">
            Spill Tracker
          </h1>
          <p className="text-4xl font-bold text-gray-600 mb-3">
            We monitor and track oil leaks from ships.
          </p>
          <p className="text-4xl font-bold text-gray-600 mb-5">
            {" "}
            Using satellite data and GPS, helping prevent environmental damage.
          </p>
          <div className="pt-3 pb-11">
            <a className="inline-flex items-center bg-black text-white py-3  px-8 rounded-full hover:bg-gray-800 h-12 text-2xl ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M8 10h8M8 14h6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h10a2 2 0 012 2v10z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Check For Spill
            </a>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="container mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="bg-white border-4 border-gray-800 shadow-lg rounded-xl overflow-hidden w-full max-w-lg h-auto mx-auto transition-transform transform hover:scale-105 duration-300">
          <div className="p-6">
            <div className="flex justify-center mb-4">
              <h3 className="text-3xl font-bold text-gray-900">Stena Empero</h3>
            </div>
            <img
              src="/oil1.png"
              alt="Card 1"
              className="w-full h-64 object-cover rounded-lg mb-4 shadow-sm"
            />
            <div className="p-4 bg-gray-100 rounded-lg shadow-inner">
              <p className="text-gray-700 text-lg font-medium">
                Latitude: 10.0000 N, Longitude: 50.0000 W
              </p>
              <p className="text-gray-500 text-sm">(North Atlantic Ocean)</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border-4 border-gray-800 shadow-lg rounded-xl overflow-hidden w-full max-w-lg h-auto mx-auto transition-transform transform hover:scale-105 duration-300">
          <div className="p-6">
            <div className="flex justify-center mb-4">
              <h3 className="text-3xl font-bold text-gray-900">Namrata MT</h3>
            </div>
            <img
              src="/oil2.png"
              alt="Card 2"
              className="w-full h-64 object-cover rounded-lg mb-4 shadow-sm"
            />
            <div className="p-4 bg-gray-100 rounded-lg shadow-inner">
              <p className="text-gray-700 text-lg font-medium">
                Latitude: -10.0000 S, Longitude: 100.0000 E
              </p>
              <p className="text-gray-500 text-sm">(Indian Ocean)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1E22] text-white py-8">
        <div className="container mx-auto text-center">
          {/* Social Media Logos */}
          <div className="flex justify-center space-x-8 mb-6">
            <a
              href="https://x.com/Sar_1707"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition duration-300"
            >
              <RxTwitterLogo size={30} />
            </a>
            <a
              href="https://discord.com/channels/1159146971819425862/1159146971819425865"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition duration-300"
            >
              <FaDiscord size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/sarvesh-gupta17/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700 transition duration-300"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://www.instagram.com/sarvesh_1703/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-500 transition duration-300"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.youtube.com/@SarveshGupta1707"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-600 transition duration-300"
            >
              <FaYoutube size={30} />
            </a>
          </div>

          {/* Copyright Text */}
          <div className="mb-4">
            <p>Copyright © 2024 Oil SPill. All Rights Reserved.</p>
          </div>

          {/* Legal Links */}
          <div className="space-x-4">
            <a to="#" className="hover:underline">
              Contact Us
            </a>
            <span>|</span>
            <a to="#" className="hover:underline">
              Legal Policy
            </a>
            <span>|</span>
            <a to="#" className="hover:underline">
              Privacy Policy
            </a>
            <span>|</span>
            <a to="#" className="hover:underline">
              Manage Cookies
            </a>
            <span>|</span>
            <a to="#" className="hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

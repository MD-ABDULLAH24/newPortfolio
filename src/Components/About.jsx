import React from "react";
import myimg from '../assets/my_image.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="bg-black text-white py-20 flex flex-col items-center"
    >
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-12 px-4">
        {/* Left Side - Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={myimg}
            alt="profile"
            className="w-[260px] h-[260px] object-cover rounded-xl shadow-2xl"
          />
        </div>
        {/* Right Side - Info */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <p className="text-gray-300 mb-8">
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
          </p>
          <div className="mb-6">
            <div className="flex mb-2">
              <span className="w-32 font-semibold text-gray-400">Name:</span>
              <span className="text-gray-200">Shasika Shehan</span>
            </div>
            <div className="flex mb-2">
              <span className="w-32 font-semibold text-gray-400">Date of birth:</span>
              <span className="text-gray-200">January 01, 1987</span>
            </div>
            <div className="flex mb-2">
              <span className="w-32 font-semibold text-gray-400">Address:</span>
              <span className="text-gray-200">San Francisco CA 97987 USA</span>
            </div>
            <div className="flex mb-2">
              <span className="w-32 font-semibold text-gray-400">Zip code:</span>
              <span className="text-gray-200">1000</span>
            </div>
            <div className="flex mb-2">
              <span className="w-32 font-semibold text-gray-400">Email:</span>
              <span className="text-gray-200">clarkthomp@gmail.com</span>
            </div>
            <div className="flex mb-2">
              <span className="w-32 font-semibold text-gray-400">Phone:</span>
              <span className="text-gray-200">+1-2234-5678-9-0</span>
            </div>
          </div>
          <div className="mb-6">
            <span className="text-[#f7b731] font-semibold text-lg">73 Project complete</span>
          </div>
          <a
            href="#"
            className="inline-block bg-[#f7b731] text-black font-semibold rounded-full px-7 py-2 hover:bg-yellow-400 transition"
          >
            DOWNLOAD CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
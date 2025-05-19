import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">Contact Me</h2>
        <p className="text-gray-400 text-center mb-12">
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#f7b731] text-2xl" />
              <span>web.abdullah20@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-[#f7b731] text-2xl" />
              <span>01903530401</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-[#f7b731] text-2xl" />
              <span>Ecb Chattar Dhaka Bangladesh</span>
            </div>
          </div>
          <form className="bg-[#181818] rounded-xl p-8 flex flex-col gap-6 shadow">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-[#222] text-white rounded px-4 py-3 outline-none focus:ring-2 focus:ring-[#f7b731]"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-[#222] text-white rounded px-4 py-3 outline-none focus:ring-2 focus:ring-[#f7b731]"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="bg-[#222] text-white rounded px-4 py-3 outline-none focus:ring-2 focus:ring-[#f7b731]"
              required
            />
            <button
              type="submit"
              className="bg-[#f7b731] text-black font-semibold rounded-full px-7 py-3 hover:bg-yellow-400 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-[#222]">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand & Social */}
        <div>
          <div className="text-white font-bold text-2xl tracking-wide mb-4">
            Abdullah
          </div>
          <p className="mb-4 text-gray-400">
            Passionate Frontend Developer crafting modern, responsive, and user-friendly web experiences.
          </p>
          <div className="flex gap-4 text-xl">
            <a
              href="https://github.com/MD-ABDULLAH24"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f7b731] transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/abdullah2020/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f7b731] transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f7b731] transition"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#hero" className="hover:text-[#f7b731] transition">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#f7b731] transition">About</a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#f7b731] transition">Services</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-[#f7b731] transition">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#f7b731] transition">Contact</a>
            </li>
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#f7b731]" /> web.abdullah20@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-[#f7b731]" /> 01903530401
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#f7b731]" /> Ecb Chattar Dhaka Bangladesh
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-500 text-xs mt-10">
        © {new Date().getFullYear()} Abdullah. All rights reserved. | Designed & Built by SHEHAN
      </div>
    </footer>
  );
};

export default Footer;
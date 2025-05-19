import React from "react";
import { FaCode, FaMobileAlt, FaPaintBrush } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { FaPlug } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-4xl text-[#f7b731] mb-4" />,
    title: "Web Development",
    desc: "Modern, fast and responsive websites using React, Next.js, and Tailwind CSS.",
  },
  {
    icon: <FaMobileAlt className="text-4xl text-[#f7b731] mb-4" />,
    title: "Mobile Friendly Design",
    desc: "Fully responsive layouts for all devices and screen sizes.",
  },
  {
    icon: <FaTools className="text-4xl text-[#f7b731] mb-4" />,
    title: "Website Maintenance & Support",
    desc: "Ongoing updates, bug fixes, and improvements.",
  },
  {
    icon: <FaFileAlt className="text-4xl text-[#f7b731] mb-4" />,
    title: "Landing Page Design",
    desc: "High-converting landing pages for marketing campaigns.",
  },
  {
    icon: <FaRocket className="text-4xl text-[#f7b731] mb-4" />,
    title: "Performance Optimization",
    desc: "Improving website speed, performance, and SEO.",
  },
  {
    icon: <FaPlug className="text-4xl text-[#f7b731] mb-4" />,
    title: "API Integration",
    desc: "Connecting third-party services and APIs for enhanced functionality.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-black text-white py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">My Services</h2>
        <p className="text-gray-400 text-center mb-12">
          What I can do for you as a Frontend Developer
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#181818] rounded-xl p-8 flex flex-col items-center text-center shadow hover:shadow-lg transition"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2 text-[#f7b731]">{service.title}</h3>
              <p className="text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
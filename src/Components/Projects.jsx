import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import projectImg from "../assets/image.png";
import projectimg_2 from "../assets/image-2.png"
import projectimg_3 from "../assets/softwareCompany.png"

const projects = [
  {
    title: "Portfolio Website",
    desc: "A modern personal portfolio website built with React and Tailwind CSS.",
    image: projectImg,
    github: "https://github.com/MD-ABDULLAH24/Portfolio.git",
    demo: "https://portfolio-dves.vercel.app/",
    tags: ["NextJs", "Tailwind", "Responsive"],
  },
  {
    title: "E-commerce Store",
    desc: "A full-featured e-commerce web app with product search, cart, and checkout.",
    image: projectimg_2,
    github: "https://github.com/MD-ABDULLAH24/E-commers.web.git",
    demo: "https://e-commers-web-cr.vercel.app/",
    tags: ["React", "Redux", "Zustand"],
  },
  {
    title: "Software Company",
    desc: "A modern Software Company website built with React and Tailwind CSS.",
    image: projectimg_3,
    github: "https://github.com/MD-ABDULLAH24/Software-Chamber.git",
    demo: "https://software-chamber-chi.vercel.app/",
    tags: ["NextJs", "Tailwind", "Responsive"],
  },
 
];

const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">My Projects</h2>
        <p className="text-gray-400 text-center mb-12">
          Some of my recent works
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-[#181818] rounded-xl overflow-hidden shadow hover:shadow-lg transition flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2 text-[#f7b731]">{project.title}</h3>
                <p className="text-gray-300 mb-4 flex-1">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#222] text-xs px-3 py-1 rounded-full text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#f7b731] transition text-lg"
                    title="GitHub"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#f7b731] transition text-lg"
                    title="Live Demo"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
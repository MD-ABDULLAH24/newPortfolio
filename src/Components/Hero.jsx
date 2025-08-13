import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-black text-white flex flex-col justify-center items-center px-6 text-center min-h-screen md:min-h-[90vh]"
    >
      <h1 className="text-xl md:text-6xl font-bold text-teal-400">
        An amazing Front-End Developer
      </h1>

      <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mb-8 my-8">
        Hi, my name is Abdullah. I am a{" "}
        <span className="text-yellow-300">Frontend Developer</span> living in
        Bangladesh and working remotely with clients from around the world.
      </p>
      <div className="flex gap-6 flex-wrap justify-center">
        <a
          href="#contact"
          className="bg-yellow-400 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-500 transition"
        >
          Hire Me
        </a>
        <a
          href="#projects"
          className="border border-yellow-400 text-yellow-400 px-4 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 hover:text-black transition"
        >
          My Projects
        </a>
      </div>
    </section>
  );
};

export default Hero;

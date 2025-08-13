import React from "react";

const education = [
  {
    year: "2024 - 2025",
    degree: "fontend Web developer",
    institution: "Creative IT Institute",
    details: "forntend web development course completed",
  },
  {
    year: "2019 - 2021",
    degree: "Higher Secondary Certificate",
    institution: "Manikdi islamia senior madrasah",
    details: "Arts Major. GPA: 5.00/5.00",
  },
];

const experience = [
   {
    year: "2024 - 2025",
    role: "Self-Learning & Problem Solving",
    company: "Personal Development",
    details:
      "Solved 50+ coding problems to improve problem-solving and logical thinking skills.",
  },
  {
    year: "2024 / 2025",
    role: "Personal Projects",
    company: "Self-Initiated",
    details:
      "Built small React applications to implement concepts and improve frontend skills.",
  },
];

const Resume = () => {
  return (
    <section id="resume" className="bg-black text-white py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">Resume</h2>
        <p className="text-gray-400 text-center mb-12">
          My Education & Experience
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-[#f7b731]">Education</h3>
            <div className="flex flex-col gap-8">
              {education.map((edu, idx) => (
                <div key={idx} className="bg-[#181818] rounded-lg p-6 border-l-4 border-[#f7b731] shadow">
                  <span className="text-[#f7b731] font-semibold">{edu.year}</span>
                  <h4 className="text-xl font-bold mt-2">{edu.degree}</h4>
                  <p className="text-gray-300">{edu.institution}</p>
                  <p className="text-gray-400 text-sm mt-2">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-[#f7b731]">Experience</h3>
            <div className="flex flex-col gap-8">
              {experience.map((exp, idx) => (
                <div key={idx} className="bg-[#181818] rounded-lg p-[14px] border-l-4 border-[#f7b731] shadow">
                  <span className="text-[#f7b731] font-semibold">{exp.year}</span>
                  <h4 className="text-xl font-bold mt-2">{exp.role}</h4>
                  <p className="text-gray-300">{exp.company}</p>
                  <p className="text-gray-400 text-sm mt-2">{exp.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          
          <a
            href="/my_cv.pdf"
            className="bg-[#f7b731] text-black font-semibold rounded-full px-8 py-3 hover:bg-yellow-400 transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
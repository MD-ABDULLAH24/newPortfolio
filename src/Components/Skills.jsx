import React, { useEffect, useState } from "react";

const skills = [
  { name: "React", value: 90 },
  { name: "HTML5", value: 95 },
  { name: "NextJs", value: 70 },
  { name: "JavaScript", value: 85 },
  { name: "CSS3", value: 90 },
  { name: "Tailwind", value: 80 },
];

const AnimatedSkill = ({ name, value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    let incrementTime = 15;
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span>{name}</span>
        <span>{count}%</span>
      </div>
      <div className="w-full bg-[#222] rounded-full h-2">
        <div
          className="bg-[#f7b731] h-2 rounded-full transition-all duration-700"
          style={{ width: `${count}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="bg-black text-white py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">My Skills</h2>
        <p className="text-gray-400 text-center mb-12">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {skills.slice(0, 3).map((skill) => (
              <AnimatedSkill key={skill.name} name={skill.name} value={skill.value} />
            ))}
          </div>
          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {skills.slice(3).map((skill) => (
              <AnimatedSkill key={skill.name} name={skill.name} value={skill.value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React, { useState, useEffect } from 'react';
import myimg from '../assets/my_image.jpg';

const roles = [
    "Frontend Web Developer",
    " Web Designer",
    "React Developer",
];

const Hero = () => {
    const [currentRole, setCurrentRole] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        let typingTimeout;
        if (typing) {
            if (displayedText.length < roles[currentRole].length) {
                typingTimeout = setTimeout(() => {
                    setDisplayedText(roles[currentRole].slice(0, displayedText.length + 1));
                }, 60);
            } else {
                typingTimeout = setTimeout(() => {
                    setTyping(false);
                }, 1000);
            }
        } else {
            typingTimeout = setTimeout(() => {
                setDisplayedText('');
                setTyping(true);
                setCurrentRole((prev) => (prev + 1) % roles.length);
            }, 300);
        }
        return () => clearTimeout(typingTimeout);
    }, [displayedText, typing, currentRole]);

    return (
        <section
            id="hero"
            className="bg-black text-white min-h-screen flex items-center justify-center pb-16"
        >
            <div className="max-w-[1200px] mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10 px-6">
                {/* Left Side */}
                <div className="flex-1 min-w-[320px]">
                    <p className="text-yellow-400 tracking-widest text-xs mb-2">HELLO!</p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-2">
                        I'm <span className="text-white">Abdullah</span><br />
                        <span className="text-yellow-400">Mamun</span>
                    </h1>
                    <h2 className="text-lg md:text-xl font-normal mt-4 mb-8 h-7 transition-all duration-500">
                        <span className="border-r-2 border-yellow-400 pr-1 animate-pulse">
                            {displayedText}
                        </span>
                    </h2>
                    <div className="flex gap-4">
                        <a
                            href="#contact"
                            className="bg-yellow-400 text-black rounded-full px-7 py-2 font-bold text-base hover:bg-yellow-500 transition"
                        >
                            HIRE ME
                        </a>
                        <a
                            href="#projects"
                            className="border border-white text-white rounded-full px-7 py-2 font-bold text-base hover:bg-white hover:text-black transition"
                        >
                            MY WORKS
                        </a>
                    </div>
                </div>
                {/* Right Side */}
                <div className=" flex items-center justify-center">
                    <img
                        src={myimg}
                        alt="profile"
                        className="w-[650px] h-[650px] object-cover rounded-xl shadow-2xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
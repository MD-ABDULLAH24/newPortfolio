import React, { useState, useEffect } from 'react';
import myimg from '../assets/myImg.png';

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
            className="bg-black pt-6 text-white h-[700px] md:h-[750px] flex items-center justify-center "
        >
            <div className="max-w-[1200px]   w-full flex flex-col md:flex-row md:items-center justify-between gap-10 md:px-6 px-5">
                {/* Left Side */}
                <div className="flex-1  min-w-[420px] ml-0 md:ml-5">
                    <p className="text-yellow-400 tracking-widest text-lg md:text-lg mb-2">HELLO!</p>
                    <h1 className="text-4xl md:text-[60px] font-bold leading-tight mb-2">
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
                <div className="flex-1 min-w-[420px] flex items-center justify-center">
                    <img
                        src={myimg}
                        alt="profile"
                        className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] object-cover mr-20 md:mr-0 md:ml-25"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
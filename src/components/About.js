import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import {
  IoMailOutline,
  IoCallOutline,
  IoCalendarOutline,
  IoLocationOutline,
} from "react-icons/io5";
import {
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiDjango,
  SiFlask,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaGithub, FaGitAlt, FaNpm } from "react-icons/fa";
import avatar from "../assets/avatar.jpg";

const skills = [
  { name: "Python", icon: <FaPython className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
  { name: "ReactJS", icon: <FaReact className="text-cyan-400" /> },
  { name: "React Native", icon: <FaReact className="text-cyan-600" /> },
  { name: "Python (Django)", icon: <SiDjango className="text-green-700" /> },
  { name: "Python (Flask)", icon: <SiFlask className="text-gray-700" /> },
  { name: "NodeJS (ExpressJS)", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
];

const tools = [
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "NPM", icon: <FaNpm className="text-red-600" /> },
  { name: "MySQL", icon: <GrMysql className="text-blue-700" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
];

const About = () => {
  const [showStack, setShowStack] = useState(true);
  const [showTools, setShowTools] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <section
      id="about"
      className="py-4 px-4 sm:px-8 md:px-16 lg:px-20 mx-auto max-w-screen max-lg:min-h-screen"
    >
      <div className="flex lg:flex-row max-lg:flex-col items-start gap-6 md:gap-10">
        {/* Sidebar left */}
        <aside className="relative bg-[#232323] rounded-xl p-4 sm:p-6 shadow-lg flex flex-col max-lg:flex-row items-center mb-8 md:mb-0 w-full max-lg:max-w-[760px] lg:w-auto ">
          <div className="max-lg:flex max-lg:flex-col max-lg:ml-4">
            <div className="max-lg:flex max-lg:flex-row flex flex-col items-center ">
              <img
                src={avatar}
                alt="Richard Hanrick"
                className="w-24 h-24 sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] rounded-3xl object-cover border-4 border-[#383838] mb-6"
              />
              <button
                className="block lg:hidden bg-primary text-white px-4 py-2 rounded-lg mb-4 absolute top-0 right-0"
                onClick={() => setShowContact((prev) => !prev)}
              >
                {showContact ? "Hide Contact" : "Show Contact"}
              </button>
              <div className="max-lg:flex max-lg:flex-col max-lg:ml-4 max-lg:mt-6">
                <h1 className="text-xl max-lg:text-2xl font-bold text-white mb-2 ">
                  Minh Huy
                </h1>
                <p className="text-white text-[11px] sm:text-[12px] bg-sixth px-3 py-2 rounded-lg">
                  Web Developer
                </p>
              </div>
            </div>
            {/* Ẩn border, thông tin liên hệ, social trên mobile, tablet, iPad; chỉ hiện trên desktop (lg trở lên) */}
            <div className="w-full border-t border-[#383838] my-4 sm:my-6 hidden lg:block"></div>
            <ul
              className={`w-full text-xs sm:text-sm text-white space-y-2 mb-4 ${
                showContact ? "" : "hidden"
              } lg:block`}
            >
              <li className="flex flex-row items-center gap-2">
                <div className="p-2">
                  <IoMailOutline className="text-primary text-lg" />
                </div>
                <div>
                  <p className=" text-[12px] text-fifth whitespace-nowrap uppercase">
                    Email:
                  </p>
                  <div>
                    <a
                      href="mailto:liemminhhuy2003@gmail.com"
                      className="text-white truncate max-w-[180px] max-lg:max-w-[300px] inline-block align-middle"
                      title="liemminhhuy2003@gmail.com"
                    >
                      liemminhhuy2003@gmail.com
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex flex-row items-center gap-2">
                <div className="p-2">
                  <IoCallOutline className="text-primary text-lg" />
                </div>
                <div>
                  <p className="text-[12px] text-fifth whitespace-nowrap uppercase">
                    Phone:
                  </p>
                  <div>
                    <a href="tel:+12133522795" className="text-white truncate">
                      +84 976862582
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex flex-row items-center gap-2">
                <div className="p-2">
                  <IoCalendarOutline className="text-primary text-lg" />
                </div>
                <div>
                  <p className="text-[12px] text-fifth whitespace-nowrap uppercase">
                    Birthday:
                  </p>
                  <div>
                    <span className="text-white truncate">
                      December 16, 2003
                    </span>
                  </div>
                </div>
              </li>
              <li className="flex flex-row items-center gap-2">
                <div className="p-2">
                  <IoLocationOutline className="text-primary text-lg" />
                </div>
                <div>
                  <p className="text-[12px] text-fifth whitespace-nowrap uppercase">
                    Location:
                  </p>
                  <div>
                    <span className="text-white truncate">
                      Ho Chi Minh City
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex gap-4 mt-2 hidden lg:flex">
            <a
              href="https://facebook.com/"
              className="text-primary text-xl hover:scale-110 transition"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com/"
              className="text-primary text-xl hover:scale-110 transition"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/"
              className="text-primary text-xl hover:scale-110 transition"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </aside>
        {/* Right section: About Me text */}
        <div className="p-4 sm:p-6 rounded-lg shadow-lg bg-fourth border border-[#383838] w-full">
          <h2 className="text-2xl sm:text-3xl mb-4 text-white relative inline-block">
            About Me
            <span className="absolute left-0 -bottom-4 mx-auto h-[4px] w-[40%] bg-primary rounded-full"></span>
          </h2>
          <p className="text-xs sm:text-sm text-white mt-4 mb-4">
            I'm a passionate Web Developer based in Ho Chi Minh City, with a
            strong focus on frontend development and growing expertise in
            backend technologies. I work mainly with ReactJS and TailwindCSS to
            craft responsive, user-centric interfaces, and I’m currently
            expanding my full-stack skills through MERN Stack projects
          </p>
          <p className="mt-4 text-xs sm:text-sm text-white mb-4">
            I enjoy bringing ideas to life through clean code, practical design,
            and seamless user experiences. My recent projects include an
            e-learning platform, an online fashion store, and a score management
            system—each helping me build real-world experience and a
            problem-solving mindset. I'm excited to continue learning and
            contributing to impactful web products.
          </p>

          <div className="skills">
            <h2 className="text-[22px] mt-4 mb-4 text-white relative inline-block">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2"></div>
          </div>
          <div className="flex gap-4 mb-4">
            <button
              className={`bg-seventh text-white text-sm px-6 py-2 rounded-md shadow hover:bg-white hover:text-primary transition ${
                showStack ? "" : "opacity-50"
              }`}
              onClick={() => {
                setShowStack(true);
                setShowTools(false);
              }}
            >
              Tech Stack
            </button>
            <button
              className={`bg-seventh text-white text-sm px-6 py-2 rounded-md shadow hover:bg-white hover:text-primary transition ${
                showTools ? "" : "opacity-50"
              }`}
              onClick={() => {
                setShowTools(true);
                setShowStack(false);
              }}
            >
              Tools
            </button>
          </div>
          {showStack && (
            <div className="flex flex-wrap gap-4 mb-6 justify-center max-lg:gap-5 max-md:gap-2">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 bg-[#232323] px-10 py-4 rounded-lg shadow text-white text-sm w-52 max-lg:w-[11rem] max-md:w-full justify-center"
                >
                  {skill.icon}
                  <span className="truncate">{skill.name}</span>
                </div>
              ))}
            </div>
          )}
          {showTools && (
            <div className="flex flex-wrap gap-4 mb-6 justify-center">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center gap-2 bg-[#232323] px-10 py-4 rounded-lg shadow text-white text-sm w-52 max-lg:w-[11rem] max-md:w-full justify-center"
                >
                  {tool.icon}
                  <span className="truncate">{tool.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;

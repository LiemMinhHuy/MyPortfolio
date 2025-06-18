import React from "react";
import avatar from "../assets/avatar.jpg";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.jpg";

import {
  IoMailOutline,
  IoCallOutline,
  IoCalendarOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useState } from "react";

const contactInfo = [
  {
    icon: <IoMailOutline className="text-primary text-lg" />,
    label: "Email",
    value: "liemminhhuy2003@gmail.com",
    href: "mailto:liemminhhuy2003@gmail.com",
  },
  {
    icon: <IoCallOutline className="text-primary text-lg" />,
    label: "Phone",
    value: "+84 976862582",
    href: "tel:+84976862582",
  },
  {
    icon: <IoCalendarOutline className="text-primary text-lg" />,
    label: "Birthday",
    value: "December 16, 2003",
  },
  {
    icon: <IoLocationOutline className="text-primary text-lg" />,
    label: "Location",
    value: "Ho Chi Minh City",
  },
];

// Tách dữ liệu dự án thành mảng để dễ thêm/sửa/xóa
const projects = [
  {
    title: "My Portfolio",
    category: "Web development",
    image: project1,
    link: "https://github.com/LiemMinhHuy/MyPortfolio",
    iconSize: "text-[20px]",
  },
  {
    title: "Fashion Store",
    category: "Web development",
    image: project2,
    link: "https://github.com/LiemMinhHuy/FashionStore",
    iconSize: "text-[16px]",
  },
  {
    title: "E-Learning",
    category: "Web development",
    image: project3,
    link: "https://github.com/LiemMinhHuy/E-Learning",
    iconSize: "text-[16px]",
  },
  {
    title: "Score Management",
    category: "Applications",
    image: project4,
    link: "https://github.com/huyapi2707/Score-Management",
    iconSize: "text-[16px]",
  },
  // Thêm dự án mới tại đây
];

const Portfolio = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <section
      id="portfolio"
      className="py-4 px-4 sm:px-8 md:px-16 lg:px-20 mx-auto max-w-screen max-lg:min-h-screen"
    >
      <div className="flex lg:flex-row max-lg:flex-col items-start gap-6 md:gap-10">
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
        <div className="max-w-[820px] w-full p-6 rounded-lg shadow-lg bg-fourth border border-[#383838]">
          <h2 className="text-[32px] mb-4 text-white relative inline-block">
            Portfolio
            <span className="absolute left-0 -bottom-1 mx-auto h-1 w-[40%] bg-primary rounded-full"></span>
          </h2>
          <div className="mt-8">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <li
                  key={idx}
                  className="block animate-scaleUp"
                  data-filter-item
                  data-category={project.category.toLowerCase()}
                >
                  <a
                    href={project.link}
                    className="w-full block"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Xem demo ${project.title}`}
                  >
                    <figure className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-4 group">
                      <div
                        className={`project-item-icon-box bg-[#232323] text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${project.iconSize} p-[18px] rounded-[12px] opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 z-10 transition-all duration-300 flex items-center justify-center`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </div>
                      <img
                        src={project.image}
                        alt={`${project.title} demo`}
                        loading="lazy"
                        className="w-full h-full object-cover transition duration-300 group-hover:blur-none group-hover:scale-105"
                      />
                    </figure>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-fifth">{project.category}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

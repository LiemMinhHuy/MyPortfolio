import React, { useEffect, useState } from "react";
import avatar from "../assets/avatar.jpg";

const TITLES = [
  "Web Developer",
  "Full Stack Engineer",
];

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (displayedText.length < TITLES[titleIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText(
            TITLES[titleIndex].slice(0, displayedText.length + 1)
          );
        }, 80);
      } else {
        // Đợi 2 giây sau khi gõ xong
        timeout = setTimeout(() => setTyping(false), 1000);
      }
    } else {
      // Ẩn text dần đi
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 80);
      } else {
        // Chuyển sang title tiếp theo
        setTitleIndex((prev) => (prev + 1) % TITLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayedText, typing, titleIndex]);
  return (
    <section className="flex flex-col md:flex-row items-center justify-start min-h-screen xl:min-h-[90vh] px-2 sm:px-4 md:px-20 lg:px-40 py-6 md:py-12 w-full bg-black">
      {/* Left text */}
      <div className="md:w-1/2 w-full mb-8 md:mb-0 flex flex-col items-center md:items-start text-center md:text-left">
        <p className="text-sm sm:text-base md:text-xl font-bold mb-3 text-primary">
          Hello, I'm
          <span className="block text-white text-2xl sm:text-3xl md:text-5xl">Minh Huy</span>
        </p>
        <p className="text-base sm:text-lg md:text-xl text-white mb-3 min-h-[28px]">
          {displayedText}
          <span className="inline-block w-1 h-5 bg-primary align-middle animate-pulse ml-1"></span>
        </p>

        <p className="text-xs sm:text-sm text-white mb-3">Welcome to my website.</p>
        <button className="bg-white text-primary font-semibold px-4 sm:px-6 py-2 rounded-full shadow hover:bg-primary hover:text-white transition">
          Contact Me
        </button>
      </div>
      {/* Right avatar */}
      <div className="md:w-1/2 w-full flex justify-center">
        <img
          src={avatar}
          alt="Avatar"
          className="w-28 h-28 sm:w-36 sm:h-36 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-white shadow-[0_0_80px_0_#fec36180]"
        />
      </div>
    </section>
  );
}

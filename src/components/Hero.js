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
    <section className="flex flex-col md:flex-row items-center justify-between min-h-[90vh] md:px-60 py-12">
      {/* Left text */}
      <div className="md:w-1/2 w-full mb-8 md:mb-0 ">
        <p className="text-sm md:text-xl font-bold mb-4 text-primary ">
          Hello, I'm
          <span className="block text-white text-5xl md:text-5xl">Minh Huy</span>
        </p>
        <p className="text-xl text-white mb-4 min-h-[32px]">
          {displayedText}
          <span className="inline-block w-1 h-6 bg-primary align-middle animate-pulse ml-1"></span>
        </p>

        <p className="text-sm text-white mb-4">Welcome to my website.</p>
        <button className="bg-white text-primary font-semibold px-6 py-2 rounded-full shadow hover:bg-primary hover:text-white transition">
          Contact Me
        </button>
      </div>
      {/* Right avatar */}
      <div className="md:w-1/2 w-full flex justify-center">
        <img
          src={avatar}
          alt="Avatar"
          className="w-60 h-60 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-[0_0_80px_0_#fec36180]"
        />
      </div>
    </section>
  );
}

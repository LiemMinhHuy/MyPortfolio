import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <main className="font-fontFamily text-gray-900 bg-black text-white">
      <nav className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 py-4 shadow-md gap-4 sm:gap-0">
        <div className="text-base font-semibold text-primary cursor-pointer" onClick={() => window.location.href = '/MyPortfolioo/'}>
          myPortfolioo
        </div>
        <div className="space-x-2 sm:space-x-4 font-semibold text-xs sm:text-sm flex items-end">
          {[
            { to: "/MyPortfolio/", label: "Home" },
            { to: "/MyPortfolio/about", label: "About" },
            { to: "/MyPortfolio/portfolio", label: "Portfolio" },
            { to: "/MyPortfolio/contact", label: "Contact" },
          ].map((item) => (
            <Link key={item.to} to={item.to} className="relative pb-1 px-1">
              <span>{item.label}</span>
              {(item.to === '/MyPortfolio/' ? location.pathname === '/MyPortfolio/' : location.pathname.startsWith(item.to)) && (
                <span className="absolute left-0 right-0 -bottom-1 mx-auto h-1 w-[90%] bg-primary rounded-full"></span>
              )}
            </Link>
          ))}
        </div>
        <div className="mt-2 sm:mt-0">
          <a
            href="https://github.com/LiemMinhHuy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center w-6 h-6 hover:scale-110 transition-transform"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              imageRendering="optimizeQuality"
              fillRule="evenodd"
              clipRule="evenodd"
              viewBox="0 0 512 499.368"
            >
              <path
                fill="#fff"
                fillRule="nonzero"
                d="M256.003 0C114.555 0 0 114.555 0 256.003c0 113.286 73.28 208.961 175.038 242.865 12.796 2.247 17.586-5.433 17.586-12.153 0-6.077-.309-26.225-.309-47.686-64.313 11.844-80.941-15.674-86.058-30.055-2.896-7.37-15.359-30.1-26.269-36.177-8.948-4.808-21.752-16.652-.31-16.961 20.168-.309 34.574 18.564 39.382 26.244 23.038 38.732 59.839 27.828 74.555 21.101 2.227-16.627 8.947-27.828 16.318-34.239-56.968-6.386-116.467-28.471-116.467-126.399 0-27.827 9.907-50.866 26.225-68.787-2.562-6.41-11.51-32.655 2.562-67.853 0 0 21.436-6.72 70.409 26.244 20.483-5.767 42.227-8.638 63.998-8.638 21.751 0 43.52 2.896 63.997 8.638 48.973-33.279 70.39-26.244 70.39-26.244 14.09 35.192 5.117 61.443 2.562 67.853 16.318 17.921 26.244 40.625 26.244 68.787 0 98.237-59.84 119.988-116.801 126.399 9.282 8.014 17.277 23.373 17.277 47.371 0 34.238-.309 61.751-.309 70.389 0 6.721 4.808 14.735 17.586 12.179C438.739 464.964 512 368.955 512 256.003 512 114.555 397.445 0 256.003 0z"
              />
            </svg>
          </a>
        </div>
      </nav>

      <Routes>
        <Route path="/MyPortfolio/" element={<Hero />} />
        <Route path="/MyPortfolio/about" element={<About />} />
        <Route path="/MyPortfolio/portfolio" element={<Portfolio />} />
        <Route path="/MyPortfolio/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

export default App;

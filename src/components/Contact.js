import React from "react";
import avatar from "../assets/avatar.jpg";
import {
  IoMailOutline,
  IoCallOutline,
  IoCalendarOutline,
  IoLocationOutline,
  IoPaperPlane,
} from "react-icons/io5";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

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

const Contact = () => {
  return (
    <section id="contact" className="py-4 px-20 mx-auto max-w-7xl">
      <div className="flex flex-col md:flex-row items-start gap-10">
        <aside className="bg-[#232323] rounded-xl p-6 shadow-lg flex flex-col items-center mb-8 md:mb-0">
          <img
            src={avatar}
            alt="Minh Huy"
            className="w-[150px] h-[150px] rounded-3xl object-cover border-4 border-[#383838] mb-6"
          />
          <h1 className="text-xl font-bold text-white mb-2">Minh Huy</h1>
          <p className="text-white text-[12px] bg-sixth px-3 py-2 rounded-lg">
            Web Developer
          </p>
          <div className="w-full border-t border-[#383838] my-6"></div>
          <ul className="w-full text-sm text-white space-y-2 mb-4">
            {contactInfo.map((item) => (
              <li
                key={item.label}
                className="flex flex-row items-center gap-2"
              >
                <div className="p-2">{item.icon}</div>
                <div>
                  <p className="text-[12px] text-fifth whitespace-nowrap uppercase">
                    {item.label}:
                  </p>
                  <div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white truncate max-w-[180px] inline-block align-middle hover:underline"
                        title={item.value}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-white truncate max-w-[180px] inline-block align-middle">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex gap-4 mt-2">
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
          <div className="flex justify-center">
            <section className="relative h-[360px] w-full max-w-3xl rounded-2xl mb-8 border border-[#232323] overflow-hidden">
              <figure className="h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62722.510662201414!2d106.60428711137872!3d10.72237779214973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752dff8bced319%3A0x538294f72b6e6b33!2zUXXhuq1uIDgsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1750220518049!5m2!1svi!2s"
                  className="w-full h-full border-0"
                  style={{ filter: "grayscale(1) invert(1)" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                />
              </figure>
            </section>
          </div>
          <h3 className="text-3xl mb-4 text-white font-semibold">
            Contact Form
          </h3>
          <form
            action="#"
            className="w-full max-w-[820px] mx-auto rounded-2xl mt-8"
            autoComplete="off"
          >
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <input
                type="text"
                name="fullname"
                className="form-input flex-1 px-5 py-4 rounded-lg bg-[#181818] text-white placeholder:text-fifth focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Full name"
                required
              />
              <input
                type="email"
                name="email"
                className="form-input flex-1 px-5 py-4 rounded-lg bg-[#181818] text-white placeholder:text-fifth focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Email address"
                required
              />
            </div>
            <textarea
              name="message"
              className="form-input w-full px-5 py-4 rounded-lg bg-[#181818] text-white placeholder:text-fifth focus:outline-none focus:ring-2 focus:ring-primary mb-6"
              placeholder="Your Message"
              required
              rows={5}
            ></textarea>
            <div className="flex justify-end">
              <button
                className="form-btn flex items-center justify-center gap-2 bg-primary text-white text-base font-semibold px-6 py-4 rounded-lg shadow hover:bg-white hover:text-primary transition disabled:opacity-100"
                type="submit"
                disabled
              >
                <IoPaperPlane className="text-lg" />
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

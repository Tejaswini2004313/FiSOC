import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //set toggle Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  // navitems array
  const navItems = [
    { link: "Home", path: "home" },
    { link: "Past events", path: "pastEvents" },
    { link: "Content", path: "content" },
    { link: "About", path: "about" },
    { link: "ContactUs", path: "contactUs" },
  ];

  return (
    <header className="w-full bg-bgcolor md:bg-trasnparent fixed top-0 left-0 right-0">
      <nav
        className={
          'py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 right-0 border bg-bgcolor duration-300" : ""}'
        }
      >
        <div className="flex justify-between items-center text-base gap-10">
          <a
            href=""
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img src={logo} alt="" className="w-10 inline-block items-center" />
            <span className="text-[#88E1FF]">FiSOC</span>
          </a>

          {/* nav items */}
          <ul className="hidden md:flex gap-10 text-whitesmoke text-bold">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="block cursor-pointer text-base text-whitesmoke hover:text-blue first:font-medium"
              >
                <a
                  href={`#${item.path}`}
                  className="text-whitesmoke hover:text-whitesmoke"
                >
                  {item.link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

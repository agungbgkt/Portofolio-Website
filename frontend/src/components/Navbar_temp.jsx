import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false); // background saat discroll
  const [activeMenu, setActiveMenu] = useState("Home"); // menu aktif

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ========= DESKTOP NAVBAR ========= */}
      <div
        className={`
          hidden md:flex navbar-desk fixed top-0 left-0 w-full z-50
          flex items-center justify-between py-3 px-10
          transition-all duration-500 
          ${active ? "bg-black/40 backdrop-blur-md" : "bg-transparent"}
        `}
      >
        {/* Logo */}
        <h1 className="text-3xl font-semibold text-white">agungbgkt</h1>

        {/* Desktop Menu */}
        <ul className="flex items-center gap-10">
          {["Home", "About", "Projects", "Services", "Contact"].map((menu) => (
            <li key={menu} className="relative group">
              <a
                href={`#${menu.toLowerCase()}`}
                onClick={() => setActiveMenu(menu)}
                className={`relative text-lg font-medium transition-all duration-300
                  ${
                    activeMenu === menu
                      ? "text-white"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
              >
                {menu}
                <span
                  className={`absolute -bottom-1 left-1/2 w-full h-[2px] bg-white rounded-full transform -translate-x-1/2 transition-all duration-300
                  ${
                    activeMenu === menu
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* ========= MOBILE NAVBAR ========= */}
      <div className="md:hidden Navbar py-7 flex items-center justify-between transition-all duration-500">
        {/* Logo */}
        <h1 className="text-3xl font-semibold text-white p-1">agungbgkt</h1>

        {/* Floating menu center */}
        <ul
          className={`
            flex items-center gap-4 
            fixed left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md p-4
            rounded-br-2xl rounded-bl-2xl z-50 transition-all duration-500
            ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}
          `}
        >
          {["Home", "About", "Projects", "Services", "Contact"].map((menu) => (
            <li key={menu} className="relative group">
              <a
                href={`#${menu.toLowerCase()}`}
                onClick={() => setActiveMenu(menu)}
                className={`relative text-base font-medium transition-all ${
                  activeMenu === menu
                    ? "text-white"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {menu}
                <span
                  className={`absolute -bottom-1 left-1/2 w-full h-[2px] bg-white rounded-full transform -translate-x-1/2 transition-all duration-300
                  ${
                    activeMenu === menu
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;

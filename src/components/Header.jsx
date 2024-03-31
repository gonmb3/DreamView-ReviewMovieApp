import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import ticketIcon from "../assets/images/TicketIcon.png";

ticketIcon

const Header = () => {
  const navLinks = [
    { path: "/", text: "Destacadas" },
    { path: "/cartelera", text: "Cartelera" },
  ];

  return (
    <header className="w-full py-1 bg-[#191B19] opacity-95 px-[.5rem] lg:px-[2.3rem] xl:px-[4.3rem] text-white fixed z-50">
      <div className="flex items-center justify-between">
        {/* logo */}
        <div className="">
          <Link to="/">
            <img className="min-w-[85px]" src={logo} />{" "}
          </Link>
        </div>
        {/* nav links */}
        <div className="flex gap-7 items-center font-thin tracking-wide text-[18.5px]">
          {navLinks.map((link, i) => (
            <ul className="hidden md:block  " key={i}>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "  block font-bold" : ""
                  }
                  to={link.path}
                >
                  {link.text}
                </NavLink>
              </li>
            </ul>
          ))}
          {/*  buy tickets btn */}
          <div className="ml-6 hidden md:block">
            <Link to="/reseñas">
              <button className="bg-[#554F95] px-6 py-[8.7px] rounded-md ">
                Comprar Ticket
              </button>
            </Link>
          </div>
          
          {/* responive mobile ticket btn  */}
          <div className="ml-6  md:hidden">
            <Link to="/reseñas">
              <button className=" ">
              <img src={ticketIcon} className="w-14 boxShadow"/>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

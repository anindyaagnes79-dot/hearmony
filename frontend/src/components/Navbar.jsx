import React, { useState } from "react"
import MaskGroup from "../assets/Mask group.png"
import { Link, NavLink } from "react-router-dom"

const Navbar = ({ setPage }) => {
  const [activePage, setActivePage] = useState("home")



  const linkClass = (page) =>
    `text-base font-semibold transition ${
      activePage === page
        ? "text-[#355E3B]"
        : "text-white hover:text-[#355E3B] cursor-pointer"
    }`

  return (
    <nav className="fixed top-0 left-0 w-full bg-black z-[9999] shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* Logo */}
        <NavLink to="/" onClick={() => setActivePage("home")}>
          <img
          src={MaskGroup}
          alt="Hearmony Logo"
          className="h-10 cursor-pointer"
          />
        </NavLink>
        

        {/* Links */}
        <div className="flex gap-8">
          <Link to="/" className={linkClass("home")} onClick={() => setActivePage("home")}>HOME</Link>

          <Link to="/reservation" className={linkClass("reservation")} onClick={() => setActivePage("reservation")}>RESERVATION</Link>

          <Link to="/merchandise" className={linkClass("merchandise")} onClick={() => setActivePage("reservation")}>MERCHANDISE</Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.scss";
import Banner from "../../assets/img.JPG";
import Banner2 from "../../assets/img2.JPG";
import Banner3 from "../../assets/img3.JPG";
import Banner4 from "../../assets/img4.JPG";

import { Slide } from "react-slideshow-image";

const Header = ({ clickFn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => setIsOpen(false);

  const images = [Banner, Banner2, Banner3, Banner4];

  return (
    <>
      {/* <nav className="navbar  text-white px-5 py-3 d-flex justify-content-between align-items-center shadow  fixed-top">
        <Link to="/" className="navbar-brand text-danger">
          <b> Batam Aero Technic</b>
        </Link>

        <button className="d-lg-none btn text-white" onClick={toggleMenu}>
          menu
          <i className="bi bi-list" style={{ fontSize: "1.5rem" }}></i>
        </button>

        <ul className="d-none d-lg-flex justify-content-between align-items-center list-unstyled m-0 w-25  cursor-pointer">
          <li className="mb-0 hover-underline">
            <p className="mb-0 ">About us</p>
          </li>
          <li className="mb-0 hover-underline">
            <p className="mb-0 ">Services</p>
          </li>
          <li className="mb-0 hover-underline">
            <p className="mb-0 ">Catalog</p>
          </li>
          <li className="mb-0 hover-underline">
            <p className="mb-0 ">Contact</p>
          </li>
        </ul>
      </nav> */}
      <div
        className={`navbar fixed-top py-0 ${
          scrolled ? "bg-white text-dark shadow" : "text-white "
        }`}
      >
        <nav
          className={` container   py-3  d-flex justify-content-between align-items-center ${
            scrolled ? "bg-white text-dark " : "text-white "
          }`}
        >
          <Link to="/" className="navbar-brand text-danger fs-25">
            <b className="text-danger">Batam Aero Technic</b>
          </Link>

          <button className="d-lg-none btn" onClick={toggleMenu}>
            menu
          </button>

          <ul className="d-none d-lg-flex justify-content-between align-items-center list-unstyled m-0 gap-5 cursor-pointer">
            <li
              className={`mb-0 hover-underline   ${
                scrolled ? "" : "text-white"
              }`}
              onClick={() => clickFn("about")}
            >
              <p
                className={`mb-0  ${
                  location?.pathname === "/about" ? "active" : ""
                }`}
              >
                About us
              </p>
            </li>
            <li
              className={`mb-0 hover-underline ${scrolled ? "" : "text-white"}`}
              onClick={() => clickFn("services")}
            >
              <p
                className={`mb-0  ${
                  location?.pathname === "/services" ? "active" : ""
                }`}
              >
                Services
              </p>
            </li>
            <li
              className={`mb-0 hover-underline ${scrolled ? "" : "text-white"}`}
              onClick={() => clickFn("catalog")}
            >
              <p
                className={`mb-0  ${
                  location?.pathname === "/catalog" ? "active" : ""
                }`}
              >
                Catalog
              </p>
            </li>
            <li
              className={`mb-0 hover-underline ${scrolled ? "" : "text-white"}`}
            >
              <p
                className={`mb-0  ${
                  location?.pathname === "/contact" ? "active" : ""
                }`}
              >
                Contact
              </p>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile view */}
      <div className={`mobile-drawer ${isOpen ? "open" : ""}`}>
        <button className="btn text-white close-btn" onClick={closeMenu}>
          {/* <i className="bi bi-x-lg fs-4"></i> */}
        </button>
        <ul className="list-unstyled mt-4">
          <li>
            <p className="text-white d-block py-2" onClick={closeMenu}>
              Home
            </p>
          </li>
          <li>
            <p
              className="text-white d-block py-2"
              to="/about"
              onClick={closeMenu}
            >
              About
            </p>
          </li>
          <li>
            <p
              className="text-white d-block py-2"
              to="/contact"
              onClick={closeMenu}
            >
              Contact
            </p>
          </li>
        </ul>
      </div>
      {/* <div className="banner">
        <div className="banner-content w-60">
          <h1>Trusted MRO Partner in Southeast Asia</h1>
          <p className="">Explore Services</p>
        </div>
      </div>
      <div className="banner">
        <div className="banner-content w-60">
          <h1>Trusted MRO Partner in Southeast Asia</h1>
          <p className="">Explore Services</p>
        </div>
      </div> */}

      <Slide
        slidesToScroll={1}
        autoplay={true}
        slidesToShow={1}
        infinite={true}
        transitionDuration={1000}
        duration={3000}
      >
        {images?.map((image, index) => (
          <div
            className="banner"
            key={index}
            style={{
              backgroundImage: `url(${image})`,
            }}
          >
            <div className="banner-content w-60">
              <h1>Trusted MRO Partner in Southeast Asia</h1>
              <p className="">Explore Services</p>
            </div>
          </div>
        ))}
      </Slide>

      {isOpen && <div className="drawer-backdrop" onClick={closeMenu}></div>}
    </>
  );
};

export default Header;

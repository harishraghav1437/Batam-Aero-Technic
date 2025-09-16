import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.scss";
import Logo from "/img/batam_logo.png";
import MRO from "/img/MRO.png";
import Banner from "/img/img1.JPG";
import Banner2 from "/img/img2.JPG";
import Banner3 from "/img/img3.JPG";
import Banner4 from "/img/img4.JPG";
import Banner5 from "/img/img5.JPG";
import Banner6 from "/img/img6.JPG";
import Banner7 from "/img/img7.JPG";

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

  const images = [
    {
      id: 1,
      url: Banner,
      title: "Trusted MRO Partner in Southeast Asia",
      para: "Explore Services",
    },
    {
      id: 2,
      url: MRO,
      title: "",
      para: "",
    },
    {
      id: 3,
      url: Banner2,
      title: "Trusted MRO Partner in Southeast Asia",
      para: "Explore Services",
    },
    {
      id: 5,
      url: Banner3,
      title: "Trusted MRO Partner in Southeast Asia",
      para: "Explore Services",
    },
    {
      id: 6,
      url: Banner4,
      title: "Trusted MRO Partner in Southeast Asia",
      para: "Explore Services",
    },
    {
      id: 7,
      url: Banner5,
      title: "Trusted MRO Partner in Southeast Asia",
      para: "Explore Services",
    },
  ];

  return (
    <>
      <div
        className={`navbar fixed-top py-0 ${
          scrolled ? "bg-white text-dark shadow" : "text-white "
        }`}
      >
        <nav
          className={` container   py-3 d-flex justify-content-between align-items-center ${
            scrolled ? "bg-white text-dark " : "text-white "
          }`}
        >
          <Link to="/" className="navbar-brand text-danger p-0 ">
            <img
              src={Logo}
              alt="Batam Aero Technic"
              height={60}
              width={300}
              className="object-fit-cover"
            />
          </Link>

          <button className="d-lg-none btn" onClick={toggleMenu}>
            <img src="/img/menu.png" alt="menu" height={20} />
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
              onClick={() => clickFn("certifications")}
            >
              <p
                className={`mb-0  ${
                  location?.pathname === "/certifications" ? "active" : ""
                }`}
              >
                Certifications
              </p>
            </li>
            <li
              className={`mb-0 hover-underline ${scrolled ? "" : "text-white"}`}
              onClick={() => clickFn("clients")}
            >
              <p
                className={`mb-0  ${
                  location?.pathname === "/clients" ? "active" : ""
                }`}
              >
                Customers
              </p>
            </li>

            <li
              className={`mb-0 hover-underline ${scrolled ? "" : "text-white"}`}
              onClick={() => clickFn("newsroom")}
            >
              <p
                className={`mb-0  ${
                  location?.pathname === "/newsroom" ? "active" : ""
                }`}
              >
                Newsroom
              </p>
            </li>

            <li
              className={`mb-0 hover-underline ${scrolled ? "" : "text-white"}`}
              onClick={() => clickFn("contact")}
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
            <p
              className="text-white d-block py-2"
              onClick={() => {
                clickFn("home");
                closeMenu();
              }}
            >
              Home
            </p>
          </li>
          <li>
            <p
              className="text-white d-block py-2"
              to="/about"
              onClick={() => {
                clickFn("about");
                closeMenu();
              }}
            >
              About
            </p>
          </li>
          <li>
            <p
              className="text-white d-block py-2"
              to="/services"
              onClick={() => {
                clickFn("services");
                closeMenu();
              }}
            >
              Services
            </p>
          </li>
          <li>
            <p
              className="text-white d-block py-2"
              to="/certifications"
              onClick={() => {
                clickFn("certifications");
                closeMenu();
              }}
            >
              Certifications
            </p>
          </li>
          <li>
            <p
              className="text-white d-block py-2"
              to="/clients"
              onClick={() => {
                clickFn("clients");
                closeMenu();
              }}
            >
              Customers
            </p>
          </li>
          <li>
            <p
              className="text-white d-block py-2"
              to="/newsroom"
              onClick={() => {
                clickFn("newsroom");
                closeMenu();
              }}
            >
              Newsroom
            </p>
          </li>
          <li>
            <p
              className="text-white d-block py-2"
              to="/contact"
              onClick={() => {
                clickFn("contact");
                closeMenu();
              }}
            >
              Contact
            </p>
          </li>
        </ul>
      </div>

      <div className="custom">
        <Slide
          slidesToScroll={1}
          autoplay={true}
          slidesToShow={1}
          infinite={true}
          arrows={true}
          transitionDuration={1000}
          duration={4000}
          style={{ height: "600px !important" }}
        >
          {images?.map((res, i) => (
            <div className="position-relative banner h-auto" key={i}>
              <img
                src={res.url}
                alt="img"
                className="w-100 img-fluid object-fit-contain d-block h-100"
              ></img>

              <div className="banner-content" s>
                <div className="">
                  <h1>{res.title}</h1>
                  <p className="">{res.para}</p>{" "}
                </div>
              </div>
            </div>
          ))}
        </Slide>
      </div>
      {isOpen && <div className="drawer-backdrop" onClick={closeMenu}></div>}
    </>
  );
};

export default Header;

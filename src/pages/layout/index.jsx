import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Header";
import About from "../about";
import Catalog from "../catalog";
import Footer from "../footer";
import Services from "../sevices";
import Contact from "../contact";
import Certificate from "../certificates";
import Clients from "../Clients";
import Newsroom from "../Newsroom";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const section = location.pathname.slice(1);
    if (section) {
      const scrollToSection = () => {
        const el = document.getElementById(section);
        if (el) {
          const yOffset = -100;
          const y =
            el.getBoundingClientRect().top + window.pageYOffset + yOffset;

          window.scrollTo({ top: y, behavior: "smooth" });
        }
      };

      scrollToSection();

      const timeout = setTimeout(scrollToSection, 100);
      return () => clearTimeout(timeout);
    }
  }, [location.pathname]);

  const clickFn = (section) => {
    navigate(`/${section}`);
  };

  return (
    <>
      <Header clickFn={clickFn} />
      <div className=" pt-4 pb-0 text-center text-danger">
        <h5
          className="text-danger text-center mb-0"
          style={{ fontStyle: "italic" }}
        >
          “The Airline’s needs are our Mandate”
        </h5>
      </div>
      <div id="about" className="py-5">
        <About />
      </div>
      <div id="services" className="">
        <Services />
      </div>
      {/* <div id="catalog" className="pb-5">
        <Catalog />
      </div> */}
      <div id="certifications" className="py-5">
        <Certificate />
      </div>
      <div id="clients" className="py-0">
        <Clients />
      </div>

      <div id="newsroom" className="py-5">
        <Newsroom />
      </div>
      <div id="contact" className="py-0">
        <Contact />
      </div>
      {/* <div id="footer" className=""> */}
      <Footer />
      {/* </div> */}
    </>
  );
};

export default Home;

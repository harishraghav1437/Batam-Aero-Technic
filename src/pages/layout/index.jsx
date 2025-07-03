// import { useLocation, useNavigate } from "react-router-dom";
// import Header from "../Header";
// import About from "../about";
// import Catalog from "../catalog";
// import Footer from "../footer";
// import Services from "../sevices";

// const Home = () => {
//   // const location = useLocation();
//   const navigate = useNavigate();

//   const clickFn = (section) => {
//     navigate(`/${section}`);
//     // const section = location.pathname.slice(1); // e.g. "/about" => "about"
//     if (section) {
//       const scrollToSection = () => {
//         const el = document.getElementById(section);
//         if (el) {
//           el.scrollIntoView({ behavior: "smooth" });
//         }
//       };

//       scrollToSection();

//       const timeout = setTimeout(scrollToSection, 300);

//       return () => clearTimeout(timeout);
//     }
//   };
//   return (
//     <>
//       <Header clickFn={(e) => clickFn(e)} />
//       <div id="about" className="py-5">
//         <About />
//       </div>
//       <div id="services" className="">
//         <Services />
//       </div>
//       <div id="catalog" className="pb-5">
//         <Catalog />
//       </div>
//       <div id="footer" className="">
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Home;

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Header";
import About from "../about";
import Catalog from "../catalog";
import Footer from "../footer";
import Services from "../sevices";

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
      <div id="about" className="py-5">
        <About />
      </div>
      <div id="services" className="py-5">
        <Services />
      </div>
      <div id="catalog" className="pb-5">
        <Catalog />
      </div>
      <div id="footer" className="">
        <Footer />
      </div>
    </>
  );
};

export default Home;

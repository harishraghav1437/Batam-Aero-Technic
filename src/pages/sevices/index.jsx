import "./Services.scss";
import ServiceImg from "../../assets/service.JPG";
import Service2 from "../../assets/service2.JPG";
import Service3 from "../../assets/service3.JPG";
import Service4 from "../../assets/service4.JPG";
import Service5 from "../../assets/img.JPG";
import Service6 from "../../assets/img3.JPG";
import { Slide } from "react-slideshow-image";

const Services = () => {
  const responsiveSettings = [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  const services = [
    {
      image: ServiceImg,
      title: "Heavy Maintenance",
      description:
        "Full C-checks, D-checks, and structural modifications on narrow-body and wide-body aircraft.",
    },
    {
      image: Service2,
      title: "Component Repair & Overhaul",
      description:
        "Avionics, pneumatics, hydraulics, and electro-mechanical shops certified under DGCA & EASA.",
    },
    {
      image: Service3,
      title: "Composite & Sheet Metal Works",
      description:
        "Repair of nacelles, flight control surfaces, and other composite components with OEM specs.",
    },
    {
      image: Service4,
      title: "Cabin Refurbishment",
      description:
        "Interior upgrades, configuration changes, and inflight entertainment installation.",
    },
    {
      image: Service5,
      title: "AOG Support",
      description:
        "24/7 response teams across Southeast Asia for grounded aircraft recovery.",
    },
    {
      image: Service6,
      title: "Engineering",
      description:
        "Planning, records, reliability tracking, and modification support by CAMO-certified staff.",
    },
  ];
  return (
    <>
      <div className="container  py-2">
        <div className="services">
          <h3 className="text-danger text-center mb-4">Our Services</h3>

          <div className="item">
            <Slide
              // slidesToScroll={3}
              autoplay={true}
              // slidesToShow={3}
              infinite={true}
              transitionDuration={1000}
              duration={3000}
              responsive={responsiveSettings}
            >
              {services?.map((res, index) => (
                <div
                  className="card mx-2 bg-white"
                  key={index}
                  style={{ height: "330px", color: "#6c757d" }}
                >
                  <img
                    className=" object-fit-cover rounded-top"
                    src={res?.image}
                    height={200}
                    alt="services"
                  />
                  <div className="card-body">
                    <p>
                      {" "}
                      <b>{res?.title}</b>
                    </p>
                    <p
                      className=" 
                    "
                    >
                      {res?.description}
                    </p>
                  </div>
                </div>
              ))}
            </Slide>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

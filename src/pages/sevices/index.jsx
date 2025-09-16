import "./Services.scss";
import ServiceImg from "/img/Base_Maintenance.JPG";
import Service2 from "/img/Line_Maintenance.JPG";
import Service3 from "/img/Component_Maintenance.JPG";
import Service4 from "/img/Warehouse.JPG";
import Service5 from "/img/Engine_Module_Replacement.JPG";
import Service6 from "/img/Engineering_Services.JPG";
import Service7 from "/img/Painting.JPG";
import Service8 from "/img/service4.JPG";
import Service9 from "/img/img5.JPG";

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
      title: "Base Maintenance – Heavy Maintenance",
      description:
        "C & D checks, structural repairs, and cabin modifications with full compliance and on-time delivery.",
    },
    {
      image: Service2,
      title: "Line Maintenance",
      description:
        "Daily checks, troubleshooting, and AOG support across multiple bases for reliable fleet operations. ",
    },
    {
      image: Service3,
      title: "Component Maintenance",
      description:
        "Specialized repair and overhaul services ensuring components perform to the highest standards.",
    },
    {
      image: Service4,
      title: "Warehouses",
      description: "Extensive spares inventory with efficient storage support",
    },
    {
      image: Service5,
      title: "Engine Module Replacement ",
      description:
        "Quick-turn CFM56 module swaps reducing downtime through trusted partnerships.",
    },
    {
      image: Service6,
      title: "Engineering Services",
      description:
        "Modifications, technical records, and tailored solutions ensuring airworthiness and efficiency. ",
    },
    {
      image: Service7,
      title: "Aircraft Painting – Narrow & Wide Body  ",
      description:
        "State-of-the-art paint hangars for full fleet livery, branding, and corrosion protection. ",
    },
    {
      image: Service8,
      title: "Component & Parts Purchases",
      description:
        "Reliable sourcing and purchasing solutions to secure the right parts, at the right time, at the right cost. ",
    },
    {
      image: Service9,
      title: "Logistics & Shipment ",
      description: "Global shipment solutions. ",
    },
  ];
  return (
    <>
      <div className="container  ">
        <div className="services">
          <h3 className="text-danger text-center mb-4">Our Services</h3>

          <div className="item">
            <Slide
              autoplay={true}
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
                    <p>{res?.description}</p>
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

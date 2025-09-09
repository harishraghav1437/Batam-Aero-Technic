import { Slide } from "react-slideshow-image";
import "./index.scss";
import { useState } from "react";
import { Button, Modal } from "antd";
import FAA from "./docs/FAA.pdf";
import REG_2 from "./docs/2-REG.pdf";
import CAAM from "./docs/CAAM.pdf";
import CAAT from "./docs/CAAT.pdf";
import DGCA_India from "./docs/DGCA_India.pdf";
import DGCA from "./docs/DGCA.pdf";

const Certificate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [documents, setDocuments] = useState(null);

  const certificates = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Logo_of_the_Ministry_of_Transportation_of_the_Republic_of_Indonesia.svg/800px-Logo_of_the_Ministry_of_Transportation_of_the_Republic_of_Indonesia.svg.png",
      title: "DGCA",
      url: DGCA,
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/32/Civil_Aviation_Authority_of_Malaysia_logo.png",
      title: "CAAM",
      url: CAAM,
    },

    {
      image: "/img/certificates/2_REG.webp",
      title: "2_REG",
      url: REG_2,
    },
    {
      image: "/img/certificates/CAAT.png",
      title: "CAAT",
      url: CAAT,
    },
    {
      image: "/img/certificates/DGCA India.png",
      title: "DGCA_India",
      url: DGCA_India,
    },
    {
      image: "/img/certificates/FAA.png",
      title: "FAA",
      url: FAA,
    },
  ];

  const openPdf = async (item) => {
    setDocuments(item?.url);
    setIsModalOpen(true);
  };

  return (
    <div className="container my-5">
      <h3 className="text-danger text-center mb-4">
        Approvals & Certifications
      </h3>
      <p className="text-center mb-5">
        We are certified by leading aviation authorities to perform maintenance
        and overhaul services across a wide range of aircraft platforms.
      </p>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-12 col-md-12 col-lg-11">
          <div className="custom-grid">
            {certificates?.map((res, index) => (
              <div
                key={index}
                className="grid-item cursor-pointer"
                onClick={() => {
                  setDocuments(res.url);
                  openPdf(res);
                }}
              >
                <img
                  className="certificate-img"
                  src={res?.image}
                  alt={res?.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal
        title="Certification"
        open={isModalOpen}
        width={1000}
        onCancel={() => setIsModalOpen(false)}
        footer={false}
      >
        <iframe
          src={documents && documents}
          style={{ width: "100%", height: "80vh", border: "none" }}
          title="Certification Document"
        />
      </Modal>
    </div>
  );
};

export default Certificate;

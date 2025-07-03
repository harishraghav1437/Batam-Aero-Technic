import "./Footer.scss";
const Footer = () => {
  return (
    <>
      <div className="container py-5">
        <div className="footer">
          <h3 className="text-danger text-center mb-4">
            Approvals & Certifications
          </h3>
          <p className="text-center">
            We are certified by leading aviation authorities to perform
            maintenance and overhaul services across a wide range of aircraft
            platforms.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-5 py-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Logo_of_the_Ministry_of_Transportation_of_the_Republic_of_Indonesia.svg/800px-Logo_of_the_Ministry_of_Transportation_of_the_Republic_of_Indonesia.svg.png"
              alt="DGCA Certified"
              className="h-16"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/32/Civil_Aviation_Authority_of_Malaysia_logo.png"
              alt="CAAM Certified"
              className="h-16"
            />
            <img
              src="https://www.amecee.in/blog/wp-content/uploads/What-Is-EASA-Approved.png"
              alt="EASA Approved"
              className="h-16"
            />
          </div>
          <div className="d-flex flex-wrap justify-content-center gap-4 download mb-5">
            <p className="">Download MOE (PDF)</p> |
            <p className="">Capability List</p> |
            <p className="">Approval Letters</p>
          </div>
          {/* Clients & Testimonials
           */}
          <div className="mb-5">
            <h3 className="text-danger text-center pt-5 mb-4">
              Clients & Testimonials
            </h3>
            <div className="row ">
              <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                <div
                  className=" card shadow mb-3 p-3 text-center"
                  style={{ height: "130px" }}
                >
                  <p className=" Testimonials ">
                    “BAT has been an outstanding partner in maintaining our
                    fleet. Their turnaround times and service quality are
                    unmatched.”
                  </p>
                  <p className="mb-0">
                    <b>— Garuda Indonesia</b>
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                <div
                  className=" card shadow mb-3 p-3 text-center"
                  style={{ height: "130px" }}
                >
                  <p className=" Testimonials ">
                    “Reliable, efficient, and professional. We rely on BAT for
                    both scheduled and AOG support.”
                  </p>
                  <p className="mb-0">
                    <b>— Lion Air</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Newsroom & Media
           */}
          <div className="mb-5">
            <h3 className="text-danger text-center pt-5 mb-4">
              Newsroom & Media
            </h3>
            <div className="card shadow-sm mb-4 p-4">
              <h5 className="mb-0">
                <b>BAT Announces New Hangar Expansion in Q3 2025</b>
              </h5>
              <p className="fs-15 text-secondary">Published May 20, 2025</p>
              <p className="mb-0 text-secondary">
                We are expanding our facilities with a new 4-bay hangar expected
                to be operational by Q3 2025. This will increase our capacity to
                support wide-body aircraft including B777 and A350.
              </p>
            </div>
            <div className="card shadow-sm mb-3 p-4">
              <h5 className="mb-0 ">
                <b>BAT to Showcase at MRO Asia-Pacific 2025</b>
              </h5>
              <p className="fs-15 text-secondary">Published April 10, 2025</p>
              <p className="mb-0 text-secondary">
                Visit our booth at MRO Asia-Pacific in Singapore. We’ll be
                showcasing our expanded component capabilities and digital
                maintenance platform.
              </p>
            </div>
          </div>
          {/* Training & Apprenticeship Programs
           */}
          <div className="mb-5">
            <h3 className="text-danger text-center pt-5 mb-4">
              Training & Apprenticeship Programs
            </h3>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div
                  className="card shadow-sm mb-4 p-4"
                  style={{ height: "145px" }}
                >
                  <h5 className="">
                    <b>Licensed Technician Apprenticeship</b>
                  </h5>
                  <p className="mb-0 text-secondary">
                    A 12-month structured program providing hands-on training on
                    airframe and engine maintenance for fresh graduates in
                    engineering or aviation disciplines.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div
                  className="card shadow-sm mb-3 p-4"
                  style={{ height: "145px" }}
                >
                  <h5 className="">
                    <b>Digital MRO Systems Workshop</b>
                  </h5>
                  <p className="mb-0 text-secondary">
                    A short course introducing the use of predictive maintenance
                    systems, maintenance planning tools, and digital records
                    platforms used in modern MRO operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

import "./Footer.scss";
const Footer = () => {
  return (
    <>
      <div className="footer bg-black py-4 mt-5 ">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex justify-content-start align-item-center">
              <img
                src="/img/batam_logo.png"
                alt="logo"
                height={60}
                className=" object-fit-contain"
              />
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4  text-start py-2 py-md-0">
              <p>
                <b className="text-danger">Address:</b>
              </p>
              <p className=" text-white">
                PT. Batam Teknik (DBA: Batam Aero Technic) Jalan Hang Jebat,
                Kawasan Bandar Udara Hang Nadim, Batam, Kepulauan Riau,
                Indonesia
              </p>
              <div className="mb-2">
                <a
                  href="mailto:marketing@batamaero.com"
                  className="text-white text-decoration-none"
                >
                  <span className="me-3">
                    <img src="/img/email.png" alt="gmail" height={20} />
                  </span>
                  <span>marketing@batamaero.com</span>
                </a>
              </div>

              <div>
                <a
                  href="https://www.linkedin.com/company/batam-aero-technic/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-white"
                >
                  <span className="me-3">
                    <img src="/img/linkedin.png" alt="linkedin" height={20} />
                  </span>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4  text-start py-3 py-md-0">
              <div
                style={{ width: "100%", height: "200px", borderRadius: "5px" }}
              >
                <iframe
                  title="Company Location"
                  className="rounded"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  // src="https://www.google.com/maps?q=PT.+Batam+Teknik+(DBA:+Batam+Aero+Technic),+Jalan+Hang+Jebat,+Kawasan+Bandar+Udara+Hang+Nadim,+Batam,+Kepulauan+Riau,+Indonesia&output=embed"
                  src="https://www.google.com/maps?q=44RF+2H+Hanggar+Batam+Aero+Technic,+Batu+Besar,+Nongsa,+Batam,+Kepulauan+Riau,+Indonesia&output=embed"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

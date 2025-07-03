import AboutImg from "../../assets/img.JPG";
const About = () => {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
          <img
            src={AboutImg}
            alt="About Us"
            className=" w-100 object-fit-cover shadow rounded"
            height={400}
          />
        </div>
        <div className="col-12 col-sm-10 col-md-6 col-lg-6  ps-3">
          <h3 className="text-danger">About Us</h3>
          <p>
            Batam Aero Technic (BAT) is one of the largest MRO (Maintenance,
            Repair, and Overhaul) facilities in Southeast Asia, strategically
            located on Batam Island, Indonesia. Founded in 2009 and a member of
            Lion Air Group, BAT has grown into a premier hub for full-spectrum
            aircraft maintenance services.
          </p>
          <p>
            Our mission is to deliver world-class MRO services with a focus on
            safety, quality, and turnaround efficiency. We support major
            commercial aircraft types including Boeing 737, Airbus A320, and
            A330 families.
          </p>
          <p>
            Facilities include over 66,000 sqm of hangar space, advanced
            tooling, and dedicated component shops. BAT supports local talent
            development and is committed to operational excellence and
            regulatory compliance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

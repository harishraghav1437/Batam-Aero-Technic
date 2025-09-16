import AboutImg from "/img/img4.JPG";
const About = () => {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
          <img
            src={AboutImg}
            alt="About Us"
            className="  object-fit-contain shadow rounded w-100 h-auto"
            // height={400}
          />
        </div>
        <div className="col-12 col-sm-10 col-md-6 col-lg-6  ps-3">
          <h3 className="text-danger">About Us</h3>
          <p>
            Batam Aero Technic (BAT) is a leading Maintenance, Repair, and
            Overhaul (MRO) provider strategically located in Batam, Indonesia.
            As a subsidiary of the Lion Air Group, BAT plays a vital role in
            ensuring world-class aviation maintenance, safety, and efficiency
            across the region.
          </p>
          <p>
            With state-of-the-art facilities spanning over 30 hectares, BAT is
            equipped to handle a wide range of aircraft maintenance services,
            from line maintenance, heavy maintenance, component repair, engine
            overhaul, modifications, and aircraft painting. Our expertise
            extends across multiple aircraft types, including Boeing, Airbus,
            and ATR fleets.
          </p>
          <p>
            Certified by national and international aviation authorities, BAT
            upholds the highest industry standards, ensuring safety,
            reliability, and operational excellence. Our skilled workforce,
            cutting-edge technology, and commitment to innovation make us the
            preferred MRO partner for airlines across Asia and beyond.
          </p>
          <p>
            As an integral part of the region’s growing aerospace industry, BAT
            is committed to developing Indonesia as a global aviation hub,
            fostering skilled aviation professionals, and delivering world-class
            aircraft maintenance solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

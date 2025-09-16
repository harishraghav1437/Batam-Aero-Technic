const Newsroom = () => {
  return (
    <div className="container">
      <div className="mb-5">
        <h3 className="text-danger text-center pt-5 mb-4">Newsroom & Media</h3>
        <div className="card shadow-sm mb-4 p-4">
          <h5 className="mb-2">
            <b>BAT to Showcase at MRO Asia-Pacific 2025 </b>
          </h5>
          {/* <p className="fs-15 text-secondary">Published May 20, 2025</p> */}
          <ul className="mb-0 text-secondary">
            <li>
              {" "}
              Batam Aero Technic (BAT) will be participating at MRO Asia-Pacific
              2025 in Singapore, the region’s leading aviation maintenance
              event.{" "}
            </li>
            <li>
              Join us at Booth #1169 to explore our expanded component
              maintenance capabilities and experience our new digital
              maintenance platform, designed to deliver greater efficiency,
              reliability, and transparency for airline partners.{" "}
            </li>
            <li>
              We look forward to connecting with industry peers, showcasing our
              latest solutions, and shaping the future of MRO together.
            </li>
          </ul>
        </div>

        <div className="card shadow-sm mb-3 p-4">
          <h5 className="mb-2">
            <b>BAT and FTAI Announce Strategic Collaboration </b>
          </h5>
          <ul className="mb-0 text-secondary">
            <li>
              Batam Aero Technic (BAT) is pleased to announce a strategic
              collaboration with FTAI Aviation, a global leader in aviation
              aftermarket services.{" "}
            </li>
            <li>
              Through this partnership, BAT will expand its service scope to
              include engine module replacement solutions for CFM56 engines. The
              collaboration combines BAT’s MRO expertise and facilities with
              FTAI’s extensive engine portfolio, delivering faster turnaround
              times, reduced maintenance costs, and increased fleet availability
              for airline operators across Asia-Pacific.{" "}
            </li>
            <li>
              {" "}
              This milestone reinforces BAT’s commitment to providing
              comprehensive and innovative MRO solutions that support the
              growing demands of the region’s aviation industry.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Newsroom;

const Newsroom = () => {
  return (
    <div className="container">
      <div className="mb-5">
        <h3 className="text-danger text-center pt-5 mb-4">Newsroom & Media</h3>
        <div className="card shadow-sm mb-4 p-4">
          <h5 className="mb-0">
            <b>BAT Announces New Hangar Expansion in Q3 2025</b>
          </h5>
          <p className="fs-15 text-secondary">Published May 20, 2025</p>
          <p className="mb-0 text-secondary">
            We are expanding our facilities with a new 4-bay hangar expected to
            be operational by Q3 2025. This will increase our capacity to
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
    </div>
  );
};

export default Newsroom;

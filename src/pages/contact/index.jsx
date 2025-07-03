const Contact = () => {
  return (
    <>
      <div className="container py-5">
        <h3 className="text-danger text-center mb-4"> Contact Us</h3>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-4">
            <div className="card shadow-sm p-4">
              <h5>
                <b>Aircraft Emergency / AOG</b>
              </h5>
              <p>To call our AOG team for an aircraft emergency:</p>
              <p>
                <span className="text-danger ">
                  <strong>+800 5387 8277 </strong>
                </span>{" "}
                (Rest of World).
              </p>
              <p className="text-danger">
                <strong>acd@gmail.com</strong>
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-8">
            <div className="card shadow-sm p-4">
              <h5>
                <b>Submit an Enquiry</b>
              </h5>
              <hr />
              <div className="row">
                <p className="mb-1 label">
                  Name<span className="text-danger">*</span>
                </p>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Last Name"
                    required
                  />
                </div>
                <p className="mb-1 label">
                  Email <span className="text-danger">*</span>
                </p>
                <div className="col-12 col-sm-12 col-col-lg-12 mb-2">
                  <input
                    type="email"
                    className="form-control"
                    id="name"
                    placeholder="Email"
                    required
                  />
                </div>
                <p className="mb-1 label">
                  Phone <span className="text-danger">*</span>
                </p>
                <div className="col-12 col-sm-12 col-col-lg-12 mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Phone Number"
                    required
                  />
                </div>

                <div className="col-12 col-sm-12 col-md-6 col-col-lg-6 mb-2">
                  <p className="mb-1 label">
                    Aircraft Type <span className="text-danger">*</span>
                  </p>
                  <select className="form-select" required>
                    <option value="">-- Select --</option>
                    <option value="service1">Service 1</option>
                    <option value="service2">Service 2</option>
                    <option value="service3">Service 3</option>
                  </select>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-col-lg-6 mb-2">
                  <p className="mb-1 label">Aircraft Mode</p>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Aircraft Model"
                    required
                  />
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-col-lg-6 mb-2">
                  <p className="mb-1 label">
                    Company Name <span className="text-danger">*</span>
                  </p>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Company Name"
                    required
                  />
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-col-lg-6 mb-2">
                  <p className="mb-1 label">
                    Country <span className="text-danger">*</span>
                  </p>
                  <select className="form-select" required>
                    <option value="">-- Select --</option>
                    <option value="service1">Service 1</option>
                    <option value="service2">Service 2</option>
                    <option value="service3">Service 3</option>
                  </select>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-col-lg-12 mb-2">
                  <p className="mb-1 label">
                    Additional Comments <span className="text-danger">*</span>
                  </p>
                  <textarea
                    name="comments"
                    className="form-control"
                    rows="4"
                    cols="50"
                  />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-col-lg-12 mt-3 text-end">
                  <button className="btn btn-danger w-10">
                    Submit Enquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

// const Contact = () => {
//   return (
//     <>
//       <div className="container py-0  ">
//         <h3 className="text-danger text-center mb-4"> Contact Us</h3>
//         <div className="row d-flex justify-content-center">
//           <div className="col-12 col-sm-12 col-md-12 col-lg-12 ">
//             <div className="card shadow-sm p-4">
//               <h5>
//                 <b>Submit an Enquiry</b>
//               </h5>
//               <hr />
//               <div className="row ">
//                 <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-2">
//                   <p className="mb-1 label">
//                     First Name<span className="text-danger">*</span>
//                   </p>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="name"
//                     placeholder="First Name"
//                     required
//                   />
//                 </div>
//                 <div className="col-12 col-sm-12 col-md-6 col-lg-6">
//                   <p className="mb-1 label">
//                     Last Name<span className="text-danger">*</span>
//                   </p>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="name"
//                     placeholder="Last Name"
//                     required
//                   />
//                 </div>

//                 <div className="col-12 col-sm-12 col-lg-6 mb-2">
//                   <p className="mb-1 label">
//                     Email <span className="text-danger">*</span>
//                   </p>
//                   <input
//                     type="email"
//                     className="form-control"
//                     id="name"
//                     placeholder="Email"
//                     required
//                   />
//                 </div>

//                 <div className="col-12 col-sm-12 col-lg-6 mb-2">
//                   <p className="mb-1 label">
//                     Phone <span className="text-danger">*</span>
//                   </p>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="name"
//                     placeholder="Phone Number"
//                     required
//                   />
//                 </div>

//                 <div className="col-12 col-sm-12 col-md-6 col-col-lg-6 mb-2">
//                   <p className="mb-1 label">
//                     Aircraft Type <span className="text-danger">*</span>
//                   </p>
//                   <select className="form-select" required>
//                     <option value="">-- Select --</option>
//                     <option value="service1">Service 1</option>
//                     <option value="service2">Service 2</option>
//                     <option value="service3">Service 3</option>
//                   </select>
//                 </div>
//                 <div className="col-12 col-sm-12 col-md-6 col-col-lg-6 mb-2">
//                   <p className="mb-1 label">Aircraft Mode</p>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="name"
//                     placeholder="Aircraft Model"
//                     required
//                   />
//                 </div>
//                 <div className="col-12 col-sm-12 col-md-6 col-col-lg-6 mb-2">
//                   <p className="mb-1 label">
//                     Company Name <span className="text-danger">*</span>
//                   </p>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="name"
//                     placeholder="Company Name"
//                     required
//                   />
//                 </div>
//                 <div className="col-12 col-sm-12 col-md-6 col-col-lg-6 mb-2">
//                   <p className="mb-1 label">
//                     Country <span className="text-danger">*</span>
//                   </p>
//                   <select className="form-select" required>
//                     <option value="">-- Select --</option>
//                     <option value="service1">Service 1</option>
//                     <option value="service2">Service 2</option>
//                     <option value="service3">Service 3</option>
//                   </select>
//                 </div>
//                 <div className="col-12 col-sm-12 col-md-12 col-col-lg-12 mb-2">
//                   <p className="mb-1 label">
//                     Additional Comments <span className="text-danger">*</span>
//                   </p>
//                   <textarea
//                     name="comments"
//                     className="form-control"
//                     rows="4"
//                     cols="50"
//                   />
//                 </div>
//                 <div className="col-12 col-sm-12 col-md-12 col-col-lg-12 mt-3 text-end">
//                   <button className="btn btn-danger w-10">
//                     Submit Enquiry
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    aircraftType: "",
    aircraftModel: "",
    companyName: "",
    country: "",
    comments: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formUrl =
      "https://docs.google.com/forms/d/1dR7rCWW5UL8M6O6NrBw6lO9qLMFOkZG9ERU8U8cdtxY/formResponse";

    const data = new FormData();
    // 🔹 Replace entry.xxxxx with your real IDs from the prefilled link
    data.append("entry.770921469", formData.firstName); // First Name
    data.append("entry.1063281086", formData.lastName); // Last Name
    data.append("entry.2113141077", formData.email); // Email
    data.append("entry.538476462", formData.phone); // Phone
    data.append("entry.1531887755", formData.aircraftType); // Aircraft Type
    data.append("entry.914023177", formData.aircraftModel); // Aircraft Model
    data.append("entry.1925930890", formData.companyName); // Company Name
    data.append("entry.1806184004", formData.country); // Country
    data.append("entry.1169627516", formData.comments); // Comments

    await fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      body: data,
    });

    alert("✅ Enquiry submitted successfully!");

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      aircraftType: "",
      aircraftModel: "",
      companyName: "",
      country: "",
      comments: "",
    });
  };

  return (
    <div className="container py-0">
      <h3 className="text-danger text-center mb-4"> Contact Us</h3>
      <div className="row d-flex justify-content-center">
        <div className="col-12">
          <div className="card shadow-sm p-4">
            <h5>
              <b>Submit an Enquiry</b>
            </h5>
            <hr />
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-2">
                  <p>
                    First Name<span className="text-danger">*</span>
                  </p>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="enter first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-6 mb-2">
                  <p>
                    Last Name<span className="text-danger">*</span>
                  </p>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="enter last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-6 mb-2">
                  <p>
                    Email<span className="text-danger">*</span>
                  </p>
                  <input
                    type="email"
                    placeholder="enter email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-6 mb-2">
                  <p>
                    Phone<span className="text-danger">*</span>
                  </p>
                  <input
                    type="number"
                    placeholder="enter phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-6 mb-2">
                  <p>
                    Aircraft Type<span className="text-danger">*</span>
                  </p>
                  <select
                    name="aircraftType"
                    placeholder="select"
                    value={formData.aircraftType}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    <option value="">-- Select --</option>
                    <option value="service1">Service 1</option>
                    <option value="service2">Service 2</option>
                    <option value="service3">Service 3</option>
                  </select>
                </div>
                <div className="col-md-6 mb-2">
                  <p>Aircraft Model</p>
                  <input
                    type="text"
                    name="aircraftModel"
                    placeholder="enter aircraft model"
                    value={formData.aircraftModel}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-6 mb-2">
                  <p>
                    Company Name<span className="text-danger">*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="enter company name"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-6 mb-2">
                  <p>
                    Country<span className="text-danger">*</span>
                  </p>
                  <select
                    name="country"
                    placeholder="select"
                    value={formData.country}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    <option value="">-- Select --</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                  </select>
                </div>
                <div className="col-12 mb-2">
                  <p>
                    Additional Comments<span className="text-danger">*</span>
                  </p>
                  <textarea
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    className="form-control"
                    rows={4}
                    required
                  ></textarea>
                </div>
                <div className="col-12 mt-3 text-end">
                  <button type="submit" className="btn btn-danger">
                    Submit Enquiry
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

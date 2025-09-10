const Contact = () => {
  return (
    <>
      <div className="container py-0  ">
        <h3 className="text-danger text-center mb-4"> Contact Us</h3>
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 ">
            <div className="card shadow-sm p-4">
              <h5>
                <b>Submit an Enquiry</b>
              </h5>
              <hr />
              <div className="row ">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-2">
                  <p className="mb-1 label">
                    First Name<span className="text-danger">*</span>
                  </p>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                  <p className="mb-1 label">
                    Last Name<span className="text-danger">*</span>
                  </p>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Last Name"
                    required
                  />
                </div>

                <div className="col-12 col-sm-12 col-lg-6 mb-2">
                  <p className="mb-1 label">
                    Email <span className="text-danger">*</span>
                  </p>
                  <input
                    type="email"
                    className="form-control"
                    id="name"
                    placeholder="Email"
                    required
                  />
                </div>

                <div className="col-12 col-sm-12 col-lg-6 mb-2">
                  <p className="mb-1 label">
                    Phone <span className="text-danger">*</span>
                  </p>
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

// import React, { useState } from "react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     aircraftType: "",
//     aircraftModel: "",
//     companyName: "",
//     country: "",
//     comments: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Replace this URL with your actual Google Form URL
//     const formUrl =
//       "https://docs.google.com/forms/d/1dR7rCWW5UL8M6O6NrBw6lO9qLMFOkZG9ERU8U8cdtxY/formResponse";

//     // Replace these entry IDs with the actual ones from your Google Form
//     // To find these, inspect the form or use a tool like https://github.com/jamiewilson/form-to-google-sheets
//     const params = new URLSearchParams({
//       "first_name.111111111": formData.firstName, // Replace with actual entry ID
//       "last_name.222222222": formData.lastName, // Replace with actual entry ID
//       "entry.333333333": formData.email, // Replace with actual entry ID
//       "entry.444444444": formData.phone, // Replace with actual entry ID
//       "entry.555555555": formData.aircraftType, // Replace with actual entry ID
//       "entry.666666666": formData.aircraftModel, // Replace with actual entry ID
//       "entry.777777777": formData.companyName, // Replace with actual entry ID
//       "entry.888888888": formData.country, // Replace with actual entry ID
//       "entry.999999999": formData.comments, // Replace with actual entry ID
//     });

//     try {
//       await fetch(formUrl, {
//         method: "POST",
//         mode: "no-cors",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: params,
//       });
//       alert("✅ Enquiry submitted successfully!");

//       // setFormData({
//       //   firstName: "",
//       //   lastName: "",
//       //   email: "",
//       //   phone: "",
//       //   aircraftType: "",
//       //   aircraftModel: "",
//       //   companyName: "",
//       //   country: "",
//       //   comments: "",
//       // });
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }

//     // e.preventDefault();

//     // const formUrl =
//     //   "https://docs.google.com/forms/d/1dR7rCWW5UL8M6O6NrBw6lO9qLMFOkZG9ERU8U8cdtxY/formResponse";

//     // const data = new FormData();
//     // data.append("first_name", formData.firstName); // 🔹 First Name
//     // data.append("last_name", formData.lastName); // 🔹 Last Name
//     // data.append("email.333333333", formData.email); // 🔹 Email
//     // data.append("phone.444444444", formData.phone); // 🔹 Phone
//     // data.append("aircraft_type.555555555", formData.aircraftType); // 🔹 Aircraft Type
//     // data.append("aircraft_mode.666666666", formData.aircraftModel); // 🔹 Aircraft Model
//     // data.append("company_name.777777777", formData.companyName); // 🔹 Company Name
//     // data.append("country.888888888", formData.country); // 🔹 Country
//     // data.append("comments.999999999", formData.comments); // 🔹 Comments

//     // await fetch(formUrl, {
//     //   method: "POST",
//     //   mode: "no-cors",
//     //   body: data,
//     // })
//     //   .then(() => {
//     //     alert("✅ Enquiry submitted successfully!");
//     //   })
//     //   .catch(() => {});
//   };

//   return (
//     <div className="container py-0">
//       <h3 className="text-danger text-center mb-4"> Contact Us</h3>
//       <div className="row d-flex justify-content-center">
//         <div className="col-12">
//           <div className="card shadow-sm p-4">
//             <h5>
//               <b>Submit an Enquiry</b>
//             </h5>
//             <hr />
//             <form onSubmit={handleSubmit}>
//               <div className="row">
//                 <div className="col-md-6 mb-2">
//                   <p>
//                     First Name<span className="text-danger">*</span>
//                   </p>
//                   <input
//                     type="text"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     className="form-control"
//                     required
//                   />
//                 </div>
//                 <div className="col-md-6 mb-2">
//                   <p>
//                     Last Name<span className="text-danger">*</span>
//                   </p>
//                   <input
//                     type="text"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     className="form-control"
//                     required
//                   />
//                 </div>
//                 <div className="col-md-6 mb-2">
//                   <p>
//                     Email<span className="text-danger">*</span>
//                   </p>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="form-control"
//                     required
//                   />
//                 </div>
//                 <div className="col-md-6 mb-2">
//                   <p>
//                     Phone<span className="text-danger">*</span>
//                   </p>
//                   <input
//                     type="text"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="form-control"
//                     required
//                   />
//                 </div>
//                 <div className="col-md-6 mb-2">
//                   <p>
//                     Aircraft Type<span className="text-danger">*</span>
//                   </p>
//                   <select
//                     name="aircraftType"
//                     value={formData.aircraftType}
//                     onChange={handleChange}
//                     className="form-select"
//                     required
//                   >
//                     <option value="">-- Select --</option>
//                     <option value="service1">Service 1</option>
//                     <option value="service2">Service 2</option>
//                     <option value="service3">Service 3</option>
//                   </select>
//                 </div>
//                 <div className="col-md-6 mb-2">
//                   <p>Aircraft Model</p>
//                   <input
//                     type="text"
//                     name="aircraftModel"
//                     value={formData.aircraftModel}
//                     onChange={handleChange}
//                     className="form-control"
//                     required
//                   />
//                 </div>
//                 <div className="col-md-6 mb-2">
//                   <p>
//                     Company Name<span className="text-danger">*</span>
//                   </p>
//                   <input
//                     type="text"
//                     name="companyName"
//                     value={formData.companyName}
//                     onChange={handleChange}
//                     className="form-control"
//                     required
//                   />
//                 </div>
//                 <div className="col-md-6 mb-2">
//                   <p>
//                     Country<span className="text-danger">*</span>
//                   </p>
//                   <select
//                     name="country"
//                     value={formData.country}
//                     onChange={handleChange}
//                     className="form-select"
//                     required
//                   >
//                     <option value="">-- Select --</option>
//                     <option value="India">India</option>
//                     <option value="USA">USA</option>
//                     <option value="UK">UK</option>
//                   </select>
//                 </div>
//                 <div className="col-12 mb-2">
//                   <p>
//                     Additional Comments<span className="text-danger">*</span>
//                   </p>
//                   <textarea
//                     name="comments"
//                     value={formData.comments}
//                     onChange={handleChange}
//                     className="form-control"
//                     rows={4}
//                     required
//                   ></textarea>
//                 </div>
//                 <div className="col-12 mt-3 text-end">
//                   <button type="submit" className="btn btn-danger">
//                     Submit Enquiry
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

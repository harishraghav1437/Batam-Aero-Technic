import ServiceImg from "/img/service.JPG";
import Service2 from "/img/service2.JPG";
import Service3 from "/img/service3.JPG";
import "./Catalog.scss";
const Catalog = () => {
  return (
    <>
      <div className="container py-0">
        <h3 className="text-danger text-center mb-4">Product Catalog</h3>
        <div className="catalog">
          <div className="item">
            <div className="card mx-2 shadow">
              <img
                className=" object-fit-cover rounded-top"
                src={ServiceImg}
                height={200}
                alt="catalog"
              />
              <div className="card-body">
                <p>
                  {" "}
                  <b>Hydraulic Pump</b>
                </p>
                <p className="card-text">OEM: Parker Aerospace</p>
                <p className="card-text">Part No: 123-4567</p>
                <p className="card-text">
                  Application: Boeing 737 / Airbus A320
                </p>
                <p className="card-text">
                  Status: Overhauled / Ready-to-Install
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card mx-2 shadow">
              <img
                className=" object-fit-cover rounded-top"
                src={Service2}
                height={200}
                alt="catalog"
              />
              <div className="card-body">
                <p>
                  {" "}
                  <b>Landing Gear Actuator</b>
                </p>
                <p className="card-text">OEM: Goodrich</p>
                <p className="card-text">Part No: 987-6543</p>
                <p className="card-text">Application: Airbus A330</p>
                <p className="card-text">Status: Serviceable / Tagged</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card mx-2 shadow">
              <img
                className=" object-fit-cover rounded-top"
                src={Service3}
                height={200}
                alt="catalog"
              />
              <div className="card-body">
                <p>
                  {" "}
                  <b>Flight Control Computer</b>
                </p>
                <p className="card-text">OEM: Honeywell</p>
                <p className="card-text">Part No: FCC-3200</p>
                <p className="card-text">Application: A320 Family</p>
                <p className="card-text">Status: Overhauled / Bench-tested</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;

import LionAir from "./images/lion_airlines.png";
import BatikAir from "./images/batik_air.png";
import WingsAir from "./images/wingsair.png";
import BatikAirMalasia from "./images/batikair_malaysia.png";
import ThaiLionAir from "./images/thai_lion_air.png";
import AngkasaAviation from "./images/angkasa_aviation.png";
import LionBizjet from "./images/lion_bizjet.png";
import SuperAirJet from "./images/super_air_jet.png";
import TriMGAirlines from "./images/tri-MG_airlines.png";
import CebuPacifc from "./images/cebu_pacific.png";
import SpiceJet from "./images/spicejet.png";
import PhilippineAirlines from "./images/philippine_airlines.png";
import JackronCiptaSakina from "./images/jckron_cipta_sakina.png";
import GMF from "./images/gmf.png";
import SuryaAirways from "./images/surya_airways.png";
import FLTechnics from "./images/FL_Technics.png";
import Airfast from "./images/airfast.png";
import TransNusa from "./images/transNusa.png";
import NamAir from "./images/nam_air.png";
import Merpati from "./images/merpati.png";
import Premiair from "./images/premiair.png";
import "./styles.scss";

const Clients = () => {
  const Config = [
    { name: "LionAir", url: LionAir },
    { name: "BatikAir", url: BatikAir },
    { name: "WingsAir", url: WingsAir },
    { name: "BatikAirMalasia", url: BatikAirMalasia },
    { name: "ThaiLionAir", url: ThaiLionAir },
    { name: "AngkasaAviation", url: AngkasaAviation },
    { name: "LionBizjet", url: LionBizjet },
    { name: "SuperAirJet", url: SuperAirJet },
    { name: "TriMGAirlines", url: TriMGAirlines },
    { name: "CebuPacifc", url: CebuPacifc },
    { name: "SpiceJet", url: SpiceJet },
    { name: "PhilippineAirlines", url: PhilippineAirlines },

    { name: "GMF", url: GMF },
    { name: "FLTechnics", url: FLTechnics },
    { name: "Airfast", url: Airfast },
    { name: "TransNusa", url: TransNusa },
    { name: "NamAir", url: NamAir },
    { name: "Merpati", url: Merpati },
    // { name: "Premiair", url: Premiair },
    // { name: "SuryaAirways", url: SuryaAirways },
    // { name: "JackronCiptaSakina", url: JackronCiptaSakina },
  ];

  return (
    <div className="container">
      <div className="mb-5">
        <h3 className="text-danger text-center pt-5 mb-4">
          Customers & Clients
        </h3>
        <div className="grid-container">
          {Config?.map((res, i) => (
            <div className="grid-item cursor-pointer" key={i}>
              <img className="img " src={res?.url} alt={res.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;

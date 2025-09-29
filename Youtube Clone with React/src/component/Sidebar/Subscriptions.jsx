import jack from "../../assets/jack.png"
import simon from "../../assets/simon.png"
import tom from "../../assets/tom.png"
import megan from "../../assets/megan.png"
import cameron from "../../assets/cameron.png"
import gerard from "../../assets/gerard.png"

function Subscriptions() {
  return (
    <div className="subscriptions-part">
      <h4>Subscriptions</h4>
      <div className="sub-list side-list">
        <img src={jack} alt="" className="sub-img" />
        <p className="side-text">TechVision</p>
      </div>
      <div className="sub-list side-list">
        <img src={simon} alt="" className="sub-img" />
        <p className="side-text">GamerZone</p>
      </div>
      <div className="sub-list side-list">
        <img src={tom} alt="" className="sub-img" />
        <p className="side-text">TravelTales</p>
      </div>
      <div className="sub-list side-list">
        <img src={megan} alt="" className="sub-img" />
        <p className="side-text">MusicHub</p>
      </div>
      <div className="sub-list side-list">
        <img src={cameron} alt="" className="sub-img" />
        <p className="side-text">DailyDose</p>
      </div>
      <div className="sub-list side-list">
        <img src={gerard} alt="" className="sub-img" />
        <p className="side-text">FoodFactory</p>
      </div>

      <hr />
    </div>
  );
}

export default Subscriptions;

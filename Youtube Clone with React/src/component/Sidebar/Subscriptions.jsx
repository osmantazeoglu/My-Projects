import home from "../../assets/Youtube-Home.png";

function Subscriptions() {
  return (
    <div className="subscriptions">
      <h4>Subscriptions</h4>
      <div className="sub-list side-list">
        <img src={home} alt="" className="side-img" />
        <p className="side-text">Home</p>
      </div>

      <hr />
    </div>
  );
}

export default Subscriptions;

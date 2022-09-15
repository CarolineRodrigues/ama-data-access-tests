import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/driver-status">DRIVER STATUS</Link>
      <span style={{ margin: "0px 10px" }}>|</span>
      <Link to="/licence-points">LICENCE POINTS</Link>
      <span style={{ margin: "0px 10px" }}>|</span>
      <Link to="/driver-licence-info">DRIVER LICENCE INFO</Link>
      <span style={{ margin: "0px 10px" }}>|</span>
      <Link to="/infractions">INFRACTIONS LIST</Link>
      <span style={{ margin: "0px 10px" }}>|</span>
      <Link to="/infraction-detail">INFRACTION DETAILS</Link>
    </nav>
  );
};
export { Nav };

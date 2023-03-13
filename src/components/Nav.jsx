import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-all">
        <Link to="/">All</Link>
      </div>
      <div className="nav-topics">
        <Link to="/topics">Topics</Link>
      </div>
    </nav>
  );
}

export default Nav;

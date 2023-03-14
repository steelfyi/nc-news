import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-all">
        <Link to="/">Articles</Link>
      </div>
      <div className="nav-topics">
        <Link to="/topics">Topics</Link>
      </div>
    </nav>
  );
}

export default Nav;

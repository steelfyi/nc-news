import logo from "../logo.png";

function Header() {
  return (
    <header className="App-header">
      <div className="logo-container">
        <img src={logo} className="App-logo" alt="NC News Logo" />
      </div>
    </header>
  );
}

export default Header;

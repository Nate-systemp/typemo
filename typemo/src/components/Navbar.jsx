export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logo-icon">T</div>
        <div className="logo-text">type<span>mo</span></div>
      </div>
      <div className="navbar-links">
        <button className="active">time</button>
        <button>words</button>
      </div>
    </nav>
  );
}
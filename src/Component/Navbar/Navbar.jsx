import "../Navbar/Navbar.css";
import logo from "../../assets/logo.svg";
export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo"></img>
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect Me</div>
    </div>
  );
}

import Buttonİsim from "../../helper/buttonİsim";
import { Header } from "../header/Header";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="./logo.png" alt="lpgo" />
        </div>
        <div className="buttons">
          {Buttonİsim.map((isim, index) => (
            <button key={index}>{isim}</button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;

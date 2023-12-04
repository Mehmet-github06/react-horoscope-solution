 import Navbar from "../navbar/Navbar.jsx";
 import "./Header.scss"
 
 const Header = () => {
  console.log("object")
  return (
    <div className="header">
      <Navbar/>
      <h1>Who Are You?</h1>
    </div>
  );
};

export default Header;
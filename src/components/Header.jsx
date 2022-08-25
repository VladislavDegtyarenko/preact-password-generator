// Styles
import "./Header.css";

// Assets
import Logo from "./../password.svg";

function Header() {
   return (
      <div className="Header">
         <img src={Logo} alt="password logo" />
         <h1>Password Generator</h1>
      </div>
   );
}

export default Header;

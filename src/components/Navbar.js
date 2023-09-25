import React from "react";
import Rabbit from "./img/Rabbit.png";

function NavBar({ handleLoginClick }) {
  console.log(Rabbit);
  const handleClick = () => {
    handleLoginClick();
  };
  return (
    <div className="navbar"> 
        <div>
          <span onClick={handleClick} className="loginicon"> 
          Log In 
          </span>
        </div>
    </div>

  );
}

export default NavBar;

import React from "react";

function NavBar({ handleLoginClick }) {
  const handleClick = () => {
    handleLoginClick();
  };
  return (
    <div>
      <div className="navbar">
        <div>
          <span onClick={handleClick} className="loginicon">
            Log In
          </span>
        </div>
      </div>
      <div>
        <span onClick={handleClick} className="midloginicon">
          Log In
        </span>
      </div>
    </div>

  );
}

export default NavBar;

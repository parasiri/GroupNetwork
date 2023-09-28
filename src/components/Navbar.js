import React, { useEffect, useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";


function NavBar({ handleLoginClick }) {
  const [value, setValue] = useState(' ')
  const handleClick = () => {
      signInWithPopup(auth, provider).then((data) => {
          setValue(data.user.email)
          localStorage.setItem("email", data.user.email)
      })
  }

  useEffect(() => {
      setValue(localStorage.getItem('email'))
  })
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

import React, { useEffect, useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import rabbit from './img/Rabbit.png';


function NavBar({ handleLoginClick }) {
  console.log(rabbit);
  const logout = () => {
    localStorage.clear()
    window.location.reload()
  }
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
          <span onClick={handleClick} className="loginicon">Log In</span>
          <span className="font">PERFECT PPAP</span>
          <img className="picrab" src={rabbit}></img>
          <span onClick={logout} className="logouticon">Log Out</span>
        </div>
      </div>
      {/* <div>
        <span onClick={handleClick} className="midloginicon">
          Log In
        </span>
      </div> */}
    </div>

  );
}

export default NavBar;

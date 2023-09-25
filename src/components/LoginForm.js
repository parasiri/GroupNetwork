import React, { useRef as UseRef } from "react";
import { firestore } from "./firebase";
import { addDoc,collection } from "@firebase/firestore";
import WallCream from './img/Group.png';

const LoginForm = ({ isShowLogin }) => {
  console.log(WallCream);
  const messageRef = UseRef();
  const ref = collection(firestore,"message");

  const handleSave = async (e) => {
    e.preventDefault();
    console.log(messageRef.current.value);

    let data = {
        message: messageRef.current.value,
    };

    try {
        addDoc(ref, data);
    } catch (e) {
        console.log(e);
    }
  };

  return (
    <div className="container">
    <div className="page">
      <img className="pic" src={WallCream}></img>
    </div>
    <div className="headfont">
      <h1>PERFECT PPAP</h1>
    </div>
  
    <div className={`${isShowLogin ? "active" : ""} show`}>
      
      <div id="page-mask"></div>
      <div >
      
              <div className="login__content">
              
                <form className="login__form" onSubmit={handleSave}>
                
                  <div className="login__inputs">
                    <h1>It's Good To Login !</h1>

                    <div className="login__box">
                      <label htmlFor="username" >Username</label>
                      <div className="login__box">
                        <input ref={messageRef}
                          type="text" 
                          className="login__input"
                          placeholder="Enter Your Username"
                          id="username"
                        />
                      </div>
                    </div>

                    <div className="login__box">
                      <label htmlFor="password" >Password</label>
                      <div className="login__box">
                        <input
                          type="password"
                          className="login__input"
                          placeholder="Enter Your Password"
                          id="password"
                        />
                      </div>
                    </div>
                      <form>
                        <input class="login__buttons" type="submit" value="Login" />
                      </form>
                  </div>
                  
                  
                </form>
              </div>
              
            </div>
            
    </div>
    </div>
  );
};

export default LoginForm;

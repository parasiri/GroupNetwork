// import React, { useRef as UseRef }, {useState} from "react";
import React, {useState} from "react";
import { firestore } from "./firebase";
import { addDoc,collection } from "@firebase/firestore";
import Grouppic from './img/Group.png';

const LoginForm = ({ isShowLogin }) => {
  console.log(Grouppic);
  // const messageRef = UseRef();
  // const ref = collection(firestore,"message");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSave = async (e) => {
    // e.preventDefault();
    // console.log(messageRef.current.value);

    // let data = {
    //     message: messageRef.current.value,
    // };

  //   try {
  //       addDoc(ref, data);
  //   } catch (e) {
  //       console.log(e);
  //   }
  };

  function validateForm() {
    return username.length > 0 && password.length > 0;
  };

  

  return (
    <div className="container">
    <div className="page">
      <img className="pic" src={Grouppic}></img>
    </div>
    <div className="headfont">
      <h1>PERFECT PPAP</h1>
    </div>
    <div className="titlefont">
      <p>A space to embrace everyone's feelings and stories</p>
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
                        <input 
                          type="text" 
                          className="login__input"
                          placeholder="Enter Your Username"
                          id="username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
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
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
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

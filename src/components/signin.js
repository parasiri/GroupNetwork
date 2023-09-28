import React, { useEffect, useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";


function SignIn() {
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
            {value ? <Home /> :
                <botton onclick={handleClick}>SignIn with Google</botton>
            }
        </div>

    );

}
export default SignIn;
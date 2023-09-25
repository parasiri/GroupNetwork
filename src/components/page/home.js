import React, { useRef as UseRef } from "react";
import { firestore } from "../firebase";
import { addDoc,collection } from "@firebase/firestore";


export default function home() {
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

    return(
        <div>
            <form onSubmit={handleSave}>
                <lebel>Enter Message</lebel>
                <input type="text" ref={messageRef} />
                <button type="submit">Save</button>

            </form>
        </div>


    );
}

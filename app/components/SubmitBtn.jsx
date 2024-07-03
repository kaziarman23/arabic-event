"use client";
import React from "react";

function SubmitBtn() {
    
    const handleSubmit = () => {
        input.innerText = "";
        alert("Thanks For Contacting Us, We will call you soon!");
    };
    return (
        <button
            onClick={handleSubmit}
            className="p-2 bg-white text-black hover:bg-slate-800 hover:text-white rounded-2xl my-10"
        >
            Submit
        </button>
    );
}

export default SubmitBtn;

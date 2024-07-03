import React from "react";
import SubmitBtn from "@/app/components/SubmitBtn.jsx";

function ContactUs() {
    return (
        <div className="bg-black w-2/3 h-auto mx-auto my-10 flex justify-center items-center gap-3 flex-col">
            <h1 className="text-2xl my-2">Contact Us</h1>
            <p className="text-yellow-500">This is a demo Form</p>
            <form className="my-10 ">
                <label for="firstName">First Name: </label>
                <br />
                <input
                    id="firstName"
                    className="rounded-xl p-2 my-3 bg-black border border-white"
                    required
                    type="text"
                />
                <br />
                <label for="lastName">Last Name: </label>
                <br />
                <input
                    id="lastName"
                    className="rounded-xl p-2 my-3 bg-black border border-white"
                    required
                    type="text"
                />
                <br />
                <label for="countryName">Country Name: </label>
                <br />
                <input
                    id="countryName"
                    className="rounded-xl p-2 my-3 bg-black border border-white"
                    required
                    type="text"
                />
                <br />
                <label for="email">email: </label>
                <br />
                <input
                    id="email"
                    className="rounded-xl p-2 my-3 bg-black border border-white"
                    required
                    type="email"
                />
                <br />
                <SubmitBtn/>
            </form>
            
        </div>
    );
}

export default ContactUs;

import { useRef, useState } from "react";
import { Link } from "react-router-dom";
function SignUp(){
    return(
        <section className="bg-ming w-screen h-screen flex justify-center items-center">
            {/* FORM SECTION */}
            <div className="bg-offWhite py-10 px-10">
                {/* HEADER SECTION */}
                <div className="flex p-2">
                    <span className="text-2xl"><Link to="/">&#10005;</Link></span>
                    <div className="w-full">
                    <h2 className="flex justify-center text-2xl">Personal information</h2>
                    </div>
                </div>
                {/* LABELS AND INPUTS */}
                <div className="flex p-2">
                        {/* FIRST NAME LAST NAME */}
                        <div className="flex flex-col mr-2">
                            <label htmlFor="firstname">Firstname</label>
                            <input type="text" id="firstname" placeholder="firstname" className="border-black border-solid border rounded py-2 px-1"></input>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="lastname">lastname</label>
                            <input type="text" id="lastname" placeholder="lastname" className="border-black border-solid border rounded py-2 px-1"></input>
                        </div>
                </div>
                {/* EMAIL */}
                <div className="flex flex-col p-2">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" placeholder="email" className="border-black border-solid border rounded py-2 px-1"></input>
                </div>
                {/* PASSWORD */}
                <div className="flex flex-col p-2">
                    <label htmlFor="password">Email</label>
                    <input type="password" id="password" placeholder="password" className="border-black border-solid border rounded py-2 px-1"></input>
                </div>
                <button className="bg-tangerine text-white my-4 p-2 rounded-full w-full">NEXT</button>
            </div>

        </section>
    )
}

export default SignUp
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import placeholder from "../../resources/images/christin-hume-Hcfwew744z4-unsplash111.jpg"
import placeholder2 from "../../resources/images/seanpollockPhYq704ffdAunsplash.jpg"
import arrow from "../../resources/images/arrow-121-24.png"

function SignUp(){
    const [showModal, setShowModal] = useState(false)
    return(
        
        <section className="bg-ming w-screen h-screen flex justify-center items-center">
            {/* FORM SECTION */}
            <div className="bg-offWhite py-10 px-6 w-[410px] pointer-events-none hidden">
                {/* HEADER SECTION */}
                <div className="flex p-2">
                    <span className="text-2xl"><Link to="/">&#10005;</Link></span>
                    <div className="w-full">
                    <h2 className="flex justify-center text-2xl">Personal information</h2>
                    </div>
                </div>
                {/* LABELS AND INPUTS */}
                <div className="flex p-2 w-full">
                        {/* FIRST NAME LAST NAME */}
                        <div className="flex flex-col mr-0.5 w-2/4">
                            <label htmlFor="firstname">Firstname</label>
                            <input type="text" id="firstname" placeholder="firstname" className="border-black border-solid border rounded py-2 px-1"></input>
                        </div>
                        <div className="flex flex-col w-2/4">
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
            {/* IMAGE SECTION */}
            <div className="w-[410px] h-[446px] pointer-events-none hidden">
                <img src={placeholder} alt='placeholder' className="h-full w-full bg-cover"/>
            </div>

            {/* MODAL */}
            {/* IMAGE SECTION */}
            <div className="w-[410px] h-[430px] bg-building bg-center bg-cover bg-no-repeat brightness-75">
                <div  className="w-[24px] h-[24px] py-10 px-6">
                    <div className="bg-arrow w-[24px] h-[24px]"/>
                </div>
            </div>
            {/* CONTENT SECTION */}
            <div className="bg-offWhite py-10 px-6 w-[410px]">
            <h2 className="flex justify-center text-2xl">Company Details</h2>
                {/* NAME AND CAPITAL */}
                <div className="flex p-2 w-full">
                        {/* FIRST NAME LAST NAME */}
                        <div className="flex flex-col mr-0.5 w-2/4">
                            <label htmlFor="firstname">Firstname</label>
                            <input type="text" id="firstname" placeholder="firstname" className="border-black border-solid border rounded py-2 px-1"></input>
                        </div>
                        <div className="flex flex-col w-2/4">
                            <label htmlFor="lastname">lastname</label>
                            <input type="text" id="lastname" placeholder="lastname" className="border-black border-solid border rounded py-2 px-1"></input>
                        </div>
                </div>
                {/* EMAIL */}
                <div className="flex flex-col p-2">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" placeholder="email" className="border-black border-solid border rounded py-2 px-1"></input>
                </div>
                {/* ADRRESS AND PHONE */}
                <div className="flex p-2 w-full">
                        {/* FIRST NAME LAST NAME */}
                        <div className="flex flex-col mr-0.5 w-2/4">
                            <label htmlFor="firstname">Firstname</label>
                            <input type="text" id="firstname" placeholder="firstname" className="border-black border-solid border rounded py-2 px-1"></input>
                        </div>
                        <div className="flex flex-col w-2/4">
                            <label htmlFor="lastname">lastname</label>
                            <input type="text" id="lastname" placeholder="lastname" className="border-black border-solid border rounded py-2 px-1"></input>
                        </div>
                </div>
                <button className="bg-tangerine text-white my-4 p-2 rounded-full w-full">NEXT</button>

            </div>

        </section>
    )
}

export default SignUp
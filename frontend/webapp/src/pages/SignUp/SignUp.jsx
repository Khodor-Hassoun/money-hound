import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import placeholder from "../../resources/images/christin-hume-Hcfwew744z4-unsplash111.jpg"


function SignUp() {
    const [showModal, setShowModal] = useState(false)
    const firstnameRef = useRef('')
    const lastnameRef = useRef("")
    const emailRef = useRef("")
    const passwordRef = useRef("")
    const nameRef = useRef("")
    const capitalRef = useRef("")
    const companyEmailRef = useRef("")
    const addressRef = useRef("")
    const phoneRef = useRef("")

    function logData() {
        const data = {
            firstname: firstnameRef.current.value,
            lastname: lastnameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            name: nameRef.current.value,
            company_email: companyEmailRef.current.value,
            address: addressRef.current.value,
            phone: parseInt(phoneRef.current.value),
            capital: parseInt(capitalRef.current.value)
        }
        console.log(data)
        axios
            .post("http://localhost:3002/auth/signup", data)
            .then((res) => {
                console.log(res);
            });

    }
    return (
        <>
            {showModal ? (
                <section className="bg-ming w-screen h-screen flex justify-center items-center z-10">
                    <div className="w-[410px] h-[430px] bg-building bg-center bg-cover bg-no-repeat brightness-75">
                        <div className="w-[24px] h-[24px] py-10 px-6">
                            <div className="bg-arrow w-[24px] h-[24px] cursor-pointer" onClick={() => setShowModal(false)} />
                        </div>
                    </div>
                    {/* CONTENT SECTION */}
                    <div className="bg-offWhite py-10 px-6 w-[410px]">
                        <h2 className="flex justify-center text-2xl">Company Details</h2>
                        {/* NAME AND CAPITAL */}
                        <div className="flex p-2 w-full">
                            {/* NAME */}
                            <div className="flex flex-col mr-0.5 w-2/4">
                                <label htmlFor="name">Company name</label>
                                <input type="text" id="name" placeholder="Mcdonalds" className="border-black border-solid border rounded py-2 px-1" ref={nameRef}></input>
                            </div>
                            <div className="flex flex-col w-2/4">
                                <label htmlFor="capital">Capital</label>
                                <input type="text" id="capital" placeholder="ex. 45000" className="border-black border-solid border rounded py-2 px-1" ref={capitalRef}></input>
                            </div>
                        </div>
                        {/* EMAIL */}
                        <div className="flex flex-col p-2">
                            <label htmlFor="companyemail">Email</label>
                            <input type="text" id="companyemail" placeholder="name@domain.com" className="border-black border-solid border rounded py-2 px-1" ref={companyEmailRef}></input>
                        </div>
                        {/* ADRRESS AND PHONE */}
                        <div className="flex p-2 w-full">
                            {/* FIRST NAME LAST NAME */}
                            <div className="flex flex-col mr-0.5 w-2/4">
                                <label htmlFor="address">Address</label>
                                <input type="text" id="address" placeholder="123 st." className="border-black border-solid border rounded py-2 px-1" ref={addressRef}></input>
                            </div>
                            <div className="flex flex-col w-2/4">
                                <label htmlFor="phone">Phone</label>
                                <input type="text" id="phone" placeholder="01455678" className="border-black border-solid border rounded py-2 px-1" ref={phoneRef}></input>
                            </div>
                        </div>
                        <button className="bg-tangerine text-white my-4 p-2 rounded-full w-full" onClick={logData}>REGISTER</button>

                    </div>
                </section>
            ) : (null)}
            <section className="bg-ming w-screen h-screen flex justify-center items-center absolute">
                {/* FORM SECTION */}
                <div className="bg-offWhite py-10 px-6 w-[410px]">
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
                            <input type="text" id="firstname" placeholder="John" ref={firstnameRef} className="border-black border-solid border rounded py-2 px-1"></input>
                        </div>
                        <div className="flex flex-col w-2/4">
                            <label htmlFor="lastname">lastname</label>
                            <input type="text" id="lastname" placeholder="Doe" ref={lastnameRef} className="border-black border-solid border rounded py-2 px-1"></input>
                        </div>
                    </div>
                    {/* EMAIL */}
                    <div className="flex flex-col p-2">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" placeholder="john@outlook.com" ref={emailRef} className="border-black border-solid border rounded py-2 px-1"></input>
                    </div>
                    {/* PASSWORD */}
                    <div className="flex flex-col p-2">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" ref={passwordRef} className="border-black border-solid border rounded py-2 px-1"></input>
                    </div>
                    <button className="bg-tangerine text-white my-4 p-2 rounded-full w-full" onClick={() => { setShowModal(true) }}>NEXT</button>
                </div>
                {/* IMAGE SECTION */}
                <div className="w-[410px] h-[446px]">
                    <img src={placeholder} alt='placeholder' className="h-full w-full bg-cover" />
                </div>
            </section>
        </>
    )
}

export default SignUp
import { Link } from "react-router-dom";
import { useRef } from 'react'

function CompanyInfoForm() {
    const nameRef = useRef("")
    const capitalRef = useRef("")
    const companyEmailRef = useRef("")
    const addressRef = useRef("")
    const phoneRef = useRef("")
    return (
        <>
            <div className="bg-offWhite py-10 px-6 w-[410px]">
                <h2 className="flex justify-center text-2xl">Company Details</h2>
                {/* NAME AND CAPITAL */}
                <div className="flex p-2 w-full justify-between">
                    {/* NAME */}
                    <div className="flex flex-col mr-0.5 w-[48%]">
                        <label htmlFor="name">Company name</label>
                        <input type="text" id="name" placeholder="Mcdonalds" className="border-black border-solid border rounded py-2 px-1" ref={nameRef}></input>
                    </div>
                    <div className="flex flex-col w-[48%]">
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
                <div className="flex p-2 w-full justify-between">
                    {/* FIRST NAME LAST NAME */}
                    <div className="flex flex-col mr-0.5 w-[48%]">
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" placeholder="123 st." className="border-black border-solid border rounded py-2 px-1" ref={addressRef}></input>
                    </div>
                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" id="phone" placeholder="01455678" className="border-black border-solid border rounded py-2 px-1" ref={phoneRef}></input>
                    </div>
                </div>
                <button className="bg-tangerine text-white my-4 p-2 rounded-full w-full">REGISTER</button>

            </div>
        </>
    )
}
export default CompanyInfoForm
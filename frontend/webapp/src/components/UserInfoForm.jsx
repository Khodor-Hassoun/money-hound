import { Link } from "react-router-dom";
import { useRef } from 'react'
function UserInfoForm({ popupMode = false, closePopup }) {
    const firstnameRef = useRef('')
    const lastnameRef = useRef("")
    const emailRef = useRef("")
    const passwordRef = useRef("")
    return (
        <>
            <div className="bg-offWhite py-10 px-6 w-[410px]">
                {/* HEADER SECTION */}
                <div className="flex p-2">
                    {
                        popupMode ?
                            <span className="text-2xl" onClick={() => closePopup(false)}>&#10005;</span> :
                            <span className="text-2xl"><Link to="/">&#10005;</Link></span>
                    }
                    {/* <span className="text-2xl"><Link to="/">&#10005;</Link></span>/ */}
                    <div className="w-full">
                        <h2 className="flex justify-center text-2xl">Personal information</h2>
                    </div>
                </div>
                {/* LABELS AND INPUTS */}
                <div className="flex p-2 w-full justify-between">
                    {/* FIRST NAME LAST NAME */}
                    <div className="flex flex-col mr-0.5 w-[48%]">
                        <label htmlFor="firstname">Firstname</label>
                        <input type="text" id="firstname" placeholder="John" ref={firstnameRef} className="border-black border-solid border rounded py-2 px-1"></input>
                    </div>
                    <div className="flex flex-col w-[48%]">
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
                {
                    popupMode ?
                        <button className="bg-tangerine text-white my-4 p-2 rounded-full w-full" >UPDATE</button>
                        :
                        <button className="bg-tangerine text-white my-4 p-2 rounded-full w-full" >NEXT</button>
                }
            </div>
        </>
    )
}
export default UserInfoForm
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import placeholder from "../../resources/images/christin-hume-Hcfwew744z4-unsplash111.jpg"
import UserInfoForm from "../../components/UserInfoForm";
import CompanyInfoForm from "../../components/CompanyInfoForm";


function SignUp() {
    const [showModal, setShowModal] = useState(false)
    const state = useSelector((state) => state)
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
        <section className="bg-ming w-screen h-screen flex justify-center items-center">
            {/* USER INFO SECTION */}
            <div className="flex">
                {/* FORM CONTAINER */}
                <div className=" w-1/2 h-1/2">
                    {/* FORM CONTENT */}
                    <div className="bg-offWhite flex flex-col py-10 px-6">
                        {/* FORM HEADER */}
                        <div className="flex p-2">
                            <span className="text-2xl"><Link to="/">&#10005;</Link></span>
                            <div className="w-full">
                                <h2 className="flex justify-center text-2xl">Personal information</h2>
                            </div>
                        </div>
                        {/* FORM CONTEENT */}
                        <UserInfoForm />
                        {/* FORM BUTTON */}
                        <button className="bg-tangerine text-white my-4 p-2 rounded-full w-full" onClick={() => console.log(state)} >NEXT</button>
                    </div>
                </div>
                <div>
                    <img src={placeholder} alt='placeholder' className="w-full h-full bg-cover" />
                </div>
            </div>
            {/* COMPANY INFO SECTION */}

        </section>
    )
}

export default SignUp
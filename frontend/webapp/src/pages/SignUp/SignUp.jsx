import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import placeholder from "../../resources/images/christin-hume-Hcfwew744z4-unsplash111.jpg"
import UserInfoForm from "../../components/UserInfoForm";
import CompanyInfoForm from "../../components/CompanyInfoForm";


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
        <section className="bg-ming w-screen h-screen flex justify-center items-center">
            {/* USER INFO SECTION */}
            <div className="flex">
                <UserInfoForm />
                {/* <div className="w-[410px] h-[446px]">
                    <img src={placeholder} alt='placeholder' className="h-full w-full bg-cover" />
                </div> */}
            </div>
            {/* COMPANY INFO SECTION */}
            <div className="flex">
                {/* PLACEHOLDER IMAGE */}
                {/* <div className="w-[24px] h-[24px] py-10 px-6 relative left-12 z-10">
                    <div className="bg-arrow w-[24px] h-[24px] cursor-pointer" onClick={() => setShowModal(false)} />
                </div>
                <div className="w-[410px] h-[450px] bg-building bg-center bg-cover bg-no-repeat brightness-75">
                </div>
                <CompanyInfoForm /> */}
            </div>

        </section>
    )
}

export default SignUp
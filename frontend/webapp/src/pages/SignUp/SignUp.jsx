import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import placeholder from "../../resources/images/christin-hume-Hcfwew744z4-unsplash111.jpg"
import placeholder2 from "../../resources/images/seanpollockPhYq704ffdAunsplash.jpg"
import UserInfoForm from "../../components/UserInfoForm";
import CompanyInfoForm from "../../components/CompanyInfoForm";
import { setUser, gettoken } from "../../redux/user";
import { setCompany } from "../../redux/company";


function SignUp() {
    const [showModal, setShowModal] = useState(false)
    const state = useSelector((state) => state)
    const user = useSelector((state) => state.user)
    // console.log(user)
    const company = useSelector((state) => state.company)
    const dispatch = useDispatch()
    function logData() {
        const data = {
            firstname: state.user.firstname,
            lastname: state.user.lastname,
            email: state.user.email,
            password: state.user.password,
            name: state.company.name,
            company_email: state.company.email,
            address: state.company.address,
            phone: parseInt(state.company.phone),
            capital: parseInt(state.company.capital)
        }
        // console.log(data)
        axios
            .post("http://localhost:3002/auth/signup", data)
            .then((res) => {
                console.log(res);

                dispatch(setUser({
                    ...user,
                    firstname: res.data.user.firstname,
                    lastname: res.data.user.lastname,
                    email: res.data.user.email,
                    id: parseInt(res.data.user.id),
                    // password: res.data.user.password,
                    user_type: 1
                }))

                dispatch(setCompany({
                    name: res.data.company.name,
                    capital: res.data.company.capital,
                    email: res.data.company.email,
                    id: parseInt(res.data.company.id),
                    address: res.data.company.address,
                    phone: res.data.company.phone
                }))
            }).then(() => {
                axios.post("http://localhost:3002/auth/login", {
                    email: user.email,
                    password: user.password,
                }).then(res => {
                    console.log("------------------------Sign IN---------------------")
                    console.log(res)
                    dispatch(gettoken({
                        token: res.data.token
                    }))
                    console.log("------------------------/Sign IN---------------------")

                }).catch(e => {
                    console.log("------------------------Sign IN---------------------")
                    console.log(e)
                    console.log("------------------------/Sign IN---------------------")

                })
            }).catch(e => {
                console.log(e)
            });

    }
    return (
        <section className="bg-ming w-screen h-screen flex justify-center items-center">
            {/* USER INFO SECTION */}
            <div className={`flex ${showModal ? "hidden pointer-events-none" : ""}`}>
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
                        <button className="bg-tangerine text-white my-4 p-2 rounded-full w-full" onClick={() => setShowModal(true)} >NEXT</button>
                    </div>
                </div>
                <div>
                    <img src={placeholder} alt='placeholder' className="w-full h-full bg-cover" />
                </div>
            </div>
            {/* COMPANY INFO SECTION */}
            <div className={`flex ${showModal ? "" : "hidden pointer-events-none"}`} >
                <div className="w-[24px] h-[24px] py-10 px-6 relative left-12 z-10">
                    <div className="bg-arrow w-[24px] h-[24px] cursor-pointer" onClick={() => setShowModal(false)} />
                </div>
                <div className="w-1/2 h-1/2">
                    <img src={placeholder2} alt='placeholder' className="w-full h-full bg-cover max-w-lg" />
                </div>
                <div className="w-1/2 h-1/2">
                    <div className="bg-offWhite flex flex-col py-10 px-6">
                        <div className="flex p-2">
                            <div className="w-full">
                                <h2 className="flex justify-center text-2xl">Company information</h2>
                            </div>
                        </div>
                        <CompanyInfoForm />
                        <button className="bg-tangerine text-white my-4 p-2 rounded-full w-full" onClick={() => logData()}>Register</button>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default SignUp
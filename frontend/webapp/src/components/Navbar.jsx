import logo from "../resources/images/Your-Logo-here.png"
import dots from "../resources/images/icons8-more-24.png"
import UserInfoForm from "./UserInfoForm"
import CompanyInfoForm from "./CompanyInfoForm"
import { useState } from "react"
import { MdSpaceDashboard } from "react-icons/md"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { setUser } from "../redux/user"
import { setCompany } from "../redux/company"
function Navbar() {
    const user = useSelector(state => state.user)
    const company = useSelector(state => state.company)
    const dispatch = useDispatch()
    const [userForm, setUserForm] = useState(false)
    const [companyForm, setCompanyForm] = useState(false)
    const [image, setImage] = useState(null)
    const [updatedUser, setUpdatedUser] = useState({})
    const [updatedCompany, setUpdatedCompany] = useState({})
    const [newLogo, setNewLogo] = useState()
    const navigate = useNavigate()

    const headers = {
        headers: {
            authorization: `Bearer ${user.token}`
        }
    }
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    }
    const convertToBase64 = (image) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(image);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };
    function imageTo64(e) {
        const file = e.target.files[0]
        const reader = new FileReader()

        reader.addEventListener('load', () => {
            console.log(reader.result)
            // thumbDiv.src= `${reader.result}`
            let image64 = reader.result
            setNewLogo(image64)
        })

        reader.readAsDataURL(file)

    }

    function userFormOpen() {
        setUserForm((userForm) => !userForm)
    }
    function companyFormOpen() {
        setCompanyForm((companyForm) => !companyForm)
    }
    function updatedUserReq() {
        axios.put("http://localhost:3002/user/", { ...user, ...updatedUser }, headers)
            .then(res => {
                console.log(res)
                const updatedUserValid = res.data
                dispatch(setUser({ ...user, ...updatedUserValid }))
                userFormOpen()
            }).catch(e => {
                console.log(e)
            })
    }
    function updatedCompanyReq() {
        axios.put("http://localhost:3002/company/", { ...company, ...updatedCompany, logo: newLogo }, headers)
            .then(res => {
                console.log(res)
                const updatedCompanyValid = res.data
                dispatch(setCompany({ ...company, ...updatedCompanyValid }))
                companyFormOpen()
            }).catch(e => {
                console.log(e)
            })
    }
    function signOut() {
        dispatch(setCompany({}))
        dispatch(setUser({}))
        navigate('/')
    }
    return (
        <>
            <nav
                className="h-screen w-1/6 lg:w-1/5 bg-ming text-white flex flex-col justify-between m-0 mr-4 py-4">
                {/* LOGO NAME AND OPTIONS */}
                <div
                    className="flex flex-col xl:flex-row xl:items-center px-2 space-y-3 lg:space-y-0 xl:justify-between">
                    <div
                        className="h-[50px] w-[50px] bg-white flex justify-center items-center rounded-xl">
                        <div
                            className="h-[35px] w-[35px] rounded-xl">
                            <img
                                src={logo}
                                alt="logo"
                                className="h-full w-full rounded-xl"
                            />
                        </div>
                    </div>
                    <h2
                        className="text-xl lg:text-xl">
                        {company.name}
                    </h2>
                    {
                        user.user_type === 1 ?
                            <img
                                src={dots}
                                className="cursor-pointer max-w-[24px]"
                                alt="options"
                                onClick={companyFormOpen}
                            />
                            :
                            <></>
                    }
                </div>
                {/* LINKS */}
                <div
                    className="space-y-6">
                    {
                        user.user_type === 1 ?
                            <div>
                                <NavLink to={'/company'}>
                                    {({ isActive }) => {
                                        return isActive ? (
                                            <div className="flex h-[50px] items-center bg-ming brightness-110 scale-y-110">
                                                {/* Lightbar */}
                                                <div className="h-full bg-tangerine w-[12px]" />
                                                <p className="text-tangerine w-full ml-2 lg:ml-6 lg:text-lg">Company</p>
                                            </div>
                                        ) : (
                                            <div
                                                className="flex h-[50px] items-center bg-ming hover:brightness-110">
                                                <div
                                                    className="h-full bg-white w-[12px]"
                                                />
                                                <p
                                                    className="text-white w-full ml-2 lg:ml-6 lg:text-lg">Company
                                                </p>
                                            </div>
                                        )
                                    }}
                                </NavLink>
                            </div>
                            :
                            <></>
                    }
                    {
                        user.user_type === 1 ?
                            <div>
                                <NavLink to={'/employees'}>
                                    {({ isActive }) => {
                                        return isActive ? (
                                            <div className="flex h-[50px] items-center bg-ming brightness-110 scale-y-110">
                                                {/* Lightbar */}
                                                <div className="h-full bg-tangerine w-[12px]" />
                                                <p className="text-tangerine w-full ml-2 lg:ml-6 lg:text-lg">Employees</p>
                                            </div>
                                        ) : (
                                            <div
                                                className="flex h-[50px] items-center bg-ming hover:brightness-110">
                                                <div
                                                    className="h-full bg-white w-[12px]"
                                                />
                                                <p
                                                    className="text-white w-full ml-2 lg:ml-6 lg:text-lg">Employees
                                                </p>
                                            </div>
                                        )
                                    }}
                                </NavLink>
                            </div>
                            :
                            <></>
                    }
                    {
                        user.user_type === 1 ?
                            <div>
                                <NavLink to={'/projects'}>
                                    {({ isActive }) => {
                                        return isActive ? (
                                            <div className="flex h-[50px] items-center bg-ming brightness-110 scale-y-110">
                                                {/* Lightbar */}
                                                <div className="h-full bg-tangerine w-[12px]" />
                                                <p className="text-tangerine w-full ml-2 lg:ml-8 lg:text-lg">Projects</p>
                                            </div>
                                        ) : (
                                            <div
                                                className="flex h-[50px] items-center bg-ming hover:brightness-110">
                                                <div
                                                    className="h-full bg-white w-[12px]"
                                                />
                                                <p
                                                    className="text-white w-full ml-2 lg:ml-8 lg:text-lg">Projects
                                                </p>
                                            </div>
                                        )
                                    }}
                                </NavLink>
                            </div>
                            :
                            <div>
                                <NavLink to={'/manager/projects'}>
                                    {({ isActive }) => {
                                        return isActive ? (
                                            <div className="flex h-[50px] items-center bg-ming brightness-110 scale-y-110">
                                                {/* Lightbar */}
                                                <div className="h-full bg-tangerine w-[12px]" />
                                                <p className="text-tangerine w-full ml-2 lg:ml-8 lg:text-lg">Projects</p>
                                            </div>
                                        ) : (
                                            <div
                                                className="flex h-[50px] items-center bg-ming hover:brightness-110">
                                                <div
                                                    className="h-full bg-white w-[12px]"
                                                />
                                                <p
                                                    className="text-white w-full ml-2 lg:ml-8 lg:text-lg">Projects
                                                </p>
                                            </div>
                                        )
                                    }}
                                </NavLink>
                            </div>
                    }
                    {
                        user.user_type === 1 ?
                            <div>
                                <NavLink to={'/insights'}>
                                    {({ isActive }) => {
                                        return isActive ? (
                                            <div className="flex h-[50px] items-center bg-ming brightness-110 scale-y-110">
                                                {/* Lightbar */}
                                                <div className="h-full bg-tangerine w-[12px]" />
                                                <p className="text-tangerine w-full ml-2 lg:ml-8 lg:text-lg">Insights</p>
                                            </div>
                                        ) : (
                                            <div
                                                className="flex h-[50px] items-center bg-ming hover:brightness-110">
                                                <div
                                                    className="h-full bg-white w-[12px]"
                                                />
                                                <p
                                                    className="text-white w-full ml-2 lg:ml-8 lg:text-lg">Insights
                                                </p>
                                            </div>
                                        )
                                    }}
                                </NavLink>
                            </div>
                            :
                            <></>
                    }
                </div>
                {/* NAVBAR FOOTER */}
                <div
                    className="flex flex-col px-2">
                    <div
                        className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center">
                        <h2
                            className="text-xl lg:text-xl"
                        >{`${user.firstname} ${user.lastname}`}
                        </h2>
                        <img
                            src={dots}
                            className="cursor-pointer max-w-[24px]"
                            alt="options"
                            onClick={userFormOpen}
                        />
                    </div>
                    <button
                        className="bg-tangerine text-white my-4 lg:p-2 lg:rounded-xl w-full cursor-pointer p-1 rounded-xl"
                        onClick={signOut}
                    >SIGN OUT
                    </button>
                </div>
            </nav>


            {/* USERINFO POPUP */}
            {
                userForm ?
                    <div className={`${userForm ? "z-20 w-screen h-screen flex justify-center items-center fixed bg-opacity-50 bg-black inset-0" : "hidden pointer-events-none"}`}>
                        <div className="bg-offWhite flex flex-col py-10 px-6">
                            <div className="flex p-2">
                                <span className="text-2xl cursor-pointer" onClick={userFormOpen}>&#10005;</span>
                                <div className="w-full">
                                    <h2 className="flex justify-center text-2xl">Personal information</h2>
                                </div>
                            </div>
                            <UserInfoForm setUpdatedUser={setUpdatedUser} updatedUser={updatedUser} />
                            <button className="bg-tangerine text-white my-4 p-2 rounded-full w-full" onClick={updatedUserReq}>UPDATE</button>
                        </div>
                    </div>
                    :
                    <></>
            }
            {/* COMPANY POPUP */}
            {
                companyForm ?
                    <div className={`${companyForm ? "z-20 w-screen h-screen flex justify-center items-center fixed bg-opacity-50 bg-black inset-0" : "hidden pointer-events-none"}`}>
                        <div className="bg-offWhite flex flex-col py-10 px-6">
                            <div className="flex p-2">
                                <span className="text-2xl cursor-pointer" onClick={companyFormOpen}>&#10005;</span>
                                <div className="w-full">
                                    <h2 className="flex justify-center text-2xl" onClick={() => console.log(newLogo)}>Company information</h2>
                                </div>
                            </div>
                            <div className="self-center">
                                <input type="file" name="logo" id="logo" onChange={imageTo64} />

                            </div>
                            <CompanyInfoForm setUpdatedCompany={setUpdatedCompany} updatedCompany={updatedCompany} />
                            <button className="bg-tangerine text-white my-4 p-2 rounded-full w-full" onClick={updatedCompanyReq}>UPDATE</button>
                        </div>
                    </div>
                    :
                    <></>
            }
        </>
    )
}
export default Navbar
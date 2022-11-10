import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { setCompany } from "../redux/company"

function CompanyInfoForm({ popupMode = false, closePopup }) {
    const company = useSelector((state) => state.company)
    const dispatch = useDispatch()
    function companyChange(e) {
        // console.log({ [e.target.name]: e.target.value })
        dispatch(setCompany({ ...company, [e.target.name]: e.target.value }))
    }
    return (
        <>
            <div className="bg-offWhite py-10 px-6 w-[410px]">
                <div className="flex p-2">
                    {
                        popupMode ?
                            <span className="text-2xl cursor-pointer" onClick={() => closePopup(false)}>&#10005;</span>
                            :
                            <span className="text-2xl"></span>
                    }
                    <div className="w-full">
                        <h2 className="flex justify-center text-2xl">Company Details</h2>
                    </div>
                </div>

                {/* NAME AND CAPITAL */}
                <div className="flex p-2 w-full justify-between">
                    {/* NAME */}
                    <div className="flex flex-col mr-0.5 w-[48%]">
                        <label htmlFor="name">Company name</label>
                        <input type="text" id="name" placeholder="Mcdonalds" name="name" onChange={companyChange} className="border-black border-solid border rounded py-2 px-1"></input>
                    </div>
                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="capital">Capital</label>
                        <input type="text" id="capital" placeholder="ex. 45000" name="capital" onChange={companyChange} className="border-black border-solid border rounded py-2 px-1"></input>
                    </div>
                </div>
                {/* EMAIL */}
                <div className="flex flex-col p-2">
                    <label htmlFor="companyemail">Email</label>
                    <input type="text" id="companyemail" placeholder="name@domain.com" name="email" onChange={companyChange} className="border-black border-solid border rounded py-2 px-1" ></input>
                </div>
                {/* ADRRESS AND PHONE */}
                <div className="flex p-2 w-full justify-between">
                    {/* ADRRESS PHONE */}
                    <div className="flex flex-col mr-0.5 w-[48%]">
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" placeholder="123 st." name="address" onChange={companyChange} className="border-black border-solid border rounded py-2 px-1" ></input>
                    </div>
                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" id="phone" placeholder="01455678" name="phone" onChange={companyChange} className="border-black border-solid border rounded py-2 px-1" ></input>
                    </div>
                </div>
                {
                    popupMode ?
                        <button className="bg-tangerine text-white my-4 p-2 rounded-full w-full" >UPDATE</button>
                        :
                        <button className="bg-tangerine text-white my-4 p-2 rounded-full w-full" onClick={() => console.log(company)}>REGISTER</button>
                }

            </div>
        </>
    )
}
export default CompanyInfoForm
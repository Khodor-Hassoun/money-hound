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
            <div className="flex flex-col">
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
            </div>
        </>
    )
}
export default CompanyInfoForm
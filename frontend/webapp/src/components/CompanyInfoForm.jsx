import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { setCompany } from "../redux/company"

function CompanyInfoForm({ setUpdatedCompany, updatedCompany }) {
    const company = useSelector((state) => state.company)
    const dispatch = useDispatch()
    function companyChange(e) {
        // console.log({ [e.target.name]: e.target.value })
        setUpdatedCompany({ ...updatedCompany, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className="flex flex-col">
                {/* NAME AND CAPITAL */}
                <div className="flex py-2 w-full justify-between">
                    {/* NAME */}
                    <div className="flex flex-col mr-0.5 w-[48%]">
                        <label htmlFor="name">Company name</label>
                        <input type="text" id="name" defaultValue={company.name} name="name" onChange={companyChange} className="border-black border-solid border rounded py-2 px-1"></input>
                    </div>
                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="capital">Capital</label>
                        <input type="text" id="capital" name="capital" defaultValue={company.capital} onChange={companyChange} className="border-black border-solid border rounded py-2 px-1"></input>
                    </div>
                </div>
                {/* EMAIL */}
                <div className="flex flex-col py-2">
                    <label htmlFor="companyemail">Email</label>
                    <input type="text" id="companyemail" defaultValue={company.email} name="email" onChange={companyChange} className="border-black border-solid border rounded py-2 px-1" ></input>
                </div>
                {/* ADRRESS AND PHONE */}
                <div className="flex py-2 w-full justify-between">
                    {/* ADRRESS PHONE */}
                    <div className="flex flex-col mr-0.5 w-[48%]">
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" defaultValue={company.address} name="address" onChange={companyChange} className="border-black border-solid border rounded py-2 px-1" ></input>
                    </div>
                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" id="phone" defaultValue={company.phone} name="phone" onChange={companyChange} className="border-black border-solid border rounded py-2 px-1" ></input>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CompanyInfoForm
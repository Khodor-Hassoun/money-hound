import { Link } from "react-router-dom";
import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from "../redux/user"
function UserInfoForm({ setUpdatedUser, updatedUser }) {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    function userChange(e) {
        // dispatch(setUser({ ...user, [e.target.name]: e.target.value }))
        setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className="flex flex-col">
                {/* LABELS AND INPUTS */}
                <div className="flex py-2 w-full justify-between">
                    {/* FIRST NAME LAST NAME */}
                    <div className="flex flex-col mr-0.5 w-[48%]">
                        <label htmlFor="firstname" className="font-semibold">Firstname</label>
                        <input type="text" id="firstname" defaultValue={user.firstname} name="firstname" onChange={userChange} className="border-black border-solid border rounded py-2 px-1"></input>
                    </div>
                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="lastname" className="font-semibold">lastname</label>
                        <input type="text" id="lastname" defaultValue={user.lastname} name="lastname" onChange={userChange} className="border-black border-solid border rounded py-2 px-1"></input>
                    </div>
                </div>
                {/* EMAIL */}
                <div className="flex flex-col py-2">
                    <label htmlFor="email" className="font-semibold">Email</label>
                    <input type="text" id="email" defaultValue={user.email} name="email" onChange={userChange} className="border-black border-solid border rounded py-2 px-1"></input>
                </div>
                {/* PASSWORD */}
                <div className="flex flex-col py-2">
                    <label htmlFor="password" className="font-semibold">Password</label>
                    <input type="password" id="password" name="password" onChange={userChange} className="border-black border-solid border rounded py-2 px-1"></input>
                </div>

            </div>
        </>
    )
}
export default UserInfoForm
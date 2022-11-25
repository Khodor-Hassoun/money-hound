import logo from "../resources/images/Your-Logo-here.png"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { setCompany } from "../redux/company"
import { setUser } from "../redux/user"
import { useNavigate } from "react-router-dom"
function CompanyCard({ value }) {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user)
    const publicImagesFolder = process.env.REACT_APP_PUBLIC_IMAGES
    const headers = { headers: { authorization: `Bearer ${user.token}` } }

    const dispatch = useDispatch()
    function companyRequest() {
        axios.post(`${process.env.REACT_APP_BASE_URL}user/companies`, { companyId: value.id }, headers)
            .then(res => {
                dispatch(setCompany({ ...value, logo: value.logo }))
                dispatch(setUser({ ...user, user_type: res.data.user.user_type }))
                if (res.data.user.user_type == 1) {
                    navigate('/employees')
                }
                if (res.data.user.user_type == 3) {
                    navigate('/manager/projects')
                }
            })
    }


    return (
        <>
            <div className="flex justify-between items-center  p-3 bg-offWhite hover:brightness-90 hover:cursor-pointer" onClick={companyRequest}>
                {/* COMPAMY DETAILS */}
                <div className="flex items-center space-x-6">
                    <div>
                        <div className="h-[60px] w-[60px] bg-offWhite flex justify-center items-center rounded-xl">
                            <div className="h-[60px] w-[60px] rounded-xl">

                                <img src={value.logo ? `${publicImagesFolder}${value.logo}` : logo} alt="logo" className="h-full w-full rounded-xl" />

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <h2 className="text-lg font-semibold">{value.name.toUpperCase()}</h2>
                    </div>

                </div>

            </div>
        </>
    )
}
export default CompanyCard
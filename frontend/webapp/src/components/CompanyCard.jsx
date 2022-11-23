import logo from "../resources/images/Your-Logo-here.png"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { setCompany } from "../redux/company"
import { setUser, setUserType } from "../redux/user"
import { useNavigate } from "react-router-dom"
function CompanyCard({ value }) {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user)
    const company = useSelector((state) => state.company)
    const publicImagesFolder = 'http://localhost:3002/images/images/'
    const dispatch = useDispatch()
    function companyRequest() {
        axios.post("http://localhost:3002/user/companies", {
            companyId: value.id
        }, {
            headers: {
                authorization: `Bearer ${user.token}`
            },

        },).then(res => {
            dispatch(setCompany({ ...value, logo: publicImagesFolder + value.logo }))
            dispatch(setUser({ ...user, user_type: res.data.user.user_type }))
            console.log(res.data)
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
            <div className="bg-beau rounded-xl flex w-full items-center space-x-5 p-2 shadow-xl hover:p-3 hover:shadow-2xl" onClick={companyRequest}>
                <div>
                    <div className="h-[60px] w-[60px] bg-white flex justify-center items-center rounded-xl">
                        <div className="h-[50px] w-[50px] rounded-xl">
                            <label htmlFor="hidden-input">
                                <img src={value.logo ? publicImagesFolder + value.logo : logo} alt="logo" className="h-full w-full rounded-xl" />
                                {/* <img src={logo} alt="logo" className="h-full w-full rounded-xl" /> */}
                            </label>
                            <input type="file" className="invisible" id="hidden-input" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <h2 className="text-2xl">{value.name}</h2>
                </div>

            </div>
        </>
    )
}
export default CompanyCard
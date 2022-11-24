import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import CompanyCard from "../../components/CompanyCard"
import moneyNew from "../../resources/images/Money_Hound_cropped.png"


function Companies() {
    const user = useSelector((state) => state.user)
    const [companies, setCompanies] = useState([])
    const navigate = useNavigate()
    const headers = { headers: { authorization: `Bearer ${user.token}` } }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}user/companies`, headers).then(res => {
            setCompanies(res.data)
        })
    }, [])

    return (
        <section className="bg-ming flex flex-col items-center justify-center h-screen w-screen">
            <div className="bg-offWhite flex flex-col pb-28 w-[450px] max-h-[700px] overflow-auto  rounded-md items-center">
                <div className="w-[176px] h-[140px]">
                    <img src={moneyNew} alt="Logo" className="h-full w-full" />
                </div>

                <div className="w-full">

                    <h1 className="text-lg font-bold mt-10 mb-6 px-6">Please Select a Company</h1>
                    <div className="w-full flex-grow justify-center px-6 flex flex-col bg-offWhite overflow-auto divide-y-2 divide-gray-400">
                        {
                            companies.map((value, index) => <CompanyCard value={value} />)
                        }

                    </div>
                </div>

            </div>



        </section>
    )
}
export default Companies
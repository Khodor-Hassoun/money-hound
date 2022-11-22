import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import CompanyCard from "../../components/CompanyCard"



function Companies() {
    const user = useSelector((state) => state.user)
    const [companies, setCompanies] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get("http://localhost:3002/user/companies", {
            headers: {
                authorization: `Bearer ${user.token}`
            }
        }).then(res => {
            console.log(res.data)
            setCompanies(res.data)
        })
    }, [])

    return (
        <section className="bg-ming flex flex-col items-center h-screen w-screen">
            <h1 className="text-white text-4xl font-bold mt-10">Select Company:</h1>
            <div className="w-1/3 flex-grow justify-center flex flex-col space-y-4">
                {
                    companies.map((value, index) => <CompanyCard value={value} />)
                }
            </div>



        </section>
    )
}
export default Companies
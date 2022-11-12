import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import CompanyCard from "../../components/CompanyCard"



function Companies() {
    const user = useSelector((state) => state.user)
    const [companies, setCompanies] = useState([])
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
        <section className="bg-ming flex flex-col justify-center items-center h-screen w-screen space-y-3">
            {
                companies.map((value, index) => <CompanyCard value={value} />)
            }

        </section>
    )
}
export default Companies
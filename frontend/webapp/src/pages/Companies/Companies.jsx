import axios from "axios"
import { useSelector } from "react-redux"
import CompanyCard from "../../components/CompanyCard"

function Companies() {
    const user = useSelector((state) => state.user)
    console.log(user)
    axios.get("http://localhost:3002/user/companies", {
        headers: {
            authorization: `Bearer ${user.token}`
        }
    }).then(res => {
        console.log(res)
    })

    return (
        <section className="bg-ming flex flex-col justify-center items-center h-screen space-y-3">
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
        </section>
    )
}
export default Companies
import Navbar from "../../components/Navbar"
import { useSelector } from "react-redux"
import CompanyInfoForm from "../../components/CompanyInfoForm"

function Company() {
    const company = useSelector(state => state.company)
    return (
        <section className="flex bg-offWhite pr-4">
            <Navbar />
            <section className="flex-grow max-h-screen overflow-auto">
                <header className="flex items-center justify-between w-full my-6">
                    <h2 className="text-4xl font-bold">{company.name}</h2>
                </header>
                <CompanyInfoForm />
            </section>
        </section>
    )
}
export default Company
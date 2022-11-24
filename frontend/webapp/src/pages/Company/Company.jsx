import Navbar from "../../components/Navbar"
import { useSelector } from "react-redux"
import CompanyInfoForm from "../../components/CompanyInfoForm"
import { useState } from "react"
import AddExpenseForm from "../../components/AddExpenseForm"
import axios from "axios"

function Company() {
    const company = useSelector(state => state.company)
    const user = useSelector(state => state.user)
    const [expense, setExpense] = useState({})
    function addExpense() {
        axios.post("http://localhost:3002/company/expense", expense, {
            headers: {
                authorization: `Bearer ${user.token}`
            },
        }).then(res => {
            console.log(res.data)
        })
    }
    return (
        <section className="flex bg-offWhite pr-4">
            <Navbar />
            <section className="flex-col flex-grow max-h-screen overflow-auto">
                <header className="flex items-center justify-between w-full my-6">
                    <h2 className="text-4xl font-bold">{company.name}</h2>
                </header>
                <div className=" items-center w-1/2">
                    <CompanyInfoForm />
                </div>
                <div className="h-[30px]">
                    <button className="bg-tangerine text-white w-[200px] h-full py-1 rounded-md cursor-pointer" onClick={addExpense}>ADD EXPENSE</button>

                </div>
                <div>
                    <AddExpenseForm expense={expense} setExpense={setExpense} />
                </div>
            </section>
        </section>
    )
}
export default Company
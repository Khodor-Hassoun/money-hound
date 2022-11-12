import Navbar from "../../components/Navbar"
import { FaSearch } from "react-icons/fa"
import { useState } from "react"
import AddEmployeeForm from "../../components/AddEmployeeForm"
import TableRow from "../../components/TableRow"
function Employees() {
    const [addEmployee, setAddEmployee] = useState(false)
    function addEmployeeForm() {
        setAddEmployee((empForm) => !empForm)
    }
    return (
        <section className="flex bg-offWhite pr-4">
            <Navbar />
            {/* EMPLOYEE CONTENT */}
            <section className="flex-grow">
                {/* HEADER SECTION TITLE NAME SEARCH BAR BUTTON */}
                <header className="flex items-center justify-between w-full my-6">
                    <h2 className="text-4xl font-bold">Employees</h2>

                    {/* SEARCH AND ADD BUTTON */}
                    <div className="flex items-center h-[30px] space-x-2">
                        {/* SEARCH BAR */}
                        <input type="text" placeholder="search..." className="rounded-md w-3/5 bg-offWhite flex-grow border-2 px-1 border-black" />
                        <div className="h-full w-3 flex items-center relative right-7">
                            <FaSearch size={100} />
                        </div>
                        {/* BUTTON */}
                        <button
                            className="bg-tangerine text-white w-[200px] h-full py-1 rounded-md cursor-pointer" onClick={addEmployeeForm}>
                            ADD
                        </button>
                    </div>
                </header>

                {/* TABLE HERE */}
                <table className="table-auto w-full border border-black [&>odd]:bg-beau">
                    <thead className="bg-ming text-white [&>*]:border [&>*]:border-black">
                        <tr className="[&>*]:border [&>*]:border-black">
                            <th className="justify-items-start">Name</th>
                            <th>Email</th>
                            <th>Job position</th>
                            <th>Payroll</th>
                        </tr>
                    </thead>
                    <tbody className=" [&>*]:border [&>*]:border-black [&>odd]:bg-beau odd:bg-beau">
                        {
                            [1, 2, 3, 4, 5, 6].map(val => {
                                if (val % 2 === 0) {
                                    return <TableRow background={'bg-beau'} />
                                } else {
                                    return <TableRow background={'bg-offWhite'} />
                                }
                            })
                        }
                    </tbody>

                </table>
                <div className={`${addEmployee ? "z-20 w-screen h-screen flex justify-center items-center fixed bg-opacity-50 bg-black inset-0" : "hidden pointer-events-none"}`}>
                    <div className="bg-offWhite flex flex-col py-10 px-6">
                        <div className="flex p-2">
                            <span className="text-2xl" onClick={addEmployeeForm}>&#10005;</span>
                            <div className="w-full">
                                <h2 className="flex justify-center text-2xl">Personal information</h2>
                            </div>
                        </div>
                        <AddEmployeeForm />
                        <button className="bg-tangerine text-white my-4 p-2 rounded-full w-full"  >NEXT</button>
                    </div>
                </div>
            </section>
        </section>
    )

}
export default Employees
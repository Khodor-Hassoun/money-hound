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
                        {/* <tr className="border border-black [&>*]:border  [&>*]:hover:bg-duneGold">
                            <td className="border border-black px-1">Khodor</td>
                            <td className="border border-black">Khodorhassoun@outlook.com</td>
                            <td>Project Manager</td>
                            <td>3000</td>
                        </tr>
                        <tr className="bg-beau [&>*]:border [&>*]:border-black">
                            <td>Khodor</td>
                            <td>Khodorhassoun@outlook.com</td>
                            <td>Project Manager</td>
                            <td>3000</td>
                        </tr>
                        <tr className="[&>*]:border [&>*]:border-black">
                            <th>Khodor</th>
                            <th>Khodorhassoun@outlook.com</th>
                            <th>Project Manager</th>
                            <th>3000</th>
                        </tr>
                        <tr className="[&>*]:border [&>*]:border-black ">
                            <th>Khodor</th>
                            <th>Khodorhassoun@outlook.com</th>
                            <th>Project Manager</th>
                            <th>3000</th>
                        </tr>
                        <tr className="[&>*]:border [&>*]:border-black">
                            <th>Khodorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr</th>
                            <th>Khodorhassoun@outlook.com</th>
                            <th>Project Manager</th>
                            <th>3000</th>
                        </tr> */}
                        <TableRow />
                        <TableRow />
                        <TableRow />
                        <TableRow />
                        <TableRow />
                    </tbody>

                </table>
                <div className={`${addEmployee ? "fixed z-50 bg-black bg-opacity-50 w-screen h-screen inset-0 flex justify-center items-center" : " pointer-events-none hidden"}`}>
                    <AddEmployeeForm popupMode={true} closePopup={setAddEmployee} />
                </div>
            </section>
        </section>
    )

}
export default Employees
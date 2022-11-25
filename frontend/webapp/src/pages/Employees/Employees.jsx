import Navbar from "../../components/Navbar"
import { FaSearch } from "react-icons/fa"
import { useEffect, useRef, useState } from "react"
import AddEmployeeForm from "../../components/AddEmployeeForm"
import TableRow from "../../components/TableRow"
import { useSelector } from "react-redux"
import axios from "axios"
import EmployeeDataForm from "../../components/EmployeeDataForm"
import AddExpenseForm from "../../components/AddExpenseForm"

function Employees() {
    const user = useSelector(state => state.user)
    const company = useSelector((state) => state.company)
    const headers = { headers: { authorization: `Bearer ${user.token}` } }

    const [employees, setEmployees] = useState([])
    const [employeesCount, setEmployeesCount] = useState(0)
    const [addEmployee, setAddEmployee] = useState(false)
    const [showEmployee, setShowEmployee] = useState(false)
    const [expenseForm, setExpenseForm] = useState(false)
    const [newEmployee, setNewEmployee] = useState({})
    const [employeeData, setEmployeeData] = useState({})
    const [deleteRefresh, setDeleteRefresh] = useState(false)
    const [expense, setExpense] = useState({})

    function addEmployeeForm() {
        setAddEmployee((empForm) => !empForm)
    }
    function showEmployeeForm() {
        setShowEmployee(bool => !bool)
    }
    function expenseFormOpen() {
        setExpenseForm(bool => !bool)
    }


    function addEmployeeRequest() {
        axios.post(`${process.env.REACT_APP_BASE_URL}company/employee`, {
            companyId: company.id,
            ...newEmployee
        }, headers)
            .then(res => {
                addEmployeeForm()
            })
    }
    function updateEmployeeRequest(id) {
        axios.put(`${process.env.REACT_APP_BASE_URL}company/employee/${id}`, employeeData, headers)
            .then(res => {
                showEmployeeForm()
            })
    }
    function deleteEmployee() {
        axios.delete(`${process.env.REACT_APP_BASE_URL}company/employee`, {
            headers: {
                authorization: `Bearer ${user.token}`
            },
            data: employeeData
        }).then(res => {
            showEmployeeForm()
        })
    }
    function addExpense() {
        axios.post("http://localhost:3002/company/expense", expense, headers)
            .then(res => {
                expenseFormOpen()
            })
    }

    // GET EMPLOYEES
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}company/employees`, headers)
            .then(res => {
                setEmployees(res.data.employees)
                setEmployeesCount(res.data.count)
            })

    }, ["", addEmployee, showEmployee, deleteRefresh])

    return (
        <section className="flex bg-offWhite pr-4">
            <Navbar />
            {/* EMPLOYEE CONTENT */}
            <section className="flex-grow max-h-screen overflow-auto p-4">
                {/* HEADER SECTION TITLE NAME SEARCH BAR BUTTON */}
                <header className="flex items-center justify-between w-full my-12">
                    <h2 className="text-4xl font-bold">Employees</h2>

                    {/* ADD BUTTONS */}
                    <div className="flex items-center h-[30px] space-x-2">

                        {/* BUTTON */}
                        <button
                            className="bg-tangerine text-white w-[200px] h-full py-1 rounded-md cursor-pointer font-bold" onClick={expenseFormOpen} >
                            ADD EXPENSE
                        </button>
                        <button
                            className="bg-tangerine text-white w-[200px] h-full py-1 rounded-md cursor-pointer font-bold" onClick={addEmployeeForm}>
                            ADD EMPLOYEE
                        </button>
                    </div>
                </header>

                {/* TABLE HERE */}
                <table className="table-auto w-full border border-black [&>odd]:bg-beau max-h-[800px] overflow-auto mt-5">
                    <thead className="bg-ming text-white [&>*]:border [&>*]:border-black">
                        <tr className="[&>*]:border [&>*]:border-black">
                            <th className="justify-items-start">Name</th>
                            <th>Email</th>
                            <th>Job position</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody className=" [&>*]:border [&>*]:border-black [&>odd]:bg-beau odd:bg-beau">
                        {
                            employees.map((employee, index) => {
                                let background
                                if (index % 2 === 0) {
                                    background = 'bg-offWhite'
                                } else {
                                    background = 'bg-beau'
                                }
                                return (
                                    <tr className={`[&>*]:border [&>*]:border-black [&>*]:p-1 hover:scale-y-125 hover:bg-cyan-50 cursor-pointer ${background}`}
                                        onClick={() => { setEmployeeData(employee); showEmployeeForm() }}>
                                        <TableRow employee={employee} />
                                    </tr>
                                )
                            })
                        }

                    </tbody>

                </table>
                {/* ADD EMPLOYEE POPUP */}
                {
                    addEmployee ?
                        <div className={`${addEmployee ? "z-20 w-screen h-screen flex justify-center items-center fixed bg-opacity-50 bg-black inset-0" : "hidden pointer-events-none"}`}>
                            <div className="bg-offWhite flex flex-col pb-10 pt-6 px-6 rounded-md">
                                <div className="flex p-2 mb-2">
                                    <span className="text-2xl cursor-pointer font-semibold" onClick={addEmployeeForm}>&#10005;</span>
                                    <div className="w-full">
                                        <h2 className="flex justify-center text-2xl font-semibold">Employee information</h2>
                                    </div>
                                </div>
                                <AddEmployeeForm setNewEmployee={setNewEmployee} newEmployee={newEmployee} />
                                <button className="bg-tangerine text-white my-4 p-2 rounded-full w-full font-bold" onClick={addEmployeeRequest} >ADD</button>
                            </div>
                        </div>
                        :
                        <></>

                }
                {
                    showEmployee ?
                        <div className={`${showEmployee ? "z-20 w-screen h-screen flex justify-center items-center fixed bg-opacity-50 bg-black inset-0" : "hidden pointer-events-none"}`}>
                            <div className="bg-offWhite flex flex-col pb-10 pt-6 px-6 rounded-md">
                                <div className="flex p-2 mb-2">
                                    <span className="text-2xl font-semibold cursor-pointer" onClick={showEmployeeForm}>&#10005;</span>
                                    <div className="w-full">
                                        <h2 className="flex justify-center text-2xl font-semibold">Employee information</h2>
                                    </div>
                                </div>
                                <EmployeeDataForm employee={employeeData} updateEmployee={setEmployeeData} />
                                {
                                    employeeData.ProjectId.length === 0 ?
                                        <div className="p-2 w-full flex flex-col justify-between space-y-4 my-2">
                                            <button className="bg-ming text-white  rounded-full py-2 font-bold " onClick={() => { updateEmployeeRequest(employeeData.employeeId); }}>UPDATE</button>
                                            <button className="bg-venetian text-white rounded-full py-2 font-bold" onClick={deleteEmployee}>DELETE</button>
                                        </div>
                                        :
                                        <div className="p-2 w-full flex justify-center space-x-2 my-2">
                                            <button className="bg-ming text-white w-full rounded-full py-2 font-bold" onClick={() => { updateEmployeeRequest(employeeData.employeeId); }}>UPDATE</button>

                                        </div>
                                }

                            </div>
                        </div>
                        :
                        ""
                }
                {
                    expenseForm ?
                        <div className={`${expenseForm ? "z-20 w-screen h-screen flex justify-center items-center fixed bg-opacity-50 bg-black inset-0" : "hidden pointer-events-none"}`}>
                            <div className="bg-offWhite flex flex-col pb-10 pt-6 px-6 rounded-md w-[400px]">
                                <div className="flex p-2 mb-2">
                                    <span className="text-2xl cursor-pointer font-semibold" onClick={expenseFormOpen}>&#10005;</span>
                                    <div className="w-full">
                                        <h2 className="flex justify-center text-2xl font-semibold">Expense Information</h2>
                                    </div>
                                </div>
                                <AddExpenseForm expense={expense} setExpense={setExpense} />
                                <button className="bg-tangerine text-white my-4 p-2 rounded-full w-full font-bold" onClick={addExpense} >ADD</button>
                            </div>
                        </div>
                        :
                        <></>
                }
            </section>
        </section>
    )

}
export default Employees
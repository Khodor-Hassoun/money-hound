import Navbar from "../../components/Navbar"
import { FaSearch } from "react-icons/fa"
import { useEffect, useRef, useState } from "react"
import AddEmployeeForm from "../../components/AddEmployeeForm"
import TableRow from "../../components/TableRow"
import { useSelector } from "react-redux"
import axios from "axios"
import EmployeeDataForm from "../../components/EmployeeDataForm"

function Employees() {
    const user = useSelector(state => state.user)
    const company = useSelector((state) => state.company)
    const [employees, setEmployees] = useState([])
    const [employeesCount, setEmployeesCount] = useState(0)
    const [addEmployee, setAddEmployee] = useState(false)
    const [showEmployee, setShowEmployee] = useState(false)
    const [newEmployee, setNewEmployee] = useState({})
    const [employeeData, setEmployeeData] = useState({})
    const [update, setUpdate] = useState(false)
    const [sortByName, setSortByName] = useState({})
    const [deleteRefresh, setDeleteRefresh] = useState(false)
    const sortRef = useRef()

    function addEmployeeForm() {
        setAddEmployee((empForm) => !empForm)
    }
    function updateEmployee() {
        setUpdate(bool => !bool)
    }
    function showEmployeeForm() {
        setShowEmployee(bool => !bool)
    }
    function addEmployeeRequest() {
        axios.post("http://localhost:3002/company/employee", { companyId: company.id, ...newEmployee }, {
            headers: {
                authorization: `Bearer ${user.token}`
            },
        }).then(res => {
            console.log(res)
            addEmployeeForm()
        })
    }
    function employeeInfo(employee) {
        setEmployeeData(employee)
    }
    function updateEmployeeRequest(id) {
        axios.put(`http://localhost:3002/company/employee/${id}`, employeeData, {
            headers: {
                authorization: `Bearer ${user.token}`
            },
        }).then(res => {
            console.log(res.data)
            showEmployeeForm()
        })
    }
    function deleteEmployee() {
        axios.delete(`http://localhost:3002/company/employee`, {
            headers: {
                authorization: `Bearer ${user.token}`
            },
            data: employeeData
        }).then(res => {
            console.log(res.data)
            showEmployeeForm()
        })
    }
    // function nameSort() {
    //     let originalEmployees = employees
    //     setSortByName(String(sortRef.current.value))
    //     if (String(sortByName).trim().length !== '') {
    //         for (let employee of employees) {
    //             let firstname = String(employee.user.firstname)
    //             let lastname = String(employee.user.lastname)
    //             let sortedEmps = []
    //             if (firstname.includes(sortByName) || lastname.includes(sortByName)) {
    //                 sortedEmps.push(employee)
    //             }
    //             setEmployees(sortedEmps)
    //         }
    //     } else {
    //         setEmployees(originalEmployees)
    //     }
    // }
    // GET EMPLOYEES
    useEffect(() => {
        axios.get("http://localhost:3002/company/employees", {
            headers: {
                authorization: `Bearer ${user.token}`
            },
        }).then(res => {
            console.log(res.data)
            // setEmployees(res.data.employees)
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

                    {/* SEARCH AND ADD BUTTON */}
                    <div className="flex items-center h-[30px] space-x-2">
                        {/* SEARCH BAR */}
                        {/* <input type="text" placeholder="search..." defaultValue={''} name="sort" ref={sortRef} className="rounded-md w-3/5 bg-offWhite flex-grow border-2 px-1 border-black" />
                        <div className="h-full w-3 flex items-center relative right-7">
                            <FaSearch size={100} />
                        </div> */}
                        {/* BUTTON */}
                        <button
                            className="bg-tangerine text-white w-[200px] h-full py-1 rounded-md cursor-pointer" onClick={addEmployeeForm}>
                            ADD
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
                                    <tr className={`[&>*]:border [&>*]:border-black [&>*]:p-1 hover:scale-y-125 hover:bg-cyan-50 cursor-pointer ${background}`} onClick={() => { setEmployeeData(employee); showEmployeeForm() }}>
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
                            <div className="bg-offWhite flex flex-col py-10 px-6">
                                <div className="flex p-2">
                                    <span className="text-2xl cursor-pointer" onClick={addEmployeeForm}>&#10005;</span>
                                    <div className="w-full">
                                        <h2 className="flex justify-center text-2xl">Employee information</h2>
                                    </div>
                                </div>
                                <AddEmployeeForm setNewEmployee={setNewEmployee} newEmployee={newEmployee} />
                                <button className="bg-tangerine text-white my-4 p-2 rounded-full w-full" onClick={() => { console.log(newEmployee); addEmployeeRequest() }} >ADD</button>
                            </div>
                        </div>
                        :
                        <></>

                }
                {
                    showEmployee ?
                        <div className={`${showEmployee ? "z-20 w-screen h-screen flex justify-center items-center fixed bg-opacity-50 bg-black inset-0" : "hidden pointer-events-none"}`}>
                            <div className="bg-offWhite flex flex-col py-10 px-6">
                                <div className="flex p-2">
                                    <span className="text-2xl" onClick={() => { showEmployeeForm() }}>&#10005;</span>
                                    <div className="w-full">
                                        <h2 className="flex justify-center text-2xl">Employee information</h2>
                                    </div>
                                </div>
                                <EmployeeDataForm employee={employeeData} updateEmployee={setEmployeeData} />
                                {
                                    employeeData.ProjectId.length === 0 ?
                                        <div className="px-2 w-full flex justify-between space-x-2">
                                            <button className="bg-tea text-white my-4 rounded-lg  w-2/5 py-2" onClick={() => { updateEmployeeRequest(employeeData.employeeId); }}>Update</button>
                                            <button className="bg-venetian text-white my-4 rounded-lg w-2/5 py-2" onClick={deleteEmployee}>Delete</button>
                                        </div>
                                        :
                                        <div className="px-2 w-full flex justify-center space-x-2">
                                            <button className="bg-ming text-white my-4 rounded-lg  w-2/5 py-2" onClick={() => { updateEmployeeRequest(employeeData.employeeId); }}>Update</button>

                                        </div>
                                }

                            </div>
                        </div>
                        :
                        ""
                }
            </section>
        </section>
    )

}
export default Employees
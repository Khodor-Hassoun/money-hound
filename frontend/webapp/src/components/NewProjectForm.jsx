import { useRef } from "react"

function NewProjectForm({ setNewProjectData, customers, employees, newProjectData }) {
    const emailRef = useRef()
    const dateRef = useRef()
    const budgetRef = useRef()
    const managerIdRef = useRef()
    const nameRef = useRef()
    function dataChange(e) {
        // setNewProjectData({
        //     customer_email: emailRef.current.value,
        //     project_name: nameRef.current.value,
        //     budget: parseInt(budgetRef.current.value),
        //     deadline: dateRef.current.value,
        //     managerId: parseInt(managerIdRef.current.value)
        // })
        setNewProjectData({ ...newProjectData, [e.target.name]: e.target.value })
    }
    return (
        <div className="flex flex-col">
            <div className="flex flex-col py-2">
                <label htmlFor="companyemail" className="font-semibold">Project Name</label>
                <input
                    type="text"
                    id="project_name"
                    placeholder=""
                    name="project_name"
                    className="border-black border-solid border rounded py-2 px-1"
                    ref={nameRef}
                    onChange={dataChange}
                ></input>
            </div>
            <div className="flex flex-col py-2">
                <label htmlFor="email" className="font-semibold">Customers</label>
                <select className="border-black border-solid border rounded py-2 px-1" id="email" name="customer_email" ref={emailRef} onChange={dataChange}>
                    <option value={''} disabled selected hidden>Customers</option>
                    {
                        customers.map(customer => {
                            return <option value={customer.customer_email}>{customer.customer_name}</option>
                        })
                    }
                </select>
            </div>
            <div className="flex flex-col py-2">
                <label htmlFor="manager" className="font-semibold">Project Manager</label>
                <select className="border-black border-solid border rounded py-2 px-1" name="managerId" id="manager" ref={managerIdRef} onChange={dataChange}>
                    <option value={''} disabled selected hidden>Employees</option>
                    {
                        employees.map(employee => {
                            return <option value={employee.employeeId}>{`${employee.user.firstname} ${employee.user.lastname}`}</option>
                        })
                    }
                </select>
            </div>

            <div className="flex py-2 w-full justify-between">
                {/* FIRST NAME LAST NAME */}
                <div className="flex flex-col mr-0.5 w-[48%]">
                    <label htmlFor="budget" className="font-semibold">Budget</label>
                    <input
                        type="number"
                        id="budget"
                        className="border-black border-solid border rounded py-2 px-1 h-full"
                        name="budget"
                        ref={budgetRef}
                        onChange={dataChange}
                    ></input>
                </div>
                <div className="flex flex-col w-[48%]">
                    <label htmlFor="date" className="font-semibold">Due Date</label>
                    <input
                        type="date"
                        id="date"
                        name="deadline"
                        className="border-black border-solid border rounded py-2 px-1"
                        ref={dateRef}
                        onChange={dataChange}
                    ></input>
                </div>
            </div>

        </div>
    )
}
export default NewProjectForm
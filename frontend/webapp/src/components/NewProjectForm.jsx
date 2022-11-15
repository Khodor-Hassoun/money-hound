import { useRef } from "react"

function NewProjectForm({ setNewProjectData }) {
    const emailRef = useRef()
    const dateRef = useRef()
    const budgetRef = useRef()
    const managerIdRef = useRef()
    const nameRef = useRef()
    function dataChange() {
        setNewProjectData({
            customer_email: emailRef.current.value,
            project_name: nameRef.current.value,
            budget: parseInt(budgetRef.current.value),
            deadline: new Date(dateRef.current.value),
            managerId: parseInt(managerIdRef.current.value)
        })
    }
    return (
        <div className="flex flex-col">
            <div className="flex flex-col p-2">
                <label htmlFor="companyemail">Project Name</label>
                <input
                    type="text"
                    id="projectname"
                    placeholder=""
                    className="border-black border-solid border rounded py-2 px-1"
                    ref={nameRef}
                    onClick={dataChange}
                ></input>
            </div>
            <div className="flex flex-col p-2">
                <label htmlFor="email">Customer Email</label>
                <select className="border-black border-solid border rounded py-2 px-1" id="email" ref={emailRef} onClick={dataChange}>
                    <option value={1}>1</option>
                    <option value={2}>1</option>
                    <option value={3}>1</option>
                    <option value={4}>1</option>
                    <option value={5}>1</option>
                </select>
            </div>
            <div className="flex flex-col p-2">
                <label htmlFor="manager">Customer Email</label>
                <select className="border-black border-solid border rounded py-2 px-1" id="manager" ref={managerIdRef} onClick={dataChange}>
                    <option value={1}>1</option>
                    <option value={2}>1</option>
                    <option value={3}>1</option>
                    <option value={4}>1</option>
                    <option value={5}>1</option>
                </select>
            </div>

            <div className="flex p-2 w-full justify-between">
                {/* FIRST NAME LAST NAME */}
                <div className="flex flex-col mr-0.5 w-[48%]">
                    <label htmlFor="budget">Budget</label>
                    <input
                        type="number"
                        id="budget"
                        className="border-black border-solid border rounded py-2 px-1 h-full"
                        ref={budgetRef}
                        onClick={dataChange}
                    ></input>
                </div>
                <div className="flex flex-col w-[48%]">
                    <label htmlFor="date">Due Date</label>
                    <input
                        type="date"
                        id="date"
                        className="border-black border-solid border rounded py-2 px-1"
                        ref={dateRef}
                        onClick={dataChange}
                    ></input>
                </div>
            </div>

        </div>
    )
}
export default NewProjectForm
import { useRef } from "react"

function EmployeeDataForm({ employee, updateEmployee }) {
    const date = new Date(employee.start_date)
    function dataChange(e) {
        updateEmployee({ ...employee, [e.target.name]: e.target.value })
    }
    if (Object.keys(employee) !== 0) {
        return (
            <div className="flex flex-col">
                <h2 className="p-2 text-xl" onClick={() => { console.log(employee) }}>{`${employee.user.firstname} ${employee.user.lastname}`}</h2>
                <span className="p-2">{`Joined: ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</span>
                <div className="flex flex-col p-2 w-[400px]">
                    <p className="overflow-auto">
                        <span className="font-semibold">Active Projects:</span><br />
                        <div className="space-x-1">
                            {
                                employee.ProjectId.length !== 0 ?
                                    employee.ProjectId.map(project => (
                                        project.end_date ?
                                            <></>
                                            :
                                            <span className="font-sm">{`${project.project_name},`}</span>

                                    ))
                                    :
                                    <></>
                            }
                            {
                                employee.Project.length !== 0 ?
                                    employee.Project.map(project => (
                                        project.end_date ?
                                            <></>
                                            :
                                            <span className="font-sm">{`${project.project_name},`}</span>

                                    ))
                                    :
                                    <></>
                            }

                        </div>
                        {/* CHECK IF THEY ARE A MANGER */}
                    </p>
                    {/* <p>Project:</p> */}
                    {/* {
                        employee.project.length === 0 ?
                            <></>
                            :
                            <>
                                {
                                    employee.project.map((project, indes) => (
                                        <span>{`${project.project_name}, `}</span>
                                    ))
                                }
                            </>
                    } */}

                </div>
                {/* DATA */}
                <div className="flex p-2 w-full justify-between">
                    {/* NAME */}
                    <div className="flex flex-col mr-0.5 w-[48%]">
                        <label htmlFor="name" className="font-semibold">Job Position</label>
                        <input type="text" id="name" defaultValue={employee.job_position} name="job_position" onChange={dataChange} className="border-black border-solid border rounded py-2 px-1"></input>
                    </div>
                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="capital" className="font-semibold">Salary</label>
                        <input type="text" id="capital" defaultValue={employee.wage} name="wage" onChange={dataChange} className="border-black border-solid border rounded py-2 px-1"></input>
                    </div>
                </div>
            </div>
        )
    }

}
export default EmployeeDataForm
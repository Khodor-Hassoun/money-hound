import { useSelector } from "react-redux"

function ProjectDetails({ project, setProject, employees }) {
    const user = useSelector(state => state.user)
    const percentstr = (Math.floor((project.money_spent / project.budget) * 100) + '%').toString()
    const percent = Math.floor((project.money_spent / project.budget) * 100)
    return (
        <div className="flex flex-col">
            {/* PROJECT MANAGER */}
            {
                user.user_type === 1 ?
                    <>
                        <div className="flex flex-col py-2">
                            <label htmlFor="manager">Project Manger</label>
                            {/* <input type="text" id="manager" placeholder={project.manager.user.firstname} name="email" className="border-black border-solid border rounded py-2 px-1"></input> */}
                            <select className="border-black border-solid border rounded py-1 px-1" name="managerId" id="manager">
                                <option selected value={project.manager.employeeId}>{`${project.manager.user.firstname} ${project.manager.user.lastname}`}</option>
                                {
                                    employees.map(employee => (
                                        employee.employeeId !== project.manager.employeeId ?
                                            <option value={employee.employeeId}>{`${employee.user.firstname} ${employee.user.lastname}`}</option>
                                            :
                                            <></>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="flex flex-col py-2">
                            <label htmlFor="email">Project Name</label>
                            <input type="text" id="email" placeholder={project.project_name} name="project_name" className="border-black border-solid border rounded py-1 px-1"></input>
                        </div>
                        <div className="flex flex-col py-2">
                            <label htmlFor="date">Deadline</label>
                            <input type="date" id="date" placeholder={project.deadline} name="deadline" className="border-black border-solid border rounded py-1 px-1"></input>
                        </div>
                        <div className="flex flex-col pt-2">
                            <label htmlFor="budget">Budget</label>
                            <input type="number" id="email" placeholder={project.budget} name='budget' className="border-black border-solid border rounded py-1 px-1"></input>
                        </div>
                    </>
                    :
                    <>
                        <div className="flex flex-col py-2">
                            <label htmlFor="phase">Project Phase</label>
                            <select name="project_phase_id" className="border-black border-solid border rounded py-1 px-1">
                                {
                                    project.project_phase_id === 1 ? <option selected value={1}>Planning</option> : <option value={1}>Planning</option>
                                }
                                {
                                    project.project_phase_id === 2 ? <option selected value={2}>Execution</option> : <option value={2}>Execution</option>
                                }
                                {
                                    project.project_phase_id === 3 ? <option selected value={3}>Finalization</option> : <option value={3}>Finalization</option>
                                }
                            </select>
                        </div>
                        <div className="flex flex-col py-2">
                            <label htmlFor="date">End Date</label>
                            <input type="date" id="date" placeholder={project.end_date} name="end_date" className="border-black border-solid border rounded py-1 px-1"></input>
                        </div>
                        <div className="py-2 flex flex-col">
                            <label htmlFor="team">Team</label>
                            {/* <input type="text" id="manager" placeholder={project.manager.user.firstname} name="email" className="border-black border-solid border rounded py-2 px-1"></input> */}
                            <select className="border-black border-solid border rounded py-1 px-1" name="team" id="team" multiple>
                                <option selected value={project.manager.employeeId}>{`${project.manager.user.firstname} ${project.manager.user.lastname}`}</option>
                                {
                                    employees.map(employee => (
                                        employee.employeeId !== project.manager.employeeId ?
                                            <option value={employee.employeeId}>{`${employee.user.firstname} ${employee.user.lastname}`}</option>
                                            :
                                            <></>
                                    ))
                                }
                            </select>
                        </div>
                    </>
            }

            <div className="pt-4">
                <div className="w-full bg-tea h-[40px]">
                    {
                        percent > 100 ?
                            <div className={`bg-venetian h-full w-full`}>
                            </div>
                            :
                            <div className={`bg-mint h-full`} style={{ width: `${percentstr}` }}>
                            </div>
                    }
                </div>
                <div className="flex flex-col">
                    <p>{`Budget: ${project.budget}`}</p>
                    <p>{`Spent: ${project.money_spent}`}</p>

                </div>
            </div>

        </div>
    )
}
export default ProjectDetails
import { useSelector } from "react-redux"
import { useEffect } from "react";
import Select from "react-select"
function ProjectDetails({ project, employees, setupdatedProjectData, updatedProjectData, setSelectedOptions, selectedOptions, phaseOption, setPhaseOption }) {
    const user = useSelector(state => state.user)

    const percentstr = (Math.floor((project.money_spent / project.budget) * 100) + '%').toString()
    const percent = Math.floor((project.money_spent / project.budget) * 100)
    const options = []
    const existingTeam = []
    const employeesArr = []
    const teamIdArr = []
    const phaseOptions = [
        { value: 1, label: "Planning" },
        { value: 2, label: "Execution" },
        { value: 3, label: "Finalization" }
    ]
    function dataChange(e) {
        setupdatedProjectData({ ...updatedProjectData, [e.target.name]: e.target.value })
    }

    function handleSelect(data) {
        setSelectedOptions(data);
    }
    function handlePhase(e) {
        setPhaseOption(e)
    }
    // GET ALL EXISITING TEAM MEMBERS
    for (let teamMem of project.team) {
        existingTeam.push({ value: teamMem.employeeId, label: `${teamMem.user.firstname} ${teamMem.user.lastname}` })
        teamIdArr.push(teamMem.employeeId)

    }
    // GET ALL EMPLOYEE WHO ARE NOT PART OF THE TEAM
    for (let employee of employees) {
        if (employee.employeeId !== project.managerId && !teamIdArr.includes(employee.employeeId)) {

            employeesArr.push({ value: employee.employeeId, label: `${employee.user.firstname} ${employee.user.lastname}` })
        }
    }
    options.push(...existingTeam, ...employeesArr)
    useEffect(() => {
        if (user.user_type === 3) {
            setSelectedOptions(existingTeam)
            setPhaseOption({ value: project.project_phase_id, label: project.project_phase.type })
        }
    }, ['', project])

    return (
        <div className="flex flex-col">
            {/* PROJECT MANAGER */}
            {
                user.user_type === 1 ?
                    <>
                        <div className="flex flex-col py-2">
                            <label htmlFor="manager" className="text-white font-semibold">Project Manger</label>
                            <select className="border-black border-solid border rounded py-1 px-1" name="managerId" id="manager" onChange={dataChange}>
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
                            <label htmlFor="email" className="text-white font-semibold">Project Name</label>
                            <input type="text" id="email" defaultValue={project.project_name} name="project_name" onChange={dataChange} className="border-black border-solid border rounded py-1 px-1"></input>
                        </div>
                        <div className="flex flex-col py-2">
                            <label htmlFor="date" className="text-white font-semibold">Deadline</label>
                            <input type="date" id="date" defaultValue={project.deadline} name="deadline" onChange={dataChange} className="border-black border-solid border rounded py-1 px-1"></input>
                        </div>
                        <div className="flex flex-col pt-2">
                            <label htmlFor="budget" className="text-white font-semibold">Budget</label>
                            <input type="number" id="email" defaultValue={project.budget} name='budget' onChange={dataChange} className="border-black border-solid border rounded py-1 px-1"></input>
                        </div>
                    </>
                    :
                    <>
                        <div className="flex flex-col py-2">
                            <label htmlFor="phase" className="text-white font-semibold">Project Phase</label>
                            <Select
                                name="project_phase"
                                defaultValue={phaseOption}
                                value={phaseOption}
                                onChange={handlePhase}
                                options={phaseOptions}
                                htmlFor='project_phase'
                                className="rounded"
                            />
                        </div>
                        <div className="py-2 flex flex-col">
                            <label htmlFor="team" className="text-white font-semibold">Team</label>
                            <Select
                                // defaultValue={existingTeam}
                                isMulti
                                name="newteam"
                                value={selectedOptions}
                                onChange={handleSelect}
                                options={options}
                                className="rounded"
                            />
                        </div>
                    </>
            }

            <div className="pt-4 text-white">
                <div className="w-full bg-tea h-[30px] rounded" >
                    {
                        percent > 100 ?
                            <div className={`bg-venetian h-full w-full rounded`}>
                            </div>
                            :
                            <div className={`bg-mint h-full rounded`} style={{ width: `${percentstr}` }}>
                            </div>
                    }
                </div>
                <div className="flex flex-col">
                    <p>
                        <span className="font-semibold">Budget: </span>{project.budget}
                    </p>
                    <p>
                        <span className="font-semibold">Money spent: </span>{project.money_spent}
                    </p>

                </div>
            </div>

        </div>
    )
}
export default ProjectDetails
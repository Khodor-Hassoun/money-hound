import { useSelector } from "react-redux"
import { useEffect, useState } from "react";
import Select from "react-select"
// import Select from "react-select"
function ProjectDetails({ project, setProject, employees, setupdatedProjectData, updatedProjectData, setSelectedOptions, selectedOptions, phaseOption, setPhaseOption }) {
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
    // const [selectedOptions, setSelectedOptions] = useState(existingTeam);

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
                            <label htmlFor="manager">Project Manger</label>
                            {/* <input type="text" id="manager" placeholder={project.manager.user.firstname} name="email" className="border-black border-solid border rounded py-2 px-1"></input> */}
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
                            <label htmlFor="email">Project Name</label>
                            <input type="text" id="email" defaultValue={project.project_name} name="project_name" onChange={dataChange} className="border-black border-solid border rounded py-1 px-1"></input>
                        </div>
                        <div className="flex flex-col py-2">
                            <label htmlFor="date">Deadline</label>
                            <input type="date" id="date" defaultValue={project.deadline} name="deadline" onChange={dataChange} className="border-black border-solid border rounded py-1 px-1"></input>
                        </div>
                        <div className="flex flex-col pt-2">
                            <label htmlFor="budget">Budget</label>
                            <input type="number" id="email" defaultValue={project.budget} name='budget' onChange={dataChange} className="border-black border-solid border rounded py-1 px-1"></input>
                        </div>
                    </>
                    :
                    <>
                        <div className="flex flex-col py-2">
                            <label htmlFor="phase">Project Phase</label>
                            <Select
                                name="project_phase"
                                defaultValue={phaseOption}
                                value={phaseOption}
                                onChange={handlePhase}
                                options={phaseOptions}
                                htmlFor='project_phase'
                            />
                        </div>
                        <div className="py-2 flex flex-col">
                            <label htmlFor="team">Team</label>
                            <Select
                                // defaultValue={existingTeam}
                                isMulti
                                name="newteam"
                                value={selectedOptions}
                                onChange={handleSelect}
                                options={options}
                                className=""
                            />
                        </div>
                    </>
            }

            <div className="pt-4">
                <div className="w-full bg-tea h-[40px]" >
                    {
                        percent > 100 ?
                            <div className={`bg-venetian h-full w-full`}>
                            </div>
                            :
                            <div className={`bg-mint h-full`} style={{ width: `${percentstr}` }}>
                            </div>
                    }
                </div>
                <div className="flex flex-col" onClick={() => { console.log(phaseOption) }}>
                    <p>{`Budget: ${project.budget}`}</p>
                    <p>{`Spent: ${project.money_spent}`}</p>

                </div>
            </div>

        </div>
    )
}
export default ProjectDetails
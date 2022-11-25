import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import axios from "axios"
import Navbar from "../../components/Navbar"
import ProjectCard from "../../components/ProjectCard"
import ProjectDetails from "../../components/ProjectDetails"
import ProjectActivityDetails from "../../components/ProjectActivityDetails"
import AddActivityForm from "../../components/AddActivityForm"
import ActivityPhaseLegend from "../../components/ActivityPhaseLegend"

function ManagerProject() {
    const user = useSelector(state => state.user)
    const company = useSelector(state => state.company)
    const headers = { headers: { authorization: `Bearer ${user.token}` } }

    const [projects, setProjects] = useState({})
    const [project, setProject] = useState({})
    const [projectDetailsForm, setProjectDetailsForm] = useState(false)
    const [employees, setEmployees] = useState([])
    const [activityChange, setActivityChange] = useState(false)
    const [addActivityPopUp, setAddActivityPopUp] = useState(false)
    const [activityDetails, setActivityDetails] = useState({})
    const [updatedProjectData, setupdatedProjectData] = useState({})
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [phaseOption, setPhaseOption] = useState()


    function projectDetailsOpen() {
        setProjectDetailsForm(bool => !bool)
    }
    function addActivityPopUpOpen() {
        setAddActivityPopUp(bool => !bool)
    }

    // GET MANAGER PROJECTS
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}project/${user.id}`, headers)
            .then(res => {
                setProjects(res.data)
            })
    }, [addActivityPopUp, activityChange])

    // GET EMPLOYEES
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}company/manager/${company.id}`, headers)
            .then(res => {
                setEmployees(res.data)
            })
    }, [])

    function addActivity() {
        axios.post(`${process.env.REACT_APP_BASE_URL}project/${project.id}/add`, activityDetails, headers)
            .then(res => {
                setProject(res.data)
                addActivityPopUpOpen()
            })
    }
    function updateProject() {
        axios.put(`${process.env.REACT_APP_BASE_URL}project/`,
            { ...updatedProjectData, newteam: selectedOptions, project_phase: phaseOption.value }, headers)
            .then(res => {
                setProject(res.data)
            })
    }





    return (
        <section className="flex bg-offWhite pr-4">
            <Navbar />
            <section className="flex-grow max-h-screen overflow-auto p-4">
                <header className="flex flex-col md:flex-row space-y-3 items-start md:justify-between w-full my-12">
                    <h2 className="text-4xl font-bold">Projects</h2>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8 gap-4 lg:gap-3">
                    {
                        Object.keys(projects).length === 0 ? <></>
                            :
                            projects.map(project => {
                                return (
                                    project.end_date === null ?
                                        <div className="p-8 bg-white shadow-lg rounded-2xl" onClick={() => { setProject(project); setupdatedProjectData(project); projectDetailsOpen(); }}>
                                            <ProjectCard project={project} />
                                        </div>
                                        :
                                        <></>

                                )

                            })
                    }

                </div>
            </section >
            {
                projectDetailsForm ?
                    <div className={`${projectDetailsForm ? "z-20 w-screen h-screen flex justify-center items-center rounded fixed bg-opacity-50 bg-black inset-0" : ""}`}>
                        {/* CONTAINER FOR ALL */}
                        <div className="flex xl:w-9/12 xl:h-[90%] h-full w-full justify-between items-start max-h-[900px]">
                            {/* CONTAINER FOR ACTIVITIES */}
                            <div className="flex flex-col flex-grow h-full bg-offWhite px-6 pb-10 pt-4 overflow-auto rounded-l-md">
                                {/* HEADER */}
                                <div className="flex items-center mb-8">
                                    <span className="text-2xl cursor-pointer font-semibold" onClick={projectDetailsOpen}>&#10005;</span>
                                    <h2 className="text-2xl flex-grow flex justify-center font-semibold">{project.project_name.toUpperCase()}</h2>
                                </div>

                                <div className="w-full bg-offWhite h-[30px] flex justify-end space-x-4 mb-8">
                                    {
                                        project.Activity.length !== 0 ?
                                            <ActivityPhaseLegend />
                                            :
                                            <></>

                                    }
                                </div>
                                {/* ACTIVITY CARDS */}
                                <div className="space-y-5">
                                    {
                                        project.Activity.length === 0 ?
                                            <div className="">
                                                <h1 className=" text-xl font-semibold">No activities yet</h1>
                                            </div>
                                            :
                                            <></>
                                    }
                                    {
                                        addActivityPopUp ?
                                            project.hasOwnProperty('Activity') ?
                                                project.Activity.map((activity, index) => {

                                                    return <ProjectActivityDetails activity={activity} index={index} top={0} bottom={project.Activity.length} project={project} />
                                                }) : <></>
                                            :
                                            project.hasOwnProperty('Activity') ?
                                                project.Activity.map((activity, index) => {

                                                    return <ProjectActivityDetails activity={activity} index={index} top={0} bottom={project.Activity.length} project={project} />
                                                }) : <></>
                                    }
                                </div>
                            </div>
                            {/* CONTAINER FOR PROJECT */}
                            <div className="flex flex-col bg-ming px-6 pb-10 pt-4 xl:w-3/12 w-1/3 justify-between h-full rounded-r-md" >
                                <h2 className="text-2xl font-semibold text-white">Details</h2>
                                {
                                    Object.keys(project).length !== 0 ?
                                        <ProjectDetails
                                            project={project} setProject={setProject} employees={employees} setupdatedProjectData={setupdatedProjectData} updatedProjectData={updatedProjectData}
                                            setSelectedOptions={setSelectedOptions} selectedOptions={selectedOptions} phaseOption={phaseOption} setPhaseOption={setPhaseOption} />
                                        :
                                        ""
                                }
                                <div className="flex flex-col space-y-2 w-full">
                                    <button
                                        className="bg-none text-tangerine border-tangerine border-2 w-full h-full py-1 rounded-md cursor-pointer font-bold bg-ming hover:brightness-110"
                                        onClick={updateProject}>
                                        UPDATE
                                    </button>
                                    <button
                                        onClick={addActivityPopUpOpen}
                                        className="bg-tangerine text-white w-full h-full py-1 rounded-md cursor-pointer font-bold" >
                                        ADD
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                    :
                    <></>

            }
            {
                addActivityPopUp ?
                    <div className="z-20 w-screen h-screen flex justify-center items-center fixed bg-opacity-50 bg-black inset-0">
                        <div className="bg-offWhite flex flex-col pb-10 pt-6 px-6 rounded-md">
                            <div className="flex p-2">
                                <span className="text-2xl cursor-pointer font-semibold" onClick={addActivityPopUpOpen}>&#10005;</span>
                                <div className="w-full">
                                    <h2 className="flex justify-center text-2xl font-semibold">Activity information</h2>
                                </div>
                            </div>
                            <AddActivityForm setActivityDetails={setActivityDetails} activityDetails={activityDetails} />
                            <button className="bg-tangerine text-white my-4 p-2 rounded-full w-full font-bold" onClick={() => { addActivity() }} >ADD</button>
                        </div>
                    </div>
                    :
                    <></>
            }
        </section >
    )
}
export default ManagerProject
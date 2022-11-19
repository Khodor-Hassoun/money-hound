import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import axios from "axios"
import Navbar from "../../components/Navbar"
import ProjectCard from "../../components/ProjectCard"
import ProjectDetails from "../../components/ProjectDetails"
import ProjectActivityDetails from "../../components/ProjectActivityDetails"
function ManagerProject() {
    const user = useSelector(state => state.user)
    const company = useSelector(state => state.company)
    const [projects, setProjects] = useState({})
    const [project, setProject] = useState({})
    const [projectDetailsForm, setProjectDetailsForm] = useState(false)
    const [employees, setEmployees] = useState([])
    function projectDetailsOpen() {
        setProjectDetailsForm(bool => !bool)
    }
    useEffect(() => {
        axios.get(`http://localhost:3002/project/${user.id}`, {
            headers: {
                authorization: `Bearer ${user.token}`
            },
        }).then(res => {
            console.log('----------PROJECTS DATA---------')
            console.log(res)
            setProjects(res.data)
            console.log('----------/PROJECTS DATA-----------')

        })
    }, [])
    // GET EMPLOYEES
    useEffect(() => {
        axios.get(`http://localhost:3002/company/manager/${company.id}`, {
            headers: {
                authorization: `Bearer ${user.token}`
            },
        }).then(res => {
            console.log(res.data)
            // setEmployees(res.data.employees)
            setEmployees(res.data.employees)
        })
    }, [])
    return (
        <section className="flex bg-offWhite pr-4">
            <Navbar />
            <section className="flex-grow max-h-screen overflow-auto">
                <header className="flex flex-col md:flex-row space-y-3 items-start md:justify-between w-full my-6">
                    <h2 className="text-4xl font-bold">Projects</h2>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-5">
                    {
                        Object.keys(projects).length === 0 ? <></>
                            :
                            projects.map(project => {
                                return (
                                    project.end_date === null ?
                                        <div className="p-4 bg-white shadow-lg rounded-2xl" onClick={() => { setProject(project); projectDetailsOpen() }}>
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
                    <div className={`${projectDetailsForm ? "z-20 w-screen h-screen flex justify-center items-center fixed bg-opacity-50 bg-black inset-0" : ""}`}>
                        {/* CONTAINER FOR ALL */}
                        <div className="flex xl:w-9/12 xl:h-[90%] h-full w-full justify-between items-start max-h-[900px]">
                            {/* CONTAINER FOR ACTIVITIES */}
                            <div className="flex flex-col flex-grow h-full bg-offWhite px-6 pb-10 pt-4 overflow-auto">
                                {/* HEADER */}
                                <div className="flex items-center mb-16">
                                    <span className="text-2xl cursor-pointer" onClick={projectDetailsOpen}>&#10005;</span>
                                    <h2 className="text-2xl flex-grow flex justify-center">{project.project_name}</h2>
                                </div>
                                {/* ACTIVITY CARDS */}
                                {
                                    project.hasOwnProperty('Activity') ?
                                        project.Activity.map((activity, index) => {
                                            return <ProjectActivityDetails activity={activity} index={index} top={0} bottom={project.Activity.length} />
                                        }) : ""
                                }
                            </div>
                            {/* CONTAINER FOR PROJECT */}
                            <div className="flex flex-col bg-beau px-6 pb-10 pt-4 xl:w-3/12 w-1/3 justify-between h-full" >
                                <h2 className="text-2xl">Details</h2>
                                {
                                    Object.keys(project).length !== 0 ?
                                        <ProjectDetails project={project} setProject={setProject} employees={employees} />
                                        :
                                        ""
                                }
                                <div className="flex flex-col space-y-2 w-full">
                                    <button
                                        className="bg-tangerine text-white w-full h-full py-1 rounded-md cursor-pointer" >
                                        ADD
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                    :
                    <></>

            }
        </section >
    )
}
export default ManagerProject
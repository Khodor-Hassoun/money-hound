import { useEffect, useState } from "react"
import Navbar from "../../components/Navbar"
import CustomerForm from "../../components/CustomerForm"
import NewProjectForm from "../../components/NewProjectForm"
import axios from "axios"
import { useSelector } from "react-redux"
import ProjectCard from "../../components/ProjectCard"
import ProjectDetails from "../../components/ProjectDetails"
import ProjectActivityDetails from "../../components/ProjectActivityDetails"
import SaleInfoForm from "../../components/SaleInfoForm"
import SaleInfoDetails from "../../components/SaleInfoDetails"

function Projects() {
    const company = useSelector(state => state.company)
    const user = useSelector(state => state.user)
    const [customerForm, setCustomerForm] = useState(false)
    const [projectForm, setProjectForm] = useState(false)
    const [customerData, setCustomerData] = useState({})
    const [newProjectData, setNewProjectData] = useState({})
    const [projects, setProjects] = useState([])
    const [customers, setCustomers] = useState([])
    const [employees, setEmployees] = useState([])
    const [project, setProject] = useState({})
    const [projectDetailsForm, setProjectDetailsForm] = useState(false)
    const [projectSaleForm, setProjectSaleForm] = useState(false)

    function customerFormOpen() {
        setCustomerForm(bool => !bool)
    }
    function addProjectFomrOpen() {
        setProjectForm(bool => !bool)
    }
    function projectDetailsOpen() {
        setProjectDetailsForm(bool => !bool)
    }
    function projectSaleFormOpen() {
        setProjectSaleForm(bool => !bool)
    }
    // GET PROJECTS
    useEffect(() => {
        axios.get("http://localhost:3002/project/", {
            headers: {
                authorization: `Bearer ${user.token}`
            },
        }).then(res => {
            console.log('----------PROJECTS DATA---------')
            console.log(res)
            setProjects(res.data)
            console.log('----------/PROJECTS DATA-----------')

        })
    }, [projectForm])
    // GET CUSTOMERS
    useEffect(() => {
        axios.get("http://localhost:3002/company/customers", {
            headers: {
                authorization: `Bearer ${user.token}`
            },
        }).then(res => {
            console.log('---------CUSTOMERS----------')
            console.log(res)
            setCustomers(res.data)
            console.log('---------/CUSTOMERS----------')

        })
    }, [customerForm])
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
        })
    }, [])
    // ADD CUSTOMER
    function addCustomer() {
        axios.post("http://localhost:3002/company/customer", { id: company.id, ...customerData }, {
            headers: {
                authorization: `Bearer ${user.token}`
            },
        }).then(res => {
            console.log(res)
            customerFormOpen()

        })
    }
    // ADD PROJECT
    function addProject() {
        axios.post("http://localhost:3002/project/", newProjectData, {
            headers: {
                authorization: `Bearer ${user.token}`
            },
        }).then(res => {
            console.log(res)
            addProjectFomrOpen()
        })
    }
    return (
        <section className="flex bg-offWhite pr-4">
            <Navbar />
            <section className="flex-grow max-h-screen overflow-auto">
                <header className="flex flex-col md:flex-row space-y-3 items-start md:justify-between w-full my-6">
                    <h2 className="text-4xl font-bold">Projects</h2>

                    {/* SEARCH AND ADD BUTTON */}
                    <div className="flex items-center h-[30px] space-x-2">
                        {/* SEARCH BAR */}
                        <button
                            className="bg-tangerine text-white w-[200px] h-full py-1 rounded-md cursor-pointer"
                            onClick={customerFormOpen}>
                            ADD CUSTOMER
                        </button>
                        {/* BUTTON */}
                        <button
                            className="bg-tangerine text-white w-[200px] h-full py-1 rounded-md cursor-pointer"
                            onClick={addProjectFomrOpen}>
                            ADD PROJECT
                        </button>
                    </div>
                </header>
                {/* CONTENT CONTAINER */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-5">
                    {
                        Object.keys(projects).length === 0 ? <></>
                            :
                            projects.map(project => {
                                return (
                                    <div className="p-4 bg-white shadow-lg rounded-2xl" onClick={() => { setProject(project); projectDetailsOpen() }}>
                                        <ProjectCard project={project} />
                                    </div>

                                )

                            })
                    }

                </div>
            </section >
            {/* ADD CUSTOMER FORM */}
            {
                customerForm ?
                    <div className={`${customerForm ? "z-20 w-screen h-screen flex justify-center items-center fixed bg-opacity-50 bg-black inset-0" : "hidden pointer-events-none"}`}>
                        <div className="bg-offWhite flex flex-col py-6 px-6 w-1/4">
                            <div className="flex p-2">
                                <span className="text-2xl cursor-pointer" onClick={customerFormOpen}>&#10005;</span>
                                <div className="w-full">
                                    <h2 className="flex justify-center text-2xl">Employee information</h2>
                                </div>
                            </div>
                            <CustomerForm setCustomerData={setCustomerData} />
                            <button className="bg-tangerine text-white my-4 p-2 rounded-full w-full"
                                onClick={() => { console.log(customerData); addCustomer() }}
                            >Add</button>
                        </div>
                    </div>
                    :
                    <></>
            }
            {/* ADD PROJECT */}
            {
                projectForm ?
                    <div className={`${projectForm ? "z-20 w-screen h-screen flex justify-center items-center fixed bg-opacity-50 bg-black inset-0" : "hidden pointer-events-none"}`}>
                        <div className="bg-offWhite flex flex-col py-10 px-6">
                            <div className="flex p-2">
                                <span className="text-2xl cursor-pointer" onClick={() => { addProjectFomrOpen(); setNewProjectData({}) }}>&#10005;</span>
                                <div className="w-full">
                                    <h2 className="flex justify-center text-2xl">New Project information</h2>
                                </div>
                            </div>
                            <NewProjectForm setNewProjectData={setNewProjectData} customers={customers} employees={employees} />
                            <button className="bg-tangerine text-white my-4 p-2 rounded-full w-full"
                                onClick={() => { console.log(newProjectData, customers, employees); addProject() }}
                            >Add</button>
                        </div>
                    </div>
                    :
                    <></>
            }


            {/* POPUP FOR PROJECT ACTIVITY */}
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
                            <div className="flex flex-col bg-beau px-6 pb-10 pt-4 xl:w-3/12 w-1/3 justify-between h-full ">
                                <h2 className="text-2xl">Details</h2>
                                {
                                    Object.keys(project).length !== 0 ?
                                        <ProjectDetails project={project} setProject={setProject} employees={employees} />
                                        :
                                        ""
                                }
                                <div className="flex flex-col space-y-2 w-full">
                                    <button
                                        className="bg-venetian text-white w-full h-full py-1 rounded-md cursor-pointer">
                                        DELETE
                                    </button>
                                    <button
                                        className="bg-tangerine text-white w-full h-full py-1 rounded-md cursor-pointer" onClick={() => { projectDetailsOpen(); projectSaleFormOpen() }}>
                                        SELL
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                    :
                    <></>

            }
            {/* POPUP FOR SALE */}
            {
                projectSaleForm ?
                    <div className={`${projectSaleForm ? "z-20 w-screen h-screen flex justify-center items-center fixed bg-opacity-50 bg-black inset-0" : ""}`}>
                        {/* CONTAINER FOR ALL */}
                        <div className="flex xl:w-9/12 xl:h-[90%] h-full w-full justify-between items-start max-h-[900px]">
                            {/* CONTAINER FOR EMAIL FORM */}
                            <div className="flex flex-col flex-grow h-full bg-offWhite px-6 pb-10 pt-4 overflow-auto">
                                {/* HEADER */}
                                <div className="flex items-center mb-16">
                                    <span className="text-2xl cursor-pointer" onClick={() => { projectSaleFormOpen(); projectDetailsOpen() }}>&#10005;</span>
                                    <h2 className="text-2xl flex-grow flex justify-center">{project.project_name}</h2>
                                </div>
                                <div className="flex justify-center h-full w-full">

                                    <SaleInfoForm project={project} />
                                </div>
                            </div>
                            {/* CONTAINER FOR OPTIONS */}
                            <div className="flex flex-col bg-beau px-6 pb-10 pt-4 xl:w-3/12 w-1/3 justify-between h-full ">
                                <h2 className="text-2xl">Details</h2>
                                <SaleInfoDetails />
                                <div className="flex flex-col space-y-2 w-full">
                                    <button
                                        className="bg-tangerine text-white w-full h-full py-1 rounded-md cursor-pointer" onClick={() => { projectSaleFormOpen() }}>
                                        SEND
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
export default Projects
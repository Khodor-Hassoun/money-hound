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
import ActivityPhaseLegend from "../../components/ActivityPhaseLegend"

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
    const [projectSaleDetails, setProjectSaleDetails] = useState({})
    const [updatedProjectData, setupdatedProjectData] = useState({})

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
        setProjectDetailsForm(bool => !bool)
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
    }, [projectForm, projectSaleForm, projectDetailsForm])
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
    function updateProject() {
        axios.put("http://localhost:3002/project/", updatedProjectData, {
            headers: {
                authorization: `Bearer ${user.token}`
            },
        }).then(res => {
            console.log(res)
            setProject(updatedProjectData)
        })
    }
    // 
    // SELL PROJECT
    function sellProject() {
        axios.post("http://localhost:3002/company/revenue", {
            projectId: project.id,
            customer_email: project.customer.customer_email,
            payment: projectSaleDetails.payment,
            payment_date: projectSaleDetails.payment_date
        }, {
            headers: {
                authorization: `Bearer ${user.token}`
            },
        }).then(res => {
            console.log(res)
            projectSaleFormOpen()
            projectDetailsOpen()
        })
    }
    return (
        <section className="flex bg-offWhite pr-4">
            <Navbar />
            <section className="flex-grow max-h-screen overflow-auto p-4">
                <header className="flex flex-col md:flex-row space-y-3 items-start md:justify-between w-full my-12">
                    <h2 className="text-4xl font-bold">Projects</h2>

                    {/* SEARCH AND ADD BUTTON */}
                    <div className="flex items-center h-[30px] space-x-2">
                        {/* SEARCH BAR */}
                        <button
                            className="bg-tangerine text-white font-bold w-[200px] h-full py-1 rounded-md cursor-pointer"
                            onClick={customerFormOpen}>
                            ADD CUSTOMER
                        </button>
                        {/* BUTTON */}
                        <button
                            className="bg-tangerine text-white w-[200px] font-bold h-full py-1 rounded-md cursor-pointer"
                            onClick={addProjectFomrOpen}>
                            ADD PROJECT
                        </button>
                    </div>
                </header>
                {/* CONTENT CONTAINER */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8 gap-4 lg:gap-3">
                    {
                        Object.keys(projects).length === 0 ? <></>
                            :
                            projects.map(project => {
                                return (
                                    project.end_date === null ?
                                        <div className="p-8 bg-white shadow-lg rounded-2xl" onClick={() => { setProject(project); setupdatedProjectData(project); projectDetailsOpen() }}>
                                            <ProjectCard project={project} />
                                        </div>
                                        :
                                        <></>

                                )

                            })
                    }

                </div>
            </section >
            {/* ADD CUSTOMER FORM */}
            {
                customerForm ?
                    <div className={`${customerForm ? "z-20 w-screen h-screen flex justify-center items-center fixed bg-opacity-50 bg-black inset-0" : "hidden pointer-events-none"}`}>
                        <div className="bg-offWhite flex flex-col pb-10 pt-6 px-6 rounded-md w-[400px]">
                            <div className="flex p-2 mb-2">
                                <span className="text-2xl cursor-pointer font-semibold" onClick={customerFormOpen}>&#10005;</span>
                                <div className="w-full">
                                    <h2 className="flex justify-center text-2xl font-semibold">Customer information</h2>
                                </div>
                            </div>
                            <CustomerForm setCustomerData={setCustomerData} />
                            <button className="bg-tangerine text-white my-4 p-2 rounded-full w-full font-bold"
                                onClick={() => { console.log(customerData); addCustomer() }}
                            >ADD</button>
                        </div>
                    </div>
                    :
                    <></>
            }
            {/* ADD PROJECT */}
            {
                projectForm ?
                    <div className={`${projectForm ? "z-20 w-screen h-screen flex justify-center items-center fixed bg-opacity-50 bg-black inset-0" : "hidden pointer-events-none"}`}>
                        <div className="bg-offWhite flex flex-col pb-10 pt-6 px-6 rounded-md">
                            <div className="flex p-2 mb-2">
                                <span className="text-2xl cursor-pointer font-semibold" onClick={() => { addProjectFomrOpen(); setNewProjectData({}) }}>&#10005;</span>
                                <div className="w-full">
                                    <h2 className="flex justify-center text-2xl font-semibold">Project Information</h2>
                                </div>
                            </div>
                            <NewProjectForm setNewProjectData={setNewProjectData} customers={customers} employees={employees} newProjectData={newProjectData} />
                            <button className="bg-tangerine text-white my-4 p-2 rounded-full w-full font-bold"
                                onClick={() => { addProject() }}
                            >ADD</button>
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
                        <div className="flex xl:w-9/12 xl:h-[90%] h-full w-full justify-between items-start max-h-[900px] ">
                            {/* CONTAINER FOR ACTIVITIES */}
                            <div className="flex flex-col flex-grow h-full bg-offWhite px-6 pb-10 pt-4 overflow-auto rounded-l-md">
                                {/* HEADER */}
                                <div className="flex items-center mb-8">
                                    <span className="text-2xl cursor-pointer font-semibold" onClick={projectDetailsOpen}>&#10005;</span>
                                    <h2 className="text-2xl flex-grow flex justify-center font-semibold">{project.project_name}</h2>
                                </div>
                                <div className="w-full bg-offWhite h-[30px] flex justify-end space-x-4 mb-8">
                                    {
                                        project.Activity.length !== 0 ?
                                            <ActivityPhaseLegend />
                                            :
                                            <></>

                                    }
                                </div>

                                <div className=" space-y-5">
                                    {
                                        project.Activity.length === 0 ?
                                            <div className="">
                                                <h1 className=" text-xl font-semibold">No Activities Yet</h1>
                                            </div>
                                            :
                                            <></>
                                    }
                                    {/* ACTIVITY CARDS */}
                                    {
                                        project.hasOwnProperty('Activity') ?
                                            project.Activity.map((activity, index) => {
                                                return <ProjectActivityDetails activity={activity} index={index} top={0} bottom={project.Activity.length} />
                                            }) : ""
                                    }

                                </div>
                            </div>
                            {/* CONTAINER FOR PROJECT */}
                            <div className="flex flex-col bg-ming px-6 pb-10 pt-4 xl:w-3/12 w-1/3 justify-between h-full rounded-r-md" onClick={() => { console.log(updatedProjectData) }}>
                                <h2 className="text-2xl font-semibold text-white">Details</h2>
                                {
                                    Object.keys(project).length !== 0 ?
                                        <ProjectDetails project={project} setProject={setProject} employees={employees} setupdatedProjectData={setupdatedProjectData} updatedProjectData={updatedProjectData} />
                                        :
                                        ""
                                }
                                <div className="flex flex-col space-y-2 w-full">
                                    <button
                                        className=" bg-none border-2 text-tangerine border-tangerine font-bold w-full h-full py-1 rounded-md cursor-pointer"
                                        onClick={updateProject}>
                                        UPDATE
                                    </button>
                                    <button
                                        className="bg-tangerine text-white w-full h-full py-1 font-bold rounded-md cursor-pointer" onClick={() => { projectSaleFormOpen(); }}>
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
                            <div className="flex flex-col flex-grow h-full bg-offWhite px-6 pb-10 pt-4 overflow-auto rounded-l-md">
                                {/* HEADER */}
                                <div className="flex items-center mb-8">
                                    <span className="text-2xl cursor-pointer font-semibold" onClick={() => { projectSaleFormOpen(); projectDetailsOpen() }}>&#10005;</span>
                                    <h2 className="text-2xl flex-grow flex justify-center font-semibold">{project.project_name}</h2>
                                </div>
                                <div className="mb-8">
                                    <h2 className="text-xl font-semibold">Invoice Preview:</h2>
                                </div>
                                <div className="flex justify-center h-full w-full">

                                    <SaleInfoForm project={project} projectSaleDetails={projectSaleDetails} />
                                </div>
                            </div>
                            {/* CONTAINER FOR OPTIONS */}
                            <div className="flex flex-col bg-ming px-6 pb-10 pt-4 xl:w-3/12 w-1/3 justify-between h-full rounded-r-md">
                                <h2 className="text-2xl font-semibold text-white">Details</h2>
                                <SaleInfoDetails setProjectSaleDetails={setProjectSaleDetails} />
                                <div className="flex flex-col space-y-2 w-full">
                                    <button
                                        className="bg-tangerine text-white w-full h-full py-1 rounded-md cursor-pointer font-bold" onClick={() => { sellProject() }}>
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
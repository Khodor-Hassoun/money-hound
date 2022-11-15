import { useState } from "react"
import Navbar from "../../components/Navbar"
import CustomerForm from "../../components/CustomerForm"
import NewProjectForm from "../../components/NewProjectForm"

function Projects() {
    const [customerForm, setCustomerForm] = useState(false)
    const [projectForm, setProjectForm] = useState(true)
    const [customerData, setCustomerData] = useState({})
    const [newProjectData, setNewProjectData] = useState({})
    const [projects, setProjects] = useState([])

    function customerFormOpen() {
        setCustomerForm(bool => !bool)
    }
    function addProjectFomrOpen() {
        setProjectForm(bool => !bool)
    }
    return (
        <section className="flex bg-offWhite pr-4">
            <Navbar />
            <section className="flex-grow max-h-screen overflow-auto">
                <header className="flex items-center justify-between w-full my-6">
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
                <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
                    {/* CARD */}
                    <div className="p-4 bg-white shadow-lg rounded-2xl">
                        {/* CARD TITLE AND MANAGER */}
                        <div className="flex flex-col mb-3">
                            <h2 className="text-xl font-bold">Project Name</h2>
                            <span>Project manager: John Smith</span>
                        </div>
                        {/* MONEY BAR, BUDGET, SPENT */}
                        <div className="my-4">
                            {/* MONEY BAR */}
                            <div className="w-full bg-tea h-[40px]">
                                <div className="w-[70%] bg-mint h-full">
                                </div>
                            </div>
                            {/* BUDGET */}
                            <div className="flex justify-between w-full">
                                <p>Budget: 1000$</p>
                                <p>Money Spent: 7000$</p>
                            </div>
                        </div>
                        <div className="py-2 space-y-2">
                            <p className="font-bold">Recent activity:</p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Activity</li>
                                <li>Activity</li>
                                <li>Activity</li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-4 bg-white shadow-lg rounded-2xl">
                        {/* CARD TITLE AND MANAGER */}
                        <div className="flex flex-col mb-3">
                            <h2 className="text-xl font-bold">Project Name</h2>
                            <span>Project manager: John Smith</span>
                        </div>
                        {/* MONEY BAR, BUDGET, SPENT */}
                        <div className="my-4">
                            {/* MONEY BAR */}
                            <div className="w-full bg-tea h-[40px]">
                                <div className="w-[70%] bg-mint h-full">
                                </div>
                            </div>
                            {/* BUDGET */}
                            <div className="flex justify-between w-full">
                                <p>Budget: 1000$</p>
                                <p>Money Spent: 7000$</p>
                            </div>
                        </div>
                        <div className="py-2 space-y-2">
                            <p className="font-bold">Recent activity:</p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Activity</li>
                                <li>Activity</li>
                                <li>Activity</li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-4 bg-white shadow-lg rounded-2xl">
                        {/* CARD TITLE AND MANAGER */}
                        <div className="flex flex-col mb-3">
                            <h2 className="text-xl font-bold">Project Name</h2>
                            <span>Project manager: John Smith</span>
                        </div>
                        {/* MONEY BAR, BUDGET, SPENT */}
                        <div className="my-4">
                            {/* MONEY BAR */}
                            <div className="w-full bg-tea h-[40px]">
                                <div className="w-[70%] bg-mint h-full">
                                </div>
                            </div>
                            {/* BUDGET */}
                            <div className="flex justify-between w-full">
                                <p>Budget: 1000$</p>
                                <p>Money Spent: 7000$</p>
                            </div>
                        </div>
                        <div className="py-2 space-y-2">
                            <p className="font-bold">Recent activity:</p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Activity</li>
                                <li>Activity</li>
                                <li>Activity</li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-4 bg-white shadow-lg rounded-2xl">
                        {/* CARD TITLE AND MANAGER */}
                        <div className="flex flex-col mb-3">
                            <h2 className="text-xl font-bold">Project Name</h2>
                            <span>Project manager: John Smith</span>
                        </div>
                        {/* MONEY BAR, BUDGET, SPENT */}
                        <div className="my-4">
                            {/* MONEY BAR */}
                            <div className="w-full bg-tea h-[40px]">
                                <div className="w-[70%] bg-mint h-full">
                                </div>
                            </div>
                            {/* BUDGET */}
                            <div className="flex justify-between w-full">
                                <p>Budget: 1000$</p>
                                <p>Money Spent: 7000$</p>
                            </div>
                        </div>
                        <div className="py-2 space-y-2">
                            <p className="font-bold">Recent activity:</p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Activity</li>
                                <li>Activity</li>
                                <li>Activity</li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-4 bg-white shadow-lg rounded-2xl">
                        {/* CARD TITLE AND MANAGER */}
                        <div className="flex flex-col mb-3">
                            <h2 className="text-xl font-bold">Project Name</h2>
                            <span>Project manager: John Smith</span>
                        </div>
                        {/* MONEY BAR, BUDGET, SPENT */}
                        <div className="my-4">
                            {/* MONEY BAR */}
                            <div className="w-full bg-tea h-[40px]">
                                <div className="w-[70%] bg-mint h-full">
                                </div>
                            </div>
                            {/* BUDGET */}
                            <div className="flex justify-between w-full">
                                <p>Budget: 1000$</p>
                                <p>Money Spent: 7000$</p>
                            </div>
                        </div>
                        <div className="py-2 space-y-2">
                            <p className="font-bold">Recent activity:</p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Activity</li>
                                <li>Activity</li>
                                <li>Activity</li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-4 bg-white shadow-lg rounded-2xl">
                        {/* CARD TITLE AND MANAGER */}
                        <div className="flex flex-col mb-3">
                            <h2 className="text-xl font-bold">Project Name</h2>
                            <span>Project manager: John Smith</span>
                        </div>
                        {/* MONEY BAR, BUDGET, SPENT */}
                        <div className="my-4">
                            {/* MONEY BAR */}
                            <div className="w-full bg-tea h-[40px]">
                                <div className="w-[70%] bg-mint h-full">
                                </div>
                            </div>
                            {/* BUDGET */}
                            <div className="flex justify-between w-full">
                                <p>Budget: 1000$</p>
                                <p>Money Spent: 7000$</p>
                            </div>
                        </div>
                        <div className="py-2 space-y-2">
                            <p className="font-bold">Recent activity:</p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Activity</li>
                                <li>Activity</li>
                                <li>Activity</li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-4 bg-white shadow-lg rounded-2xl">
                        {/* CARD TITLE AND MANAGER */}
                        <div className="flex flex-col mb-3">
                            <h2 className="text-xl font-bold">Project Name</h2>
                            <span>Project manager: John Smith</span>
                        </div>
                        {/* MONEY BAR, BUDGET, SPENT */}
                        <div className="my-4">
                            {/* MONEY BAR */}
                            <div className="w-full bg-tea h-[40px]">
                                <div className="w-[70%] bg-mint h-full">
                                </div>
                            </div>
                            {/* BUDGET */}
                            <div className="flex justify-between w-full">
                                <p>Budget: 1000$</p>
                                <p>Money Spent: 7000$</p>
                            </div>
                        </div>
                        <div className="py-2 space-y-2">
                            <p className="font-bold">Recent activity:</p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Activity</li>
                                <li>Activity</li>
                                <li>Activity</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
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
                        onClick={() => console.log(customerData)}
                    >Add</button>
                </div>
            </div>
            <div className={`${projectForm ? "z-20 w-screen h-screen flex justify-center items-center fixed bg-opacity-50 bg-black inset-0" : "hidden pointer-events-none"}`}>
                <div className="bg-offWhite flex flex-col py-10 px-6">
                    <div className="flex p-2">
                        <span className="text-2xl cursor-pointer" onClick={addProjectFomrOpen}>&#10005;</span>
                        <div className="w-full">
                            <h2 className="flex justify-center text-2xl">New Project information</h2>
                        </div>
                    </div>
                    <NewProjectForm setNewProjectData={setNewProjectData} />
                    <button className="bg-tangerine text-white my-4 p-2 rounded-full w-full"
                        onClick={() => console.log(newProjectData)}
                    >Add</button>
                </div>
            </div>

        </section>
    )
}
export default Projects
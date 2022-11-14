import Navbar from "../../components/Navbar"

function Projects() {
    return (
        <section className="flex bg-offWhite pr-4">
            <Navbar />
            <section className="flex-grow">
                <header className="flex items-center justify-between w-full my-6">
                    <h2 className="text-4xl font-bold">Projects</h2>

                    {/* SEARCH AND ADD BUTTON */}
                    <div className="flex items-center h-[30px] space-x-2">
                        {/* SEARCH BAR */}
                        <button
                            className="bg-tangerine text-white w-[200px] h-full py-1 rounded-md cursor-pointer">
                            ADD CUSTOMER
                        </button>
                        {/* BUTTON */}
                        <button
                            className="bg-tangerine text-white w-[200px] h-full py-1 rounded-md cursor-pointer">
                            ADD PROJECT
                        </button>
                    </div>
                </header>
                {/* CONTENT CONTAINER */}
                <div className="flex">
                    {/* CARD */}
                    <div className="p-4 bg-white shadow-lg rounded-2xl w-7/12 lg:w-1/3">
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
        </section>
    )
}
export default Projects
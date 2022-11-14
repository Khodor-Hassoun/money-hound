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
            </section>
        </section>
    )
}
export default Projects
import searchIcon from "../../resources/images/icons8-search-24.png"
import Navbar from "../../components/Navbar"
function Employees() {
    return (
        <section className="flex bg-offWhite pr-4">
            <Navbar />
            {/* EMPLOYEE CONTENT */}
            <section className="flex-grow">
                {/* HEADER SECTION TITLE NAME SEARCH BAR BUTTON */}
                <header className="flex items-cente justify-between w-full">
                    <h2 className="text-4xl font-bold">Employees</h2>

                    {/* SEARCH AND ADD BUTTON */}
                    <div className="flex items-center">
                        {/* SEARCH BAR */}
                        <div className="w-[200px] flex rounded-md border-solid border-black border-2  justify-between bg-offWhite px-1 items-center">
                            <input type="text" placeholder="search..." className="rounded-lg w-3/5 bg-offWhite active:border-none" />
                            <label className="h-[25px] w-3">
                                <img src={searchIcon} alt="search icon" className="h-full w-full" />
                            </label>
                        </div>
                        {/* BUTTON */}
                        <button
                            className="bg-tangerine text-white w-[200px] py-1 rounded-md cursor-pointer">
                            ADD
                        </button>
                    </div>
                </header>
            </section>
        </section>
    )

}
export default Employees
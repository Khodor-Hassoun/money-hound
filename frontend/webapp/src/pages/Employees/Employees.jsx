import searchIcon from "../../resources/images/icons8-search-24.png"
import Navbar from "../../components/Navbar"
function Employees() {
    return (
        <section className="flex bg-offWhite pr-4">
            <Navbar />
            {/* EMPLOYEE CONTENT */}
            <section className="flex-grow">
                {/* HEADER SECTION TITLE NAME SEARCH BAR BUTTON */}
                <header className="flex items-center justify-between w-full my-6">
                    <h2 className="text-4xl font-bold">Employees</h2>

                    {/* SEARCH AND ADD BUTTON */}
                    <div className="flex items-center h-[30px] space-x-2">
                        {/* SEARCH BAR */}
                        <div className="w-[200px] h-full flex rounded-md border-solid border-black border-2  justify-between bg-offWhite px-1 items-center">
                            <input type="text" placeholder="search..." className="rounded-lg w-3/5 bg-offWhite flex-grow ring-transparent border-opacity-0 border-white" />
                            <label className="h-[25px] w-3">
                                <img src={searchIcon} alt="search icon" className="h-full w-full" />
                            </label>
                        </div>
                        {/* BUTTON */}
                        <button
                            className="bg-tangerine text-white w-[200px] h-full py-1 rounded-md cursor-pointer">
                            ADD
                        </button>
                    </div>
                </header>

                {/* TABLE HERE */}
                <table className="table-auto w-full border border-black">
                    <thead className="bg-ming text-white [&>*]:border [&>*]:border-black">
                        <tr className="[&>*]:border [&>*]:border-black">
                            <th className="justify-items-start">Name</th>
                            <th>Email</th>
                            <th>Job position</th>
                            <th>Payroll</th>
                        </tr>
                    </thead>
                    <tbody className=" [&>*]:border [&>*]:border-black">
                        <tr className="border border-black [&>*]:border [&>*]:border-black">
                            <th className="border border-black">Khodor</th>
                            <th className="border border-black">Khodorhassoun@outlook.com</th>
                            <th>Project Manager</th>
                            <th>3000</th>
                        </tr>
                        <tr className="bg-beau [&>*]:border [&>*]:border-black">
                            <th>Khodor</th>
                            <th>Khodorhassoun@outlook.com</th>
                            <th>Project Manager</th>
                            <th>3000</th>
                        </tr>
                        <tr className="[&>*]:border [&>*]:border-black">
                            <th>Khodor</th>
                            <th>Khodorhassoun@outlook.com</th>
                            <th>Project Manager</th>
                            <th>3000</th>
                        </tr>
                        <tr className="[&>*]:border [&>*]:border-black bg-beau">
                            <th>Khodor</th>
                            <th>Khodorhassoun@outlook.com</th>
                            <th>Project Manager</th>
                            <th>3000</th>
                        </tr>
                        <tr className="[&>*]:border [&>*]:border-black">
                            <th>Khodorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr</th>
                            <th>Khodorhassoun@outlook.com</th>
                            <th>Project Manager</th>
                            <th>3000</th>
                        </tr>
                    </tbody>

                </table>
            </section>
        </section>
    )

}
export default Employees
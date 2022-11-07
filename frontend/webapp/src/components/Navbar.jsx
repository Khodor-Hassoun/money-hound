import logo from "../resources/images/seanpollockPhYq704ffdAunsplash.jpg"
import dots from "../resources/images/icons8-more-24.png"
function Navbar() {
    const isActive = false
    return (
        <nav className="h-screen w-[350px] bg-ming text-white flex flex-col">
            {/* COMPANY LOGO, NAME AND COMPANY SETTINGS */}
            <div className="flex items-center w-full pt-6 justify-between px-4">
                {/* COMPANY LOGO AND NAME */}
                <div className="flex items-center w-2/3 ">
                    {/* COMPANY LOGO WHITE BACKGROUND */}
                    <div className="h-[60px] w-[60px] bg-white flex justify-center items-center rounded-xl">
                        <div className="h-[50px] w-[50px] rounded-xl">
                            <img src={logo} alt="logo" className="h-full w-full rounded-xl" />
                        </div>
                    </div>
                    {/* COMPANY NAME */}
                    <h2 className="text-xl ml-3">Company name</h2>
                </div>
                {/* COMPANY SETTINGS FOR OWNER */}
                <div className="">
                    <img src={dots} alt="options" />
                </div>
            </div>

            {/* OPTIONS LINKS */}
            <div className="space-y-6 ">
                {/* LINK 1 */}
                <div className="flex h-[50px] items-center bg-ming brightness-110">
                    {/* Lightbar */}
                    <div className="h-full bg-tangerine w-[12px]" />
                    <p className="text-tangerine w-full ml-8">Dashboard</p>
                </div>
                {/* LINK 2 */}
                <div className="flex h-[50px] items-center bg-ming brightness-100 hover:brightness-110 cursor-pointer first:active:bg-tangerine last:focus:text-tangerine">
                    <div className="h-full bg-white w-[12px] active:bg-tangerine" />
                    <p className=" w-full ml-8">Employees</p>
                </div>
                {/* LINK 3 */}
                <div className="flex h-[50px] items-center bg-ming brightness-100 hover:brightness-110 cursor-pointer first:active:bg-tangerine last:focus:text-tangerine">
                    <div className="h-full bg-white w-[12px] active:bg-tangerine" />
                    <p className=" w-full ml-8">Projects</p>
                </div>
                {/* LINK 4 */}
                <div className="flex h-[50px] items-center bg-ming brightness-100 hover:brightness-110 cursor-pointer first:active:bg-tangerine last:focus:text-tangerine">
                    <div className="h-full bg-white w-[12px] active:bg-tangerine " />
                    <p className=" w-full ml-8">Insights</p>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
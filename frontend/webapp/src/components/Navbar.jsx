import logo from "../resources/images/seanpollockPhYq704ffdAunsplash.jpg"
import dots from "../resources/images/icons8-more-24.png"
function Navbar() {
    return (
        <nav className="h-screen w-[400px] bg-ming text-white">
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
            <div>
                {/* LINK 1 */}
                <div className="flex h-[70px] items-center bg-ming brightness-110">
                    {/* Lightbar */}
                    <div className="h-full bg-tangerine w-[12px]" />
                    <p className="text-tangerine w-full ml-8">Dashboard</p>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
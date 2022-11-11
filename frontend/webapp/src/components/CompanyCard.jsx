import logo from "../resources/images/Your-Logo-here.png"

function CompanyCard() {
    return (
        <>
            <section className="bg-ming flex items-center justify-center h-screen">
                <div className="bg-offWhite rounded-xl flex w-1/4 items-center space-x-5 p-2 shadow-xl hover:p-3 hover:shadow-2xl">
                    <div>
                        <div className="h-[60px] w-[60px] bg-white flex justify-center items-center rounded-xl">
                            <div className="h-[50px] w-[50px] rounded-xl">
                                <label htmlFor="hidden-input">
                                    <img src={logo} alt="logo" className="h-full w-full rounded-xl" />
                                    {/* <img src={logo} alt="logo" className="h-full w-full rounded-xl" /> */}
                                </label>
                                <input type="file" className="invisible" id="hidden-input" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col space-x-5">
                        <h2 className="text-2xl">Company Name</h2>


                    </div>

                </div>
            </section>
        </>
    )
}
export default CompanyCard
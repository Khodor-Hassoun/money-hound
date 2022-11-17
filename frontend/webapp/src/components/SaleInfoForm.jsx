import { useSelector } from "react-redux"
import logo from "../resources/images/Your-Logo-here.png"
function SaleInfoForm({ project }) {
    const company = useSelector(state => state.company)
    let date = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
    return (
        <div className="w-2/3 h-[100%] bg-white overflow-auto">
            {/* CONTENT CONTAINER */}
            <div className="px-4 py-6 space-y-10">
                {/* COMPANY DETAILS */}
                <div className="flex justify-between">
                    {/* COMPANY DETAILS */}
                    <div className="flex flex-col">
                        <h2 className="">{company.name}</h2>
                        <p>{company.email}</p>
                        <p>Address: {company.address}</p>
                        <p>Phone: {company.phone}</p>
                    </div>
                    {/* COMPANY LOGO */}
                    <div
                        className="h-[50px] w-[50px] bg-white flex justify-center items-center rounded-xl mr-10">
                        <div
                            className="h-[45px] w-[45px] rounded-xl">
                            <img
                                src={logo}
                                alt="logo"
                                className="h-full w-full rounded-xl"
                            />
                        </div>
                    </div>

                </div>
                {/* CUSTOMER DETAILS */}
                <div>
                    <p>{project.customer.customer_name}</p>
                    <p>Date issued at: {date}</p>
                    <p>Payment for: {date}</p>

                </div>
                {/* PRODUCT DETAILS */}
                <table className="table-auto w-full border border-black [&>odd]:bg-beau">
                    <thead className="bg-ming text-white [&>*]:border [&>*]:border-black">
                        <tr className="[&>*]:border [&>*]:border-black">
                            <th className="self-start">Name</th>
                            <th>Description</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody className=" [&>*]:border [&>*]:border-black [&>odd]:bg-beau odd:bg-beau">
                        <tr className={`[&>*]:border [&>*]:border-black [&>*]:p-1`}>
                            <td>{project.project_name}</td>
                            <td>Des</td>
                            <td>Price</td>
                        </tr>
                    </tbody>
                </table>
                {/* PRICING */}
                <div className="flex flex-col">
                    <p>Price</p>
                    <p>VAT: 12%</p>
                    <p>Net Price:</p>
                </div>
            </div>
        </div>
    )
}
export default SaleInfoForm
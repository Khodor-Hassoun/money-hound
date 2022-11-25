import { useSelector } from "react-redux"

function SaleInfoForm({ project, projectSaleDetails }) {

    const company = useSelector(state => state.company)
    const publicImagesFolder = process.env.REACT_APP_PUBLIC_IMAGES
    let date = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
    let dueDate
    if (projectSaleDetails.payment_date) {
        dueDate = new Date(projectSaleDetails.payment_date).toJSON().slice(0, 10).replace(/-/g, '/')
    } else {
        dueDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/')
    }

    return (
        <div className="w-11/12 h-[100%] bg-white overflow-auto shadow-md">
            {/* CONTENT CONTAINER */}
            <div className="px-6 py-10 space-y-10">
                {/* COMPANY DETAILS */}
                <div className="flex justify-between">
                    {/* COMPANY DETAILS */}
                    <div className="flex flex-col space-y-1 text-black">
                        <h2 className="text-xl font-semibold">{company.name}</h2>
                        <p>{company.email}</p>
                        <p>Address: {company.address}</p>
                        <p>Phone: {company.phone}</p>
                    </div>
                    {/* COMPANY LOGO */}
                    <div
                        className="h-[100px] w-[100px] bg-white flex justify-center items-center rounded-full mr-36">
                        <div
                            className="h-[100px] w-[100px] rounded-full">
                            <img
                                src={publicImagesFolder + company.logo}
                                alt="logo"
                                className="h-full w-full rounded-full"
                            />
                        </div>
                    </div>

                </div>
                {/* CUSTOMER DETAILS */}
                <div className="space-y-1">
                    <p className="font-semibold text-xl">{project.customer.customer_name}</p>
                    <p>Date issued at: {date}</p>
                    <p>Payment for: {dueDate}</p>

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
                            <td>{projectSaleDetails.description}</td>
                            <td>{projectSaleDetails.price}</td>
                        </tr>
                    </tbody>
                </table>
                {/* PRICING */}
                <div className="flex flex-col">
                    <p>{`Price: ${projectSaleDetails.price}`}</p>
                    <p>{`VAT: ${projectSaleDetails.vat}`}</p>
                    <p>{`Net Price: ${projectSaleDetails.payment}`}</p>
                </div>
            </div>
        </div>
    )
}
export default SaleInfoForm
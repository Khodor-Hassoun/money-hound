import { useRef } from "react"

function CustomerForm({ setCustomerData }) {
    const customerEmailRef = useRef()
    const customerNameRef = useRef()
    function dataChange() {
        setCustomerData({
            customer_email: customerEmailRef.current.value,
            customer_name: customerNameRef.current.value
        })
    }
    return (
        <div className="flex flex-col">
            <div className="flex flex-col py-2 w-full">
                <label htmlFor="email" className="font-semibold">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    className="border-black border-solid border rounded py-2 px-1"
                    ref={customerEmailRef}
                    onChange={dataChange}
                ></input>
            </div>
            {/* PASSWORD LABEL AND INPUT */}
            <div className="flex flex-col py-2 w-full">
                <label htmlFor="password" className="font-semibold">Customer name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="border-black border-solid border rounded py-2 px-1"
                    ref={customerNameRef}
                    onChange={dataChange}
                ></input>
            </div>
        </div>
    )
}
export default CustomerForm
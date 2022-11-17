import { useEffect, useRef, useState } from "react"

function SaleInfoDetails({ setProjectSaleDetails }) {
    const [pretax, setPretax] = useState(0)
    const [vat, setVat] = useState(0)
    const [payment, setPayment] = useState(0)
    const [date, setDate] = useState(new Date())
    const [description, setDescription] = useState('')
    const vatRef = useRef()
    const priceRef = useRef()

    function paymentChange() {
        setPayment(((parseInt(vatRef.current.value) / 100) * parseInt(priceRef.current.value)) + parseInt(priceRef.current.value))
    }
    useEffect(() => {
        setProjectSaleDetails({
            payment: payment,
            payment_date: date,
            description: description,
            price: priceRef.current.value,
            vat: vatRef.current.value
        })
    }, [payment, description, date])
    return (
        <div className="flex flex-col">
            <div className="flex flex-col py-2">
                <label htmlFor="date">Due Date</label>
                <input type="date" id="date" name="payment_date" onChange={e => setDate(e.target.value)} className="border-black border-solid border rounded py-1 px-1"></input>
            </div>
            <div className="flex flex-col py-2">
                <label htmlFor="pretax">Price</label>
                <input type="number" id="pretax" name="pretax" ref={priceRef} onChange={paymentChange} className="border-black border-solid border rounded py-1 px-1"></input>
            </div>
            <div className="flex flex-col py-2">
                <label htmlFor="tax">VAT (%) </label>
                <input type="number" id="date" name="tax" ref={vatRef} onChange={() => { paymentChange(); console.log(payment) }} className="border-black border-solid border rounded py-1 px-1"></input>
            </div>
            <div className="flex flex-col py-2">
                <label htmlFor="payment">Net Price:</label>
                <input type="number" id="payment" name="payment" value={payment} className="border-black border-solid border rounded py-1 px-1"></input>
            </div>
            <div className="flex flex-col py-2">
                <label htmlFor="tax">Description</label>
                <input type="text" id="description" name="description" onChange={e => setDescription(e.target.value)} className="border-black border-solid border rounded py-1 px-1"></input>
            </div>
        </div>

    )
}
export default SaleInfoDetails
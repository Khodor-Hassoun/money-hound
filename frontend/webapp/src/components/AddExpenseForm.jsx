function AddExpenseForm({ setExpense, expense }) {

    function dataChange(e) {
        setExpense({ ...expense, [e.target.name]: e.target.value })
    }
    return (
        <div className="flex flex-col">
            <div className="flex flex-col p-2 w-full">
                <label htmlFor="email">Bill name</label>
                <input
                    type="text"
                    id="bill_name"
                    name="bill_name"
                    className="border-black border-solid border rounded py-2 px-1"
                    onChange={dataChange}
                ></input>
            </div>
            {/* PASSWORD LABEL AND INPUT */}
            <div className="flex flex-col p-2 w-full">
                <label htmlFor="price">Price</label>
                <input
                    type="text"
                    id="price"
                    name="price"
                    className="border-black border-solid border rounded py-2 px-1"
                    onChange={dataChange}
                ></input>
            </div>
        </div>
    )
}
export default AddExpenseForm
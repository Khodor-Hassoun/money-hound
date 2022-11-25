function AddActivityForm({ setActivityDetails, activityDetails }) {

    function dataChange(e) {
        setActivityDetails({ ...activityDetails, [e.target.name]: e.target.value })
    }

    return (
        <div className="flex flex-col">
            <div className="flex flex-col py-2">
                <label htmlFor="objective" className="font-semibold">Objective</label>
                <input type="text" id="companyemail" name="objective" onChange={dataChange} className="border-black border-solid border rounded py-2 px-1" ></input>
            </div>
            <div className="flex py-2 w-full justify-between">
                <div className="flex flex-col mr-0.5 w-[48%]">
                    <label htmlFor="address" className="font-semibold">Expected pay</label>
                    <input type="number" id="address" name="money" onChange={dataChange} className="border-black border-solid border rounded py-2 px-1" ></input>
                </div>
                <div className="flex flex-col w-[48%]">
                    <label htmlFor="phone" className="font-semibold">Expected end date</label>
                    <input type="date" id="phone" name="end_date" onChange={dataChange} className="border-black border-solid border rounded py-2 px-1" ></input>
                </div>
            </div>
        </div>

    )
}
export default AddActivityForm
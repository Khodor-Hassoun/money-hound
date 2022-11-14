function CustomerForm() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col p-2 w-full">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    placeholder="Email"
                    id="email"
                    name="email"
                    className="border-black border-solid border rounded py-2 px-1"
                ></input>
            </div>
            {/* PASSWORD LABEL AND INPUT */}
            <div className="flex flex-col p-2 w-full">
                <label htmlFor="password">Customer name</label>
                <input
                    type="text"
                    placeholder="name"
                    id="name"
                    name="name"
                    className="border-black border-solid border rounded py-2 px-1"
                ></input>
            </div>
        </div>
    )
}
export default CustomerForm
function ProjectDetails() {
    return (
        <div className="flex flex-col">
            {/* PROJECT MANAGER */}
            <div className="flex flex-col p-2">
                <label htmlFor="manager">Project Manger</label>
                <input type="text" id="manager" placeholder="john@outlook.com" name="email" className="border-black border-solid border rounded py-2 px-1"></input>
            </div>
            <div className="flex flex-col p-2">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="john@outlook.com" name="email" className="border-black border-solid border rounded py-2 px-1"></input>
            </div>
            <div className="flex flex-col p-2">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="john@outlook.com" name="email" className="border-black border-solid border rounded py-2 px-1"></input>
            </div>
            <div className="flex flex-col p-2">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="john@outlook.com" name="email" className="border-black border-solid border rounded py-2 px-1"></input>
            </div>

        </div>
    )
}
export default ProjectDetails
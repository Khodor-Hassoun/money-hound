function ProjectDetails({ project, setProject }) {
    return (
        <div className="flex flex-col">
            {/* PROJECT MANAGER */}
            <div className="flex flex-col py-2">
                <label htmlFor="manager">Project Manger</label>
                <input type="text" id="manager" placeholder="john@outlook.com" name="email" value={project.manager.user.firstname} className="border-black border-solid border rounded py-2 px-1"></input>
            </div>
            <div className="flex flex-col py-2">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="john@outlook.com" name="email" value={project.start_date} className="border-black border-solid border rounded py-2 px-1"></input>
            </div>
            <div className="flex flex-col py-2">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="john@outlook.com" name="email" value={project.deadline} className="border-black border-solid border rounded py-2 px-1"></input>
            </div>
            <div className="flex flex-col pt-2">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="john@outlook.com" name="email" value={project.budget} className="border-black border-solid border rounded py-2 px-1"></input>
            </div>
            <div className="pt-4">
                <div className="w-full bg-tea h-[40px]">
                    <div className="w-[70%] bg-mint h-full">
                    </div>
                </div>
                <div className="flex flex-col">
                    <p>Budget: 10000</p>
                    <p>Spent: 7000</p>

                </div>
            </div>

        </div>
    )
}
export default ProjectDetails
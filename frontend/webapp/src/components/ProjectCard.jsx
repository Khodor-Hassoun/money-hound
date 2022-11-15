function ProjectCard() {
    return (
        <>
            {/* CARD TITLE AND MANAGER */}
            <div className="flex flex-col mb-3">
                <h2 className="text-xl font-bold">Project Name</h2>
                <span>Project manager: CAAAAAAAAAAAAAAAAARRRRRRRD</span>
            </div>
            {/* MONEY BAR, BUDGET, SPENT */}
            <div className="my-4">
                {/* MONEY BAR */}
                <div className="w-full bg-tea h-[40px]">
                    <div className="w-[70%] bg-mint h-full">
                    </div>
                </div>
                {/* BUDGET */}
                <div className="flex justify-between w-full">
                    <p>Budget: 1000$</p>
                    <p>Money Spent: 7000$</p>
                </div>
            </div>
            <div className="py-2 space-y-2">
                <p className="font-bold">Recent activity:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li>Activity</li>
                    <li>Activity</li>
                    <li>Activity</li>
                </ul>
            </div>
        </>
    )
}
export default ProjectCard
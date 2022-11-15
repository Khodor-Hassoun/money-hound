function ProjectCard({ project }) {
    let moneyPercentage = Math.floor((project.money_spent / project.budget) * 100)
    moneyPercentage = 'w-[' + moneyPercentage.toString() + '%]'
    const percent = ('w-[' + Math.floor((project.money_spent / project.budget) * 100) + '%]').toString()
    const activities = project.Activity

    return (
        <>
            {/* CARD TITLE AND MANAGER */}
            <div className="flex flex-col mb-3">
                <h2 className="text-xl font-bold">{project.project_name}</h2>
                <span>{`Project Manager: ${project.manager.user.firstname} ${project.manager.user.lastname}`}</span>
            </div>
            {/* MONEY BAR, BUDGET, SPENT */}
            <div className="my-4">
                {/* MONEY BAR */}
                <div className="w-full bg-tea h-[40px]">
                    <div className={`bg-mint h-full ${percent}`}>
                    </div>
                </div>
                {/* BUDGET */}
                <div className="flex justify-between w-full">
                    <p>{`Money spent: ${project.money_spent}`}</p>
                    <p>{`Budget: ${project.budget}`}</p>
                </div>
            </div>
            <div className="py-2 space-y-2">
                <p className="font-bold">Recent activity:</p>
                {
                    project.Activity.length === 0 ? <p>No Activities yet</p>
                        :
                        <ul className="list-disc list-inside space-y-1">
                            {
                                project.Activity.slice(0, 3).map((activity, index) => {
                                    let startDay = new Date(activity.start_date)
                                    return <li>{`${activity.objective}, ${startDay.getDate()}/${startDay.getMonth() + 1}`}</li>
                                })
                            }
                        </ul>

                }
            </div>
        </>
    )
}
export default ProjectCard
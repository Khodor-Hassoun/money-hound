function ProjectCard({ project }) {

    const percentstr = (Math.floor((project.money_spent / project.budget) * 100) + '%').toString()
    const percent = Math.floor((project.money_spent / project.budget) * 100)
    const deadline = new Date(project.deadline)
    const startDate = new Date(project.start_date)
    // style={{ height: "calc(100vh - 8rem)" }}

    return (
        <>
            {/* CARD TITLE AND MANAGER */}
            <div className="flex flex-col mb-3 space-y-2">
                <h2 className="text-xl font-bold">{project.project_name}</h2>
                <span>{`Project Manager: ${project.manager.user.firstname} ${project.manager.user.lastname}`}</span>
                <div className="flex justify-between">
                    <span>{`Customer: ${project.customerId}`}</span>
                    <span>{`Deadline: ${deadline.getDate()}/${deadline.getMonth() + 1}/${deadline.getFullYear()}`}</span>
                </div>
                <div className="flex justify-between">
                    <span>{`Phase: ${project.project_phase.type}`}</span>
                    <span>{`Started: ${startDate.getDate()}/${startDate.getMonth() + 1}/${startDate.getFullYear()}`}</span>
                </div>
            </div>
            {/* MONEY BAR, BUDGET, SPENT */}
            <div className="my-4">
                {/* MONEY BAR */}
                <div className="w-full bg-tea h-[30px] rounded">
                    {
                        percent > 100 ?
                            <div className={`bg-venetian h-full w-full rounded`}>
                            </div>
                            :
                            <div className={`bg-mint h-full rounded`} style={{ width: `${percentstr}` }}>
                            </div>
                    }
                    {/* <div className={`bg-mint h-full`} style={{ width: `${percent}` }}>
                    </div> */}
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

function ProjectActivityDetails({ activity, index, bottom, project }) {
    const startDate = new Date(activity.start_date)
    const endDate = new Date(activity.end_date)
    let lightbarColor
    let styles = {}
    if (index === 0) {
        styles = { borderTop: "1px solid black", boxSizing: "border-box" }
    }
    if (index === bottom - 1) {
        styles = { borderBottom: "1px solid black", boxSizing: "border-box" }
    }
    if (activity.project_phase === 1) lightbarColor = { backgroundColor: "#C8DAE4" }
    if (activity.project_phase === 2) lightbarColor = { backgroundColor: "#FFBB21" }
    if (activity.project_phase === 3) lightbarColor = { backgroundColor: "#52B788" }
    return (
        <div className="flex bg-white border-b border-black h-[90px]" style={styles}>
            <div className="w-[20px] h-full" style={lightbarColor}></div>
            <div className="px-4 py-2 flex flex-col justify-around flex-grow ">
                <h2 className="text-xl">{activity.objective}</h2>
                <div className="flex space-x-6">
                    <span>{`Start date: ${startDate.getDate()}/${startDate.getMonth() + 1}/${startDate.getFullYear()}`}</span>
                    <span>{`End date: ${endDate.getDate()}/${endDate.getMonth() + 1}/${endDate.getFullYear()}`}</span>
                    <span>{`Cost: ${activity.money}`}</span>
                </div>
            </div>
        </div>
    )
}
export default ProjectActivityDetails
function ActivityPhaseLegend() {
    return (
        <>
            <div className="flex items-center space-x-1">
                <div className="bg-beau w-[20px] h-[8px] rounded-full" />
                <p className="text-beau">Planning</p>
            </div>
            <div className="flex items-center space-x-1">
                <div className="bg-duneGold w-[20px] h-[8px] rounded-full" />
                <p className="text-duneGold">Execution</p>
            </div>
            <div className="flex items-center space-x-1">
                <div className="bg-mint w-[20px] h-[8px] rounded-full" />
                <p className="text-mint">Finalization</p>
            </div>
        </>
    )
}
export default ActivityPhaseLegend
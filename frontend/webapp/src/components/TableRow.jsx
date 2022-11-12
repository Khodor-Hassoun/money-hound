function TableRow({ background }) {
    return (
        <>
            <tr className={`[&>*]:border [&>*]:border-black [&>*]:p-1 hover:scale-105 hover:bg-cyan-50 ${background}`}>
                <td className="">Kale Black</td>
                <td className="" >Kale@outlook.com</td>
                <td className="">Employee</td>
                <td className="">20000</td>
            </tr>
        </>
    )
}
export default TableRow
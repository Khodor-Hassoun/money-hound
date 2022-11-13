function TableRow({ background, employee }) {
    return (
        <>
            <tr className={`[&>*]:border [&>*]:border-black [&>*]:p-1 hover:scale-105 hover:bg-cyan-50 ${background}`}>
                <td className="">Kale Black</td>
                <td className="" >{employee.user.email}</td>
                <td className="">{employee.job_position}</td>
                <td className="">{employee.wage}</td>
            </tr>
        </>
    )
}
export default TableRow
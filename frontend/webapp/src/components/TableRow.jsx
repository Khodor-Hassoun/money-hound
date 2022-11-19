function TableRow({ employee }) {
    return (
        <>
            <td className="">{`${employee.user.firstname} ${employee.user.lastname}`}</td>
            <td className="" >{employee.user.email}</td>
            <td className="">{employee.job_position}</td>
            <td className="">{employee.wage}</td>

        </>
    )
}
export default TableRow
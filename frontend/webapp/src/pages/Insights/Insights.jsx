import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
    PieChart, Pie, Cell, Scatter, ScatterChart, ZAxis, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer, LabelList, Label
} from "recharts";
import Navbar from "../../components/Navbar";

function Insights() {
    const user = useSelector(state => state.user)
    const [revenues, setRevenues] = useState([])
    const [dailyRev, setDailyRev] = useState([])
    const [expenses, setExpenses] = useState([])
    const [employees, setEmployees] = useState([])
    const [monExpenses, setMonExpenses] = useState([])
    const [typeExpenses, setTypeExpenses] = useState([])
    const [monRevenue, setMonRevenue] = useState([])
    const [customersRevenue, setCustomersRevenue] = useState([])
    const [employeesWage, setEmployeesWage] = useState([])
    const [totalMonthly, setTotalMonthly] = useState([])
    const [revExp, setRevExp] = useState([])
    const [todaysMonth, setTodaysMonth] = useState(() => {
        const today = new Date()
        const month = today.toLocaleString('default', { month: 'long' });
        const year = today.getFullYear()
        return `${month.charAt(0).toUpperCase() + month.slice(1)} ${year}`
    })
    const headers = {
        headers: {
            authorization: `Bearer ${user.token}`
        }
    }
    // GET REVENUES EXPENSES EMPLOYEES
    useEffect(() => {
        axios.get("http://localhost:3002/company/revenues", headers)
            .then(res => {
                // console.log(res.data)
                setRevenues(res.data)
            }).catch(e => {
                console.log(e)
            })
        axios.get("http://localhost:3002/company/expenses", headers).
            then(res => {
                setExpenses(res.data)
                // console.log(res.data)
            }).catch(e => {
                console.log(e)
            })
        axios.get("http://localhost:3002/company/employees", {
            headers: {
                authorization: `Bearer ${user.token}`
            },
        }).then(res => {

            setEmployees(res.data.employees)
            // console.log(res.data.employees)

        })
    }, [])
    // GET EXPENSES
    useEffect(() => {
        axios.get("http://localhost:3002/company/expenses", headers).
            then(res => {
                console.log(res.data)
                setExpenses(res.data)
                const unGroupedArr = res.data.expenses
                // GET DATES AS AS DATE OBJECTS 
                for (let expense of unGroupedArr) {
                    expense.payment_date = new Date(expense.date)
                }
                // TRANSFORM DATE TO MONTH AND YEAR ONLY
                for (let expense of unGroupedArr) {
                    expense.payment_date = `${expense.payment_date.getMonth() + 1}/${expense.payment_date.getFullYear()}`
                }
                const byMonthObj = {}
                const byBillNameObj = {}
                const byMonthArr = []
                const byBillNameArr = []
                for (let expense of unGroupedArr) {
                    let currentDate = new Date()
                    // PUT PRICES IN OBJECT INRESPECT TO MONTH
                    if (`${expense.payment_date}` in byMonthObj) {
                        byMonthObj[expense.payment_date] += parseInt(expense.price)
                    } else {
                        byMonthObj[expense.payment_date] = 0
                        byMonthObj[expense.payment_date] += parseInt(expense.price)
                    }
                    // GET PRICES IN OBJECT IN RESPECT TO BILL NAME BY MONTH
                    if (`${expense.bill_name}` in byBillNameObj) {
                        if (expense.payment_date === `${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`) {
                            byBillNameObj[expense.bill_name] += parseInt(expense.price)

                        }
                    } else {
                        if (expense.payment_date === `${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`) {

                            byBillNameObj[expense.bill_name] = 0
                            byBillNameObj[expense.bill_name] += parseInt(expense.price)
                        }
                    }

                    // GET 
                }
                for (let entry of Object.entries(byMonthObj)) {
                    byMonthArr.push({ payment_date: entry[0], expense: entry[1] })
                }
                for (let entry of Object.entries(byBillNameObj)) {
                    byBillNameArr.push({ bill_name: entry[0], expense: entry[1] })
                }
                console.log(byBillNameArr)
                setMonExpenses(byMonthArr)
                setTypeExpenses(byBillNameArr)
                console.log(...byMonthArr)



                const unsortedRev = res.data.revenues
                // console.log(res.data)
                for (let project of unsortedRev) {
                    project.payment_date = new Date(project.payment_date)
                }
                // unsortedRev.sort((a, b) => a.payment_date - b.payment_date);
                for (let project of unsortedRev) {
                    project.payment_date = `${project.payment_date.getMonth() + 1}/${project.payment_date.getFullYear()}`
                }
                // APPEND PAYMENTS ON THE SAME MONTH
                const byMonthRevArr = []
                const byMonthRevObj = {}
                const byCustomerObj = {}
                const byCustomerArr = []
                for (let project of unsortedRev) {
                    if (`${project.payment_date}` in byMonthRevObj) {
                        byMonthRevObj[project.payment_date] += parseInt(project.payment)
                    } else {
                        byMonthRevObj[project.payment_date] = 0
                        byMonthRevObj[project.payment_date] += parseInt(project.payment)
                    }
                    if (`${project.customer.customer_name}` in byCustomerObj) {
                        byCustomerObj[project.customer.customer_name] += parseInt(project.payment)
                    } else {
                        byCustomerObj[project.customer.customer_name] = 0
                        byCustomerObj[project.customer.customer_name] += parseInt(project.payment)
                    }
                }
                for (let entry of Object.entries(byMonthRevObj)) {
                    byMonthRevArr.push({ payment_date: entry[0], revenue: entry[1] })
                }
                for (let entry of Object.entries(byCustomerObj)) {
                    byCustomerArr.push({ customer: entry[0], revenue: entry[1] })
                }
                console.log(byMonthRevArr)
                setRevenues(byMonthRevArr)

                const unfilteredCombinedArr = [...byMonthRevArr, ...byMonthArr]
                console.log(unfilteredCombinedArr)

                const combinedArr = []
                for (let revenue of byMonthRevArr) {
                    for (let expense of byMonthArr) {
                        if (expense.payment_date === revenue.payment_date) {
                            if (expense.expense && revenue.revenue) {
                                combinedArr.push({ date: expense.payment_date, revenue: revenue.revenue, expense: expense.expense })
                            }
                            if (!expense.expense && revenue.revenue) {
                                combinedArr.push({ date: expense.payment_date, revenue: revenue.revenue })
                            }
                        }
                    }
                }
                // console.log('-----------------------')
                console.log(combinedArr)
                setRevExp(combinedArr)

            }).catch(e => {
                console.log(e)
            })
    }, [])
    // GET REVENUES
    useEffect(() => {
        axios.get("http://localhost:3002/company/revenues", headers)
            .then(res => {
                // console.log('------------PROJECT----------')
                // console.log(res.data)
                // console.log('-----------/PROJECT----------')
                const unsortedRev = res.data
                // console.log(res.data)
                for (let project of unsortedRev) {
                    project.payment_date = new Date(project.payment_date)
                }
                unsortedRev.sort((a, b) => a.payment_date - b.payment_date);
                for (let project of unsortedRev) {
                    project.payment_date = `${project.payment_date.getMonth() + 1}/${project.payment_date.getFullYear()}`
                }
                setDailyRev(unsortedRev)
                console.log()
                // APPEND PAYMENTS ON THE SAME MONTH
                const byMonthArr = []
                const byMonthObj = {}
                const byCustomerObj = {}
                const byCustomerArr = []
                for (let project of unsortedRev) {
                    if (`${project.payment_date}` in byMonthObj) {
                        byMonthObj[project.payment_date] += parseInt(project.payment)
                    } else {
                        byMonthObj[project.payment_date] = 0
                        byMonthObj[project.payment_date] += parseInt(project.payment)
                    }
                    if (`${project.customer.customer_name}` in byCustomerObj) {
                        byCustomerObj[project.customer.customer_name] += parseInt(project.payment)
                    } else {
                        byCustomerObj[project.customer.customer_name] = 0
                        byCustomerObj[project.customer.customer_name] += parseInt(project.payment)
                    }
                }
                for (let entry of Object.entries(byMonthObj)) {
                    byMonthArr.push({ payment_date: entry[0], payment: entry[1] })
                }
                for (let entry of Object.entries(byCustomerObj)) {
                    byCustomerArr.push({ customer: entry[0], payment: entry[1] })
                }
                setRevenues(byMonthArr)
                setCustomersRevenue(byCustomerArr)
            }).catch(e => {
                console.log(e)
            })
    }, [])

    // GET EMPLOYEES TO GET THEIR PAY
    useEffect(() => {
        axios.get("http://localhost:3002/company/employees", {
            headers: {
                authorization: `Bearer ${user.token}`
            },
        }).then(res => {
            const empArr = res.data.employees
            const byJobPositionObj = {}
            const byJobPositionArr = []
            for (let employee of empArr) {
                if (`${employee.job_position}` in byJobPositionObj) {
                    byJobPositionObj[`${employee.job_position}`] += parseInt(employee.wage)
                    byJobPositionObj[`${employee.job_position} count`] += 1
                } else {
                    byJobPositionObj[`${employee.job_position}`] = 0
                    byJobPositionObj[`${employee.job_position} count`] = 0
                    byJobPositionObj[`${employee.job_position}`] += parseInt(employee.wage)
                    byJobPositionObj[`${employee.job_position} count`] += 1
                }
            }
            for (let entry of Object.entries(byJobPositionObj)) {
                for (let secondEntry of Object.entries(byJobPositionObj)) {
                    if (entry[0] === secondEntry[0].substring(0, secondEntry[0].indexOf(' ')) && secondEntry[0].substring(secondEntry[0].indexOf(' ') + 1) === 'count') {
                        byJobPositionArr.push({ job_position: entry[0], average: entry[1] / secondEntry[1] })
                    }
                }
                // console.log(entry)
            }
            setEmployeesWage(byJobPositionArr)
        })
    }, [])


    function logData() {

    }


    return (
        <section className="flex bg-offWhite pr-4">
            <Navbar />
            <section className="flex-grow max-h-screen overflow-auto p-4">
                <header className="flex flex-col md:flex-row space-y-3 items-start md:justify-between w-full my-12">
                    <h2 className="text-4xl font-bold">Insights</h2>
                </header>
                <div className="flex flex-col h-full w-full space-y-28 items-center">
                    {/* AVERAGE REVENUE AND EXPENSES BARCHART */}
                    <div className="w-[90%] h-[350px] flex flex-col items-center">
                        <h2 className="text-2xl font-semibold">Company Revenue and Expenses by Months</h2>
                        <ResponsiveContainer width='100%' height={300}>
                            <BarChart data={revExp}>
                                <CartesianGrid strokeDasharray='2 2' />
                                <Tooltip />
                                <XAxis dataKey={'date'} name='Date' >
                                </XAxis>
                                <YAxis />
                                <Legend verticalAlign="top" align="right" height={36} />
                                <Tooltip />
                                <Bar dataKey={'revenue'} fill='#026A75' barSize={40} />
                                <Bar dataKey={'expense'} fill='#C1121F' barSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* EMPLOYEE AVERAGE */}
                    <div className="w-[90%] h-[350px] flex flex-col items-center">
                        <h2 className="mb-5 text-2xl font-semibold">Average Employee Salaries by Job Position</h2>
                        <ResponsiveContainer width='100%' height={300}>
                            <ScatterChart>
                                <CartesianGrid strokeDasharray='1 1' />
                                <XAxis dataKey='job_position' />
                                <YAxis dataKey={'average'} />
                                <Tooltip />
                                <Scatter data={employeesWage} fill='#026A75' />
                            </ScatterChart>
                        </ResponsiveContainer>
                    </div>

                    {/* MONTHLY EXPESES */}
                    <div className="w-[90%] h-[330px] flex flex-col items-center">
                        <h2 className="mb-5 text-2xl font-semibold">Expense types of <span>
                            {todaysMonth}
                        </span></h2>
                        <ResponsiveContainer width='100%' height={300}>
                            <BarChart data={typeExpenses}>
                                <CartesianGrid strokeDasharray='1 1' />
                                <XAxis dataKey={'bill_name'} >
                                </XAxis>
                                {/* <Label value={'Company expense types'} offset={0} position="insideTop" /> */}
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey={'expense'} fill="#C1121F" barSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* MONTHLY PROJECT REVENUE */}
                    <div className="w-[90%] h-[330px] flex flex-col items-center">
                        <h2 className="mb-5 text-2xl font-semibold">Projects Sold during <span>
                            {todaysMonth}
                        </span></h2>
                        <ResponsiveContainer width='100%' height={300}>
                            <LineChart width={500} height={300} data={dailyRev}>
                                <CartesianGrid strokeDasharray='2' />
                                <XAxis dataKey='project.project_name' />
                                <YAxis />
                                <ZAxis dataKey='customer.customer_name' />
                                <Tooltip />
                                <Line dataKey={'payment'} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    {/* FIRST ROW */}
                    {/* <div className="flex w-full h-[30%] justify-between">
                    </div> */}
                </div>
            </section>
        </section >

    )
}
export default Insights
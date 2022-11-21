import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
    PieChart, Pie, Cell, Scatter, ScatterChart, ZAxis, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer, LabelList
} from "recharts";
import Navbar from "../../components/Navbar";

function Insights() {
    const user = useSelector(state => state.user)
    const [revenues, setRevenues] = useState([])
    const [expenses, setExpenses] = useState([])
    const [employees, setEmployees] = useState([])
    const [monExpenses, setMonExpenses] = useState([])
    const [typeExpenses, setTypeExpenses] = useState([])
    const [monRevenue, setMonRevenue] = useState([])
    const [customersRevenue, setCustomersRevenue] = useState([])
    const [employeesWage, setEmployeesWage] = useState([])
    const [totalMonthly, setTotalMonthly] = useState([])
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
                setExpenses(res.data)
                const unGroupedArr = res.data
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
                    // PUT PRICES IN OBJECT INRESPECT TO MONTH
                    if (`${expense.payment_date}` in byMonthObj) {
                        byMonthObj[expense.payment_date] += parseInt(expense.price)
                    } else {
                        byMonthObj[expense.payment_date] = 0
                        byMonthObj[expense.payment_date] += parseInt(expense.price)
                    }
                    // GET PRICES IN OBJECT IN RESPECT TO BILL NAME
                    if (`${expense.bill_name}` in byBillNameObj) {
                        byBillNameObj[expense.bill_name] += parseInt(expense.price)
                    } else {
                        byBillNameObj[expense.bill_name] = 0
                        byBillNameObj[expense.bill_name] += parseInt(expense.price)
                    }
                }
                for (let entry of Object.entries(byMonthObj)) {
                    byMonthArr.push({ payment_date: entry[0], payment: entry[1] })
                }
                for (let entry of Object.entries(byBillNameObj)) {
                    byBillNameArr.push({ bill_name: entry[0], payment: entry[1] })
                }
                setMonExpenses(byMonthArr)
                setTypeExpenses(byBillNameArr)
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
                    byJobPositionObj[employee.job_position] = parseInt(employee.wage)
                    byJobPositionObj[`${employee.job_position} count`] += 1
                } else {
                    byJobPositionObj[employee.job_position] = 0
                    byJobPositionObj[`${employee.job_position} count`] = 0
                    byJobPositionObj[employee.job_position] = parseInt(employee.wage)
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
        // console.log('------------PROJECT----------')
        // console.log(revenues)
        // console.log('-----------/PROJECT----------')
        // console.log('------------EXPENSES----------')
        // console.log(monExpenses)
        // console.log('-----------/EXPENSES----------')
        console.log('------------EMPLOYEES----------')
        console.log(employeesWage)
        console.log('-----------/EMPLOYEES----------')


    }


    return (
        <section className="flex bg-offWhite pr-4">
            <Navbar />
            <section className="flex-grow max-h-screen overflow-auto">
                <header className="flex flex-col md:flex-row space-y-3 items-start md:justify-between w-full my-6">
                    <h2 className="text-4xl font-bold">Insights</h2>
                </header>
                <div className="flex flex-col h-full w-full space-y-10">
                    {/* FIRST ROW */}
                    <div className="flex w-full h-[30%] justify-between">
                        {/* REVENUE BY MONTH BAR CHART */}
                        <div className="flex flex-col w-[48%] items-center h-full bg-white rounded-lg shadow-2xl">
                            <h3 className="flex justify-center mb-2">Revenue</h3>
                            <ResponsiveContainer width="80%" height="100%">
                                <BarChart width={50} height={"100%"} data={revenues}>
                                    <XAxis dataKey="payment_date" />
                                    <YAxis />
                                    <Tooltip />
                                    {/* <Legend /> */}
                                    <Bar dataKey="payment" fill="#026A75" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        {/* EXPENSES BY MONTH BAR CHART */}
                        <div className="flex flex-col h-full w-[48%] justify-between items-center bg-white rounded-lg shadow-2xl">
                            <h3 className="flex justify-center mb-2">Expenses</h3>
                            <ResponsiveContainer width="80%" height="100%" >
                                <BarChart width={150} height={150} data={monExpenses}>
                                    <XAxis dataKey="payment_date" />
                                    <YAxis />
                                    <Tooltip />
                                    {/* <Legend /> */}
                                    <Bar dataKey="payment" fill="#C8DAE4" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    {/* SECOND ROW */}
                    <div className="flex w-full h-[50%] justify-between items-center">
                        <div className="flex flex-col h-full w-[30%] bg-beau rounded-xl  shadow-2xl text-xs">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart width={400} height={400}>
                                    <Pie
                                        data={customersRevenue}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        outerRadius={160}
                                        fill="#026A75"
                                        dataKey="payment"
                                        nameKey='customer'
                                    >
                                        <LabelList dataKey='customer' />
                                        {typeExpenses.map((entry, index) => (
                                            <Cell key={`cell-${entry}`} />
                                        ))}
                                    </Pie>

                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="flex flex-col justify-center items-center h-full w-[66%] bg-white rounded-xl shadow-2xl">
                            <ResponsiveContainer width="80%" height="100%">
                                <ScatterChart width={730} height={250}
                                    margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="job_position" name="job position" unit="" />
                                    <YAxis dataKey="wage" name="wage" unit="$" />
                                    <ZAxis dataKey="user.firstname" range={[64, 144]} name="Firstname" />
                                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                                    <Legend />
                                    <Scatter name="Wages by Job Position" data={employeesWage} fill="#8884d8" />
                                </ScatterChart>
                            </ResponsiveContainer>

                        </div>
                    </div>
                </div>
            </section>
        </section >

    )
}
export default Insights
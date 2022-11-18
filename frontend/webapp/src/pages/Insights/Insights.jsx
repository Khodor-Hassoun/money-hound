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
    const [monExpenses, setMonExpenses] = useState([])
    const [typeExpenses, setTypeExpenses] = useState([])
    const [employeesWage, setEmployeesWage] = useState([])
    const [totalMonthly, setTotalMonthly] = useState([])
    const headers = {
        headers: {
            authorization: `Bearer ${user.token}`
        }
    }

    // GET REVENUES
    useEffect(() => {
        axios.get("http://localhost:3002/company/revenues", headers)
            .then(res => {
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
                for (let project of unsortedRev) {
                    if (`${project.payment_date}` in byMonthObj) {
                        byMonthObj[project.payment_date] += parseInt(project.payment)
                    } else {
                        byMonthObj[project.payment_date] = 0
                        byMonthObj[project.payment_date] += parseInt(project.payment)
                        byMonthArr.push()
                    }
                }
                for (let entry of Object.entries(byMonthObj)) {
                    byMonthArr.push({ payment_date: entry[0], payment: entry[1] })
                }
                setRevenues(byMonthArr)
            }).catch(e => {
                console.log(e)
            })
    }, [])
    // GET EXPENSES
    useEffect(() => {
        axios.get("http://localhost:3002/company/expenses", headers).
            then(res => {
                const unsortedRev = res.data
                console.log(res.data)
                for (let project of unsortedRev) {
                    project.payment_date = new Date(project.date)
                }
                unsortedRev.sort((a, b) => a.payment_date - b.payment_date);
                for (let project of unsortedRev) {
                    project.payment_date = `${project.payment_date.getMonth() + 1}/${project.payment_date.getFullYear()}`
                }
                const byMonthArr = []
                const byMonthObj = {}
                const byBillNameObj = {}
                const byBillNameArr = []

                for (let project of unsortedRev) {
                    // SORT EXPENSES BY MONTH
                    if (`${project.payment_date}` in byMonthObj) {
                        byMonthObj[project.payment_date] += parseInt(project.price)
                    } else {
                        byMonthObj[project.payment_date] = 0
                        byMonthObj[project.payment_date] += parseInt(project.price)
                    }
                    // SORT EXPENSE BY BILL NAME
                    if (`${project.bill_name}` in byBillNameObj) {
                        byBillNameObj[project.bill_name] += parseInt(project.price)
                    } else {
                        byBillNameObj[project.bill_name] = 0
                        byBillNameObj[project.bill_name] += parseInt(project.price)
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
    // GET EMPLOYEES TO GET THEIR PAY
    useEffect(() => {
        axios.get("http://localhost:3002/company/employees", {
            headers: {
                authorization: `Bearer ${user.token}`
            },
        }).then(res => {
            setEmployeesWage(res.data.employees)
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
                    <button onClick={logData} className="bg-tangerine p-2">Pressssssssss</button>
                </header>
                <div className="flex flex-col h-full w-full space-y-10">
                    {/* FIRST ROW */}
                    <div className="flex w-full h-[30%] justify-between">
                        {/* REVENUE BY MONTH BAR CHART */}
                        <div className="flex flex-col w-[48%] h-full bg-white rounded-lg shadow-2xl">
                            <h3 className="flex justify-center mb-2">Revenue</h3>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart width={150} height={"100%"} data={revenues}>
                                    <XAxis dataKey="payment_date" />
                                    <YAxis />
                                    <Tooltip />
                                    {/* <Legend /> */}
                                    <Bar dataKey="payment" fill="#026A75" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        {/* EXPENSES BY MONTH BAR CHART */}
                        <div className="flex flex-col h-full w-[48%] justify-between bg-white rounded-lg shadow-2xl">
                            <h3 className="flex justify-center mb-2">Expenses</h3>
                            <ResponsiveContainer width="100%" height="100%" >
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
                    <div className="flex w-full h-[50%] justify-between">
                        <div className="flex flex-col h-full w-[30%] bg-beau rounded-xl  shadow-2xl text-xs">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart width={400} height={400}>
                                    <Pie
                                        data={typeExpenses}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        outerRadius={160}
                                        fill="#026A75"
                                        dataKey="payment"
                                        nameKey='bill_name'
                                    >
                                        <LabelList dataKey='bill_name' />
                                        {typeExpenses.map((entry, index) => (
                                            <Cell key={`cell-${entry}`} />
                                        ))}
                                    </Pie>

                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="flex flex-col h-full w-[66%] bg-white rounded-xl shadow-2xl">
                            <ResponsiveContainer width="100%" height="100%">
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
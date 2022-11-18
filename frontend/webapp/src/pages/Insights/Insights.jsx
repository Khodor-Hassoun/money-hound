import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer } from "recharts";
import Navbar from "../../components/Navbar";

function Insights() {
    const user = useSelector(state => state.user)
    const [revenues, setRevenues] = useState([])
    const [expenses, setExpenses] = useState([])
    const [employees, setEmployees] = useState([])
    const [data, setData] = useState([])
    const headers = {
        headers: {
            authorization: `Bearer ${user.token}`
        }
    }

    // GET REVENUES
    useEffect(() => {
        axios.get("http://localhost:3002/company/revenues", {
            headers: {
                authorization: `Bearer ${user.token}`
            },
        }).then(res => {
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
                // console.log(res.data)
                for (let project of unsortedRev) {
                    project.payment_date = new Date(project.date)
                }
                unsortedRev.sort((a, b) => a.payment_date - b.payment_date);
                for (let project of unsortedRev) {
                    project.payment_date = `${project.payment_date.getMonth() + 1}/${project.payment_date.getFullYear()}`
                }
                const byMonthArr = []
                const byMonthObj = {}
                for (let project of unsortedRev) {
                    if (`${project.payment_date}` in byMonthObj) {
                        byMonthObj[project.payment_date] += parseInt(project.price)
                    } else {
                        byMonthObj[project.payment_date] = 0
                        byMonthObj[project.payment_date] += parseInt(project.price)
                        byMonthArr.push()
                    }
                }
                for (let entry of Object.entries(byMonthObj)) {
                    byMonthArr.push({ payment_date: entry[0], payment: entry[1] })
                }
                setExpenses(byMonthArr)
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
            setEmployees(res.data.employees)
        })
    }, [])
    // ADD C
    function logData() {
        console.log('------------PROJECT----------')
        console.log(revenues)
        console.log('-----------/PROJECT----------')
        console.log('------------EXPENSES----------')
        console.log(expenses)
        console.log('-----------/EXPENSES----------')
        // console.log('------------EMPLOYEES----------')
        // console.log(employees)
        // console.log('-----------/EMPLOYEES----------')


    }






    return (
        <section className="flex bg-offWhite pr-4">
            <Navbar />
            <section className="flex-grow max-h-screen overflow-auto">
                <header className="flex flex-col md:flex-row space-y-3 items-start md:justify-between w-full my-6">
                    <h2 className="text-4xl font-bold">Insights</h2>
                    <button onClick={logData} className="bg-tangerine p-2">Pressssssssss</button>
                </header>
                <div className="flex flex-col h-full w-full">
                    {/* < ResponsiveContainer width="100%" height="30%">
                        <LineChart
                            width={500}
                            height={300}
                            data={revenues}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="payment_date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="payment" stroke="#8884d8" activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer> */}
                    {/* FIRST ROW */}
                    <div className="flex w-full h-[20%]">
                        {/* REVENUE BY MONTH BAR CHART */}
                        <div className="flex flex-col w-[48%]">
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
                        <div className="flex flex-col h-full w-[48%] justify-between">
                            <h3 className="flex justify-center mb-2">Expenses</h3>
                            <ResponsiveContainer width="100%" height="100%" >
                                <BarChart width={150} height={150} data={expenses}>
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
                    <div className="flex w-full h-[20%]">

                    </div>
                </div>
            </section>
        </section >

    )
}
export default Insights
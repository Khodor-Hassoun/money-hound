import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Navbar from "../../components/Navbar";

function Insights() {
    const user = useSelector(state => state.user)
    const [revenues, setRevenues] = useState([])
    const [expenses, setExpenses] = useState([])
    const [employees, setEmployees] = useState([])
    let sortedRevenues = []
    let sortedExpenses = []
    // GET REVENUES
    useEffect(() => {
        axios.get("http://localhost:3002/company/revenues", {
            headers: {
                authorization: `Bearer ${user.token}`
            },
        }).then(res => {
            setRevenues(res.data)
        }).catch(e => {
            console.log(e)
        })
    }, [])
    // GET EXPENSES
    useEffect(() => {
        axios.get("http://localhost:3002/company/expenses", {
            headers: {
                authorization: `Bearer ${user.token}`
            },
        }).then(res => {
            setExpenses(res.data)
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
        console.log('------------EMPLOYEES----------')
        console.log(employees)
        console.log('-----------/EMPLOYEES----------')


    }

    function dateSort() {
        sortedRevenues = revenues
        console.log(sortedRevenues)
        for (let project of sortedRevenues) {
            project.payment_date = new Date(project.payment_date)
        }
        sortedRevenues.sort((a, b) => a.payment_date - b.payment_date);
        console.log(sortedRevenues)
    }





    return (
        <section className="flex bg-offWhite pr-4">
            <Navbar />
            <section className="flex-grow max-h-screen overflow-auto">
                <header className="flex flex-col md:flex-row space-y-3 items-start md:justify-between w-full my-6">
                    <h2 className="text-4xl font-bold">Insights</h2>
                    <button onClick={dateSort}>Pressssssssss</button>
                </header>
                <div className="flex h-full w-full">
                    <ResponsiveContainer width="100%" height="30%">
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
                            <XAxis dataKey="customer.customer_name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="payment" stroke="#8884d8" activeDot={{ r: 8 }} />
                            {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </section>
        </section >

    )
}
export default Insights
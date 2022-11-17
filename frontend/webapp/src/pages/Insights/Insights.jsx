import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import Navbar from "../../components/Navbar";

function Insights() {
    const user = useSelector(state => state.user)
    const [revenues, setRevenues] = useState([])
    const [expenses, setExpenses] = useState([])
    const [employees, setEmployees] = useState([])
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
            console.log(res.data)
            // setEmployees(res.data.employees)
            setEmployees(res.data.employees)
        })
    }, [])
    // ADD C
    return (
        <section className="flex bg-offWhite pr-4">
            <Navbar />
            <button onClick={() => { console.log(expenses); console.log(revenues) }}>Press heeeeeeeeeeeeee</button>
        </section>

    )
}
export default Insights
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import Navbar from "../../components/Navbar";

function Insights() {
    const user = useSelector(state => state.user)
    const [revenues, setRevenues] = useState([])
    const [expenses, setExpenses] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3002/company/revenues", {
            headers: {
                authorization: `Bearer ${user.token}`
            },
        }).then(res => {
            console.log(res)
        })
    }, [])
    return (
        <section className="flex bg-offWhite pr-4">
            <Navbar />

        </section>

    )
}
export default Insights
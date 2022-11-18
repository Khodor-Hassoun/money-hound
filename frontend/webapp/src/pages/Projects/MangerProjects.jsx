import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import axios from "axios"
import Navbar from "../../components/Navbar"

function ManagerProject() {
    const user = useSelector(state => state.user)
    const [projects, setProjects] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:3002/project/${user.id}`, {
            headers: {
                authorization: `Bearer ${user.token}`
            },
        }).then(res => {
            console.log('----------PROJECTS DATA---------')
            console.log(res)
            setProjects(res.data)
            console.log('----------/PROJECTS DATA-----------')

        })
    }, [])

    return (
        <section className="flex bg-offWhite pr-4">
            <Navbar />


        </section >
    )
}
export default ManagerProject
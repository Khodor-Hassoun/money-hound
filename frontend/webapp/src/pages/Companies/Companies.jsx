import axios from "axios"
import { useSelector } from "react-redux"

function Companies() {
    const user = useSelector((state) => state.user)
    console.log(user)
    axios.get("http://localhost:3002/user/companies", {
        headers: {
            authorization: `Bearer ${user.token}`
        }
    }).then(res => {
        console.log(res)
    })
}
export default Companies
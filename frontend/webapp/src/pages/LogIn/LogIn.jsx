import moneyNew from "../../resources/images/Money_Hound_cropped.png"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
import { gettoken, setUser } from "../../redux/user"


function LogIn() {

  const navigate = useNavigate()
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  function userChange(e) {
    dispatch(setUser({ ...user, [e.target.name]: e.target.value }))
  }
  // console.log(process.env.REACT_APP_BASE_URL)
  function request() {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}auth/login`, {
        email: user.email,
        password: user.password,
      })
      .then((res) => {
        dispatch(setUser({
          ...user,
          firstname: res.data.user.firstname,
          lastname: res.data.user.lastname,
          email: res.data.user.email,
          id: parseInt(res.data.user.id),
          user_type: 1
        }))
        dispatch(gettoken({
          token: res.data.token
        }))
        navigate("/companies")
      }).catch(e => {
        console.log(e)
      });
  }

  return (
    <section className="bg-ming w-screen h-screen flex justify-center items-center">
      {/* CARD DIV */}
      <div className="bg-offWhite flex flex-col pb-10 w-[400px] px-6 items-center rounded-md">
        <div className="w-1/2 h-1/2">
          <img src={moneyNew} alt="Logo" className="h-full w-full" />
        </div>
        {/* EMAIL LABEL AND INPUT */}
        <div className="flex flex-col py-2 w-full">
          <label htmlFor="email" className="font-semibold">Email</label>
          <input
            type="text"
            placeholder="Email"
            id="email"
            name="email"
            className="border-black border-solid border rounded py-2 px-1"
            onChange={userChange}
          ></input>
        </div>
        {/* PASSWORD LABEL AND INPUT */}
        <div className="flex flex-col py-2 w-full">
          <label htmlFor="password" className="font-semibold">Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            className="border-black border-solid border rounded py-2 px-1"
            onChange={userChange}
          ></input>
          <span className="text-tangerine self-end">Forgot password?</span>
        </div>
        {/* BUTTON */}
        <button
          className="bg-tangerine text-white my-4 py-2 rounded-full w-full font-bold hover:brightness-110"
          onClick={() => {
            request();
          }}
        >SIGN IN
        </button>

        <span className="my-4">
          Don't have an account?
          <span className="text-tangerine"> <Link to="/signup">Register here</Link></span>
        </span>
      </div>
    </section>
  );
}
export default LogIn
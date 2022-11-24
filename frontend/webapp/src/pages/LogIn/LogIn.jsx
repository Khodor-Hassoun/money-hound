import money from "../../resources/images/moneyhound.jpg";
import moneyNew from "../../resources/images/Money_Hound_cropped.png"
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
import { gettoken, setUser } from "../../redux/user"
import Navbar from "../../components/Navbar";

function LogIn() {
  const [athenticated, setAuthentication] = useState(false)
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const logo = require('C:/Users/khodor/Code/money-hound/frontend/webapp/src/uploads/images/Photo_1669070297505_737.png')
  function userChange(e) {
    dispatch(setUser({ ...user, [e.target.name]: e.target.value }))
  }

  function request() {
    axios
      .post("http://localhost:3002/auth/login", {
        email: user.email,
        password: user.password,
      })
      .then((res) => {
        setAuthentication(bool => bool = true)
        dispatch(setUser({
          ...user,
          firstname: res.data.user.firstname,
          lastname: res.data.user.lastname,
          email: res.data.user.email,
          id: parseInt(res.data.user.id),
          // password: res.data.user.password,
          user_type: 1
        }))
        dispatch(gettoken({
          token: res.data.token
        }))
        navigate("/companies")
      }).catch(e => {
        console.log(e)
      });
    if (athenticated) {

    }
  }

  return (
    <section className="bg-ming w-screen h-screen flex justify-center items-center">
      {/* CARD DIV */}
      <div className="bg-offWhite flex flex-col pb-10 w-[400px] px-6 items-center rounded-md">
        <div className="w-1/2 h-1/2">
          <img src={moneyNew} alt="Logo" className="h-full w-full" />
          {/* <img src='logo' alt="Logo" className="h-full w-full" /> */}
          {/* <img alt="Logo" className="h-full w-full" src={logo} /> */}
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
          {/* <Link to="/companies">SIGN IN</Link> */}
        </button>
        {
          athenticated ? <Link to="/companies" /> : ""
        }
        <span className="my-4">
          Don't have an account?
          <span className="text-tangerine"> <Link to="/signup">Register here</Link></span>
        </span>
      </div>
    </section>
  );
}
export default LogIn
import money from "../../resources/images/moneyhound.jpg";
import { useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function LogIn() {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  function handleClick() {
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  }
  function request() {
    axios
      .post("http://localhost:3002/auth/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((res) => {
        console.log(res);
      });
  }

  return (
    <section className="bg-ming w-screen h-screen flex justify-center items-center">
      {/* CARD DIV */}
      <div className="bg-offWhite flex flex-col py-10 w-[500px] px-12 items-center">
        <div className="h-24 w-full">
          <img src={money} alt="Logo" className="h-full w-full" />
        </div>
        {/* EMAIL LABEL AND INPUT */}
        <div className="flex flex-col p-2 w-full">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Email"
            id="email"
            className="border-black border-solid border rounded py-2 px-1"
            ref={emailRef}
          ></input>
        </div>
        {/* PASSWORD LABEL AND INPUT */}
        <div className="flex flex-col p-2 w-full">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="password"
            id="password"
            className="border-black border-solid border rounded py-2 px-1"
            ref={passwordRef}
          ></input>
          <span className="text-tangerine self-end">Forgot password?</span>
        </div>
        {/* BUTTON */}
        <button
          className="bg-tangerine text-white my-4 p-2 rounded-full w-full"
          onClick={() => {
            handleClick();
            request();
          }}
        >
          SIGN UP
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
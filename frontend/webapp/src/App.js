import "./App.css";
import logo from "./moneylogo.svg";
import money from "./moneyhound.jpg";
function App() {
  return (
    <body className="bg-ming w-screen h-screen flex justify-center items-center">
      <div className="bg-offWhite flex flex-col px-20 py-10">
        <div className="h-24">
          <img src={money} alt="Logo" className="h-full w-full" />
        </div>
        <div className="flex flex-col p-2">
          <label htmlFor="email">Email</label>
          <input
            typeof="text"
            placeholder="Email"
            id="email"
            className="border-black border-solid border rounded"
          ></input>
        </div>
        <div className="flex flex-col p-2">
          <label htmlFor="password">Password</label>
          <input
            typeof="password"
            placeholder="password"
            id="password"
            className="border-black border-solid border rounded"
          ></input>
          <span className="text-tangerine self-end p-2">Forgot password?</span>
        </div>
        <button className="bg-tangerine text-white rounded-md">SIGN UP</button>
      </div>
    </body>
  );
}

export default App;

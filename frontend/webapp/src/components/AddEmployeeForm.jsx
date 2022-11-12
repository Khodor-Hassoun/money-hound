import { useRef } from "react";

function AddEmployeeForm({ closePopup }) {
  const firstnameRef = useRef("");
  const lastnameRef = useRef("");
  const companyEmailRef = useRef("");
  const jobPositionRef = useRef("");
  const payrollRef = useRef("");
  return (
    <>
      <div className="">
        {/* NAME AND CAPITAL */}
        {/* LABELS AND INPUTS */}
        <div className="flex p-2 w-full justify-between">
          {/* FIRST NAME LAST NAME */}
          <div className="flex flex-col mr-0.5 w-[48%]">
            <label htmlFor="firstname">Firstname</label>
            <input type="text" id="firstname" placeholder="John" ref={firstnameRef} className="border-black border-solid border rounded py-2 px-1"></input>
          </div>
          <div className="flex flex-col w-[48%]">
            <label htmlFor="lastname">lastname</label>
            <input type="text" id="lastname" placeholder="Doe" ref={lastnameRef} className="border-black border-solid border rounded py-2 px-1"></input>
          </div>
        </div>
        {/* EMAIL */}
        <div className="flex flex-col p-2">
          <label htmlFor="companyemail">Email</label>
          <input
            type="text"
            id="companyemail"
            placeholder="name@domain.com"
            className="border-black border-solid border rounded py-2 px-1"
            ref={companyEmailRef}
          ></input>
        </div>
        {/* JOB POSITION AND PAYROLL */}
        <div className="flex p-2 w-full justify-between">
          {/* FIRST NAME LAST NAME */}
          <div className="flex flex-col mr-0.5 w-[48%]">
            <label htmlFor="jobPosition">Job Position</label>
            <input
              type="text"
              id="address"
              placeholder="123 st."
              className="border-black border-solid border rounded py-2 px-1"
              ref={jobPositionRef}
            ></input>
          </div>
          <div className="flex flex-col w-[48%]">
            <label htmlFor="payroll">Payroll</label>
            <input
              type="text"
              id="phone"
              placeholder="01455678"
              className="border-black border-solid border rounded py-2 px-1"
              ref={payrollRef}
            ></input>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddEmployeeForm;

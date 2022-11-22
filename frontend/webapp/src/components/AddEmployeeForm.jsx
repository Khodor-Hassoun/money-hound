import { useRef } from "react";

function AddEmployeeForm({ setNewEmployee, newEmployee }) {
  const firstnameRef = useRef("");
  const lastnameRef = useRef("");
  const companyEmailRef = useRef("");
  const jobPositionRef = useRef("");
  const payrollRef = useRef("");
  function employeeDetails(e) {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div className="">
        {/* NAME AND CAPITAL */}
        {/* LABELS AND INPUTS */}
        <div className="flex py-2 w-full justify-between">
          {/* FIRST NAME LAST NAME */}
          <div className="flex flex-col mr-0.5 w-[48%]">
            <label htmlFor="firstname" className="font-semibold">Firstname</label>
            <input type="text" id="firstname" name="firstname" ref={firstnameRef} onChange={employeeDetails} className="border-black border-solid border rounded py-2"></input>
          </div>
          <div className="flex flex-col w-[48%]">
            <label htmlFor="lastname" className="font-semibold">lastname</label>
            <input type="text" id="lastname" name="lastname" ref={lastnameRef} onChange={employeeDetails} className="border-black border-solid border rounded py-2"></input>
          </div>
        </div>
        {/* EMAIL */}
        <div className="flex flex-col py-2">
          <label htmlFor="companyemail" className="font-semibold">Email</label>
          <input
            type="text"
            id="companyemail"
            name="email"
            className="border-black border-solid border rounded py-2"
            ref={companyEmailRef}
            onChange={employeeDetails}
          ></input>
        </div>
        {/* JOB POSITION AND PAYROLL */}
        <div className="flex py-2 w-full justify-between">
          {/* FIRST NAME LAST NAME */}
          <div className="flex flex-col mr-0.5 w-[48%]">
            <label htmlFor="jobPosition" className="font-semibold">Job Position</label>
            <input
              type="text"
              id="address"
              name="job_position"
              className="border-black border-solid border rounded py-2"
              ref={jobPositionRef}
              onChange={employeeDetails}
            ></input>
          </div>
          <div className="flex flex-col w-[48%]">
            <label htmlFor="payroll" className="font-semibold">Salary</label>
            <input
              type="text"
              id="phone"
              name="wage"
              className="border-black border-solid border rounded py-2"
              ref={payrollRef}
              onChange={employeeDetails}
            ></input>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddEmployeeForm;

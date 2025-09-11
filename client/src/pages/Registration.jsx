import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    college: "",
    course: "",
    branch:"",
    session: ""
 });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post('http://localhost:5000/api/examinee',form)
      alert("Registered Successfully")
      window.location.href='/'
    }catch(er){
      console.log(er)
      alert("Sorry Try Again later")
    }

  }
   const [data ,setData] = useState([])
   const handlefetch = async()=>{
    try{
      const res = await axios.get('http://localhost:5000/api/session');
      setData(res.data)
    }catch(er){
      console.log(er)
    }
   }
   useEffect(()=>{
    handlefetch();
   },[])

  return (
    <div className="container-fluid" style={{minHeight:"100vh", display:"flex", justifyContent:"center", alignItems:"center",padding: "40px 20px", fontFamily: "Poppins, Arial, sans-serif",background:"linear-gradient(to bottom, #29dbe7ff, #1976d2",backdropFilter:"blur(10px)"}}>
      <div className="row mx-auto" style={{width:"420px",boxShadow: "0 8px 32px rgba(0,0,0,0.2)"}}>
        <div className="card p-4">
        <h2 className="d-flex justify-content-center mt-1" style={{fontSize: "35px",fontWeight: "600",color: "black",}} >Registration</h2>
        <div className="mt-3" style={{borderTop:"3px solid black",}}></div>
        <form method="POST" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            style={{width:"100%",boxShadow: "0 4px 10px rgba(0,0,0,0.2)",fontSize:"17px"}}
            className="mt-5 form-control p-2"
            
             
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            style={{width:"100%",boxShadow: "0 4px 10px rgba(0,0,0,0.2)",fontSize:"17px"}}
            className="mt-4 form-control p-2"
            
             
          />
          <input
            type="password"
            name="password"
            placeholder="Create Password"
            value={form.password}
            onChange={handleChange}
            required
            style={{width:"100%",boxShadow: "0 4px 10px rgba(0,0,0,0.2)",fontSize:"17px"}}
            className="mt-4 form-control p-2"
             
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            style={{width:"100%",boxShadow: "0 4px 10px rgba(0,0,0,0.2)",fontSize:"17px"}}
            className="mt-4 form-control p-2"
             
          />
          <input
            type="text"
            name="college"
            placeholder="College Name"
            value={form.college}
            onChange={handleChange}
            required
            style={{width:"100%",boxShadow: "0 4px 10px rgba(0,0,0,0.2)",fontSize:"17px"}}
            className="mt-4 form-control p-2"
             
          />
          <input
            type="text"
            name="course"
            placeholder="Course"
            value={form.course}
            onChange={handleChange}
            required
            style={{width:"100%",boxShadow: "0 4px 10px rgba(0,0,0,0.2)",fontSize:"17px"}}
            className="mt-4 form-control p-2"

             
          />
          <input
            type="text"
            name="branch"
            placeholder="Branch"
            value={form.branch}
            onChange={handleChange}
            required
            style={{width:"100%",boxShadow: "0 4px 10px rgba(0,0,0,0.2)",fontSize:"17px"}}
            className="mt-4 form-control p-2"
             
          />
         <select
            name="session"
            style={{width:"100%",boxShadow: "0 4px 10px rgba(0,0,0,0.2)",fontSize:"17px"}}
            className="mt-4 form-control p-2"
            onChange={handleChange}
             
         >
         <option value="">Select Session</option>
            {data.map((item) => (
           <option key={item._id} value={item._id}>
           {item.name}
           </option>
  ))}
</select>


          <button
            type="submit"
            style={{width:"100%",boxShadow: "0 4px 10px rgba(0,0,0,0.2)",backgroundColor:" #29dbe7ff",border:"none",borderRadius:"5px",fontSize:"18px"}}
            className="mt-4 p-2"
            
          >
            Register
          </button>
        </form>
      </div>
      </div>
      </div>
  );
}
 
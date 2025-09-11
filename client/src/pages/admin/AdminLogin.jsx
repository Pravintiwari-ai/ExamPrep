import React from 'react'
import styles from "../Login.module.css";
import { useState } from 'react';
import axios from 'axios'

const AdminLogin = () => {
  const[form, setForm]=useState({
    email:'',
    password:''
  });
  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/admin/login',form);
    if(res.data.message=="Login Successfully"){
      alert("Login Successfully");
      localStorage.setItem('adminEmail',res.data.admin.email);
       localStorage.setItem('id',res.data.admin.id);
        localStorage.setItem('role',res.data.admin.role);
        window.location.href='/adminDashboard'

    }
  }
  return (
    
        <div className="container-fluid"style={{minHeight:"100vh", display:"flex", justifyContent:"center", alignItems:"center",padding: "40px 20px", fontFamily: "Poppins, Arial, sans-serif",background:"linear-gradient(to bottom, #29dbe7ff, #1976d2",backdropFilter:"blur(10px)"}}>
          <div className="row mx-auto"style={{width:"450px",boxShadow: "5px 15px 40px rgba(0,0,0,0.2)"}}>
          <div className="card p-4 ">
            <h2 className="d-flex justify-content-center mt-1" style={{fontSize: "35px",fontWeight: "600",color: "black",}} >Admin Login</h2>
              <div className="mt-3" style={{borderTop:"3px solid black",}}></div>
              <form method='POST' onSubmit={handleSubmit}>
                  <input type='email' onChange={handleChange} id='emailaddress' name='email' placeholder='Enter your Email' required className='form-control mt-5 mb-4 p-3' style={{width:"100%",boxShadow: "0 4px 10px rgba(0,0,0,0.2)",fontSize:"17px",borderRadius:'15px'}}/>
                  <input type='password' onChange={handleChange} id='password' name='password' placeholder='Enter your Password' required className='form-control mt-5 mb-4 p-3' style={{width:"100%",boxShadow: "0 4px 10px rgba(0,0,0,0.2)",fontSize:"17px",borderRadius:'15px'}}/>
                  <button type='submit'style={{width:"100%",boxShadow: "0 4px 10px rgba(0,0,0,0.2)",backgroundColor:" #29dbe7ff",border:"none",borderRadius:"15px",fontSize:"22px"}} className={`btn mt-5  mb-3 p-3 ${styles.loginbutton}`} >Admin Login</button>
              </form>
            </div>
          </div>
         </div>
        
         
  )
}

export default AdminLogin
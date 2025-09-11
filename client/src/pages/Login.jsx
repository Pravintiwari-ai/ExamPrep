import React, { useState } from 'react'
import styles from"./Login.module.css"
import { Link } from 'react-router'
import axios from 'axios'

const Login = () => {
  const [form,setForm]=useState({
    email:"",
    password:""
  });
  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const res =await axios.post('http://localhost:5000/api/examinee/login',form)
      if(res.data.message=="Login Successfully"){
         localStorage.setItem('userEmail',res.data.user.email);
       localStorage.setItem('userid',res.data.user.id);
        localStorage.setItem('userrole',res.data.user.role);
        window.location.href='/userDashboard'
      }
    }catch(er){
      console.log(er);
      alert("Sorry try again")
      
    }
  }

console.log(form)
  return (
    
    <div className="container-fluid" style={{minHeight:"100vh", display:"flex", justifyContent:"center", alignItems:"center",padding: "40px 20px", fontFamily: "Poppins, Arial, sans-serif",background:"linear-gradient(to bottom, #29dbe7ff, #1976d2",backdropFilter:"blur(10px)"}}>
      <div className="row mx-auto" style={{width:"450px",boxShadow: "5px 15px 40px rgba(0,0,0,0.2)"}}>
      <div className="card p-4">
        <h2 className="d-flex justify-content-center mt-1" style={{fontSize: "35px",fontWeight: "600",color: "black",}} >Login</h2>
        <div className="mt-3" style={{borderTop:"3px solid black",}}></div>
          <form  method="post" onSubmit={handleSubmit}>
             
              <input type='email' name='email' onChange={handleChange} id='emailaddress' placeholder='Enter your Email' required className='form-control mt-5 mb-4 p-3' style={{width:"100%",boxShadow: "0 4px 10px rgba(0,0,0,0.2)",fontSize:"17px",borderRadius:'15px'}}/>
              
              <input type='password' name='password' onChange={handleChange} id='password' placeholder='Enter your Password' required className='form-control mt-4 p-3' style={{width:"100%",boxShadow: "0 4px 10px rgba(0,0,0,0.2)",fontSize:"17px",borderRadius:'15px'}}/>
              <button style={{width:"100%",boxShadow: "0 4px 10px rgba(0,0,0,0.2)",backgroundColor:" #29dbe7ff",border:"none",borderRadius:"15px",fontSize:"22px"}} className={`btn mt-5 p-3 ${styles.loginbutton}`}>Login</button>
             <div className='mt-3' style={{textAlign:"center",fontSize:"18px"}}>OR</div>
              <Link to={"/registration"}><button className={`btn mt-3 p-3 ${styles.loginbutton}`} style={{width:"100%", color:"black",boxShadow: "0 4px 10px rgba(0,0,0,0.2)",backgroundColor:" #29dbe7ff",border:"none",borderRadius:"15px",fontSize:"22px"}}>Sign up</button></Link>
              
          </form>
        </div>
      </div>
      </div>
     
     
   
  )
}

export default Login
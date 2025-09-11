import React from 'react'
import { Link, Outlet } from 'react-router'

const UserDashboard = () => {
  const role = localStorage.getItem('userrole')
  if(role=="user"){
    var email= localStorage.getItem('userEmail')
  }
  else{
    window.location.href='/'
  }
  const getGreeting=()=>{
    const hours= new Date().getHours();
    if(hours < 12) return 'Good morning';
    if(hours < 18) return 'Good afternoon';
    return 'Good evening'

  }
  const handlelogout =()=>{
    localStorage.removeItem('userEmail')
    localStorage.removeItem('userRole')
    localStorage.removeItem('userId')
    window.location.href='/'
  }
  return (
    <>
    <div className="container-fluid" style={{minHeight:'100vh',maxHeight:"auto",fontFamily:"Poppins, sans-serif"}}>
        <div className="row"style={{height:"90px",background:"linear-gradient(to right, #29dbe7ff, #1976d2"}}>
          <div className="col-sm-3 " style={{display:'flex',justifyContent:"center", alignItems:"center"}}>
                
              <h2 style={{textAlign:"end", color:"white", fontWeight:"bold" }}>Exam Prep</h2>
              
            </div>
          <div className="col-sm-3 " style={{display:'flex', justifyContent:"start", alignItems:"center"}}>

                
              <h2  style={{textAlign:"end", color:"#e0f7fa", fontWeight:"bold" }}>{getGreeting()}</h2>
            </div>
            <div className="col-sm-6 " style={{display:'flex', justifyContent:"end", alignItems:"center"}}>
                
              <h1 style={{textAlign:"end", color:"#f8f8fc", fontWeight:"bold" }}>User Dashboard</h1>
            </div>
        </div>
        <div className="row" style={{minHeight:"100vh"}}>
            <div className="col-sm-3 p-0" style={{background:"linear-gradient(160deg, #29dae7ff, #1976d2"}}>
                <ul class="nav flex-column p-3">
                  <li className="nav-item mt-1 d-block p-3" style={{background: "linear-gradient(to bottom right, #29a6aaa6, #3e567713)" ,borderRadius:"15px"}}>
                    <Link className="nav-link active"  aria-current="page" to="myexams " style={{color:"#f8f8fc",fontWeight:"600",fontSize:"19px"}}>My Exams</Link>
                  </li>
                  <li className="nav-item mt-4 d-block p-3"style={{background: "linear-gradient(to bottom right, #29a6aaa6, #3e567713)" ,borderRadius:"15px"}}>
                    <Link className="nav-link active" aria-current="page" to="myresult" style={{color:"#f8f8fc",fontWeight:"600",fontSize:"19px"}}>My Results</Link>
                  </li>
                  <li className="nav-item mt-4 d-block p-3"style={{background: "linear-gradient(to bottom right, #29a6aaa6, #3e567713)" ,borderRadius:"15px"}}>
                    <Link className="nav-link active" aria-current="page" to="changepassword" style={{color:"#f8f8fc",fontWeight:"600",fontSize:"19px"}}>Change Password</Link>
                  </li>
                  <li className="nav-item mt-4 d-block p-3"style={{background: "linear-gradient(to bottom right, #29a6aaa6, #3e567713)" ,borderRadius:"15px"}}>
                    <Link className="nav-link active" aria-current="page" to="message" style={{color:"#f8f8fc",fontWeight:"600",fontSize:"19px"}}>Message</Link>
                  </li>
                  <li className="nav-item mt-4 d-block p-3"style={{background: "linear-gradient(to bottom right, #29a6aaa6, #3e567713)" ,borderRadius:"15px"}}>
                    <Link className="nav-link active" aria-current="page" onClick={()=>{handlelogout()}} style={{color:"#f8f8fc",fontWeight:"600",fontSize:"19px"}}>Logout</Link>
                  </li>
                  
                </ul>
            </div>
            <div className="col-sm-9 p-0">
              <Outlet/>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default UserDashboard
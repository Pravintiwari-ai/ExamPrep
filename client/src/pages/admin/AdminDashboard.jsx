import React from 'react'
import Navbar from '../../components/Navbar'
import SessionFrom from '../../components/SessionFrom'
import { Outlet } from 'react-router'

const AdminDashboard = () => {
  const getGreeting=()=>{
    const hours= new Date().getHours();
    if(hours < 12) return 'Good Morning!';
    if(hours < 18) return 'Good Afternoon!';
    return 'Good Evening!'

  }
  
  return (
    <>
    <div className="container-fluid" style={{ fontFamily:"Poppins, sans-serif"}}>
        <div className="row"style={{height:"90px",background:"linear-gradient(to right, #29dbe7ff, #1976d2"}}>
          <div className="col-sm-3 " style={{display:'flex',justifyContent:"center", alignItems:"center"}}>
                
              <h2 style={{textAlign:"end", color:"white", fontWeight:"bold" }}>Exam Prep</h2>
              
            </div>
          <div className="col-sm-3 " style={{display:'flex', justifyContent:"start", alignItems:"center"}}>

                
              <h2  style={{textAlign:"end", color:"#e0f7fa", fontWeight:"bold" }}>{getGreeting()}</h2>
            </div>
            <div className="col-sm-6 " style={{display:'flex', justifyContent:"end", alignItems:"center"}}>
                
              <h1 style={{textAlign:"end", color:"#f8f8fc", fontWeight:"bold" }}>Admin Dashboard</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3 p-0"><Navbar/></div>
            <div className="col-sm-9 p-0">
              <Outlet/>
            </div>
        </div>
    </div>
    </>
  )
}

export default AdminDashboard
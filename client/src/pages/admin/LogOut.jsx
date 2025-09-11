import React from 'react'
import Navbar from '../../components/Navbar'

const LogOut = () => {
  return (
    <>
    <div className="container-fulid px-0" style={{overflowX:"hidden", fontFamily:"Poppins, sans-serif"}}>
        <div className="row " style={{height:"90px",background:"linear-gradient(180deg, #0d47a1, #1976d2",display:"flex" ,alignItems:"center"}}>
            <div className="col-sm-12">
              <h2 className='me-4' style={{textAlign:"end", color:"#f8f8fc", fontWeight:"bold" }}>Admin Dashboard</h2>
              </div>
        </div>
        <div className="row">
            <div className="col-sm-3"><Navbar/></div>
            <div className="col-sm-9"></div>
        </div>
    </div>
    </>
  )
}

export default LogOut
import React from 'react'
import { Link} from 'react-router-dom'

const Navbar = () => {
  const handlelogout =()=>{
    localStorage.removeItem('adminEmail')
    localStorage.removeItem('role')
    localStorage.removeItem('id')
    window.location.href='/'
  }
  return (
    <div className="container-fluid min-vh-100" style={{height:"100%",background:"linear-gradient(160deg, #29dae7ff, #1976d2" ,fontWeight:"600",fontFamily:"Poppins, sans-serif"}}>
      <div className="row">
        <div className='col-sm-12'>
          <ul class="nav flex-column p-2">
  <li className="nav-item mt-1  d-block p-2" style={{background: "linear-gradient(to bottom right, #29a6aaa6, #3e567713)" ,borderRadius:"15px"}} >
    <Link className="nav-link active"  aria-current="page" to="/adminDashboard/session "  style={{color:"#f8f8fc",fontWeight:"600",fontSize:"19px"}}>Session</Link>
  </li>
  <li className="nav-item mt-3  d-block p-2" style={{background: "linear-gradient(to bottom right, #29a6aaa6, #3e567713)" ,borderRadius:"15px"}}>
    <Link className="nav-link active" aria-current="page" to="/adminDashboard/subject" style={{color:"#f8f8fc",fontWeight:"600",fontSize:"19px"}}>Subject</Link>
  </li>
  <li className="nav-item mt-3  d-block p-2" style={{background: "linear-gradient(to bottom right, #29a6aaa6, #3e567713)" ,borderRadius:"15px"}}>
    <Link className="nav-link active" aria-current="page" to="/adminDashboard/examinee" style={{color:"#f8f8fc",fontWeight:"600",fontSize:"19px"}}>Examinee</Link>
  </li>
  <li className="nav-item mt-3  d-block p-2" style={{background: "linear-gradient(to bottom right, #29a6aaa6, #3e567713)" ,borderRadius:"15px"}}>
    <Link className="nav-link active" aria-current="page" to="/adminDashboard/examination" style={{color:"#f8f8fc",fontWeight:"600",fontSize:"19px"}}>Examination</Link>
  </li>
  <li className="nav-item mt-3  d-block p-2" style={{background: "linear-gradient(to bottom right, #29a6aaa6, #3e567713)" ,borderRadius:"15px"}}>
    <Link className="nav-link active" aria-current="page" to="/adminDashboard/questionbank" style={{color:"#f8f8fc",fontWeight:"600",fontSize:"19px"}}>Question Bank</Link>
  </li>
  <li className="nav-item mt-3  d-block p-2" style={{background: "linear-gradient(to bottom right, #29a6aaa6, #3e567713)" ,borderRadius:"15px"}}>
    <Link className="nav-link active" aria-current="page" to="/adminDashboard/reportgeneration" style={{color:"#f8f8fc",fontWeight:"600",fontSize:"19px"}}>Report Generation</Link>
  </li>
  <li className="nav-item mt-3  d-block p-2" style={{background: "linear-gradient(to bottom right, #29a6aaa6, #3e567713)" ,borderRadius:"15px"}}>
    <Link className="nav-link active" aria-current="page" to="/adminDashboard/changepassword" style={{color:"#f8f8fc",fontWeight:"600",fontSize:"19px"}}>Change Password</Link>
  </li>
   <li className="nav-item mt-3  d-block p-2" style={{background: "linear-gradient(to bottom right, #29a6aaa6, #3e567713)" ,borderRadius:"15px"}}>
    <Link className="nav-link active" aria-current="page" to="/adminDashboard/messagereply" style={{color:"#f8f8fc",fontWeight:"600",fontSize:"19px"}}>Message </Link>
  </li>
  <li className="nav-item mt-3  d-block p-2" style={{background: "linear-gradient(to bottom right, #29a6aaa6, #3e567713)" ,borderRadius:"15px"}}>
    <Link className="nav-link active" aria-current="page" onClick={()=>{handlelogout()}} style={{color:"#f8f8fc",fontWeight:"600",fontSize:"19px"}}>Logout</Link>
  </li>
  
</ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';

const MyExams = () => {
    const [data,setData]=useState([]);
    const handlefetch = async()=>{
        const res = await axios.get('http://localhost:5000/api/exams/exams')
        console.log(res.data);
        
        setData(res.data)
    }
    useEffect(()=>{
        handlefetch();
    },[])

  return (
    <div className="container-fluid p-3" style={{height:"100%",backgroundColor:"#f5f7ff", fontFamily:"Poppins, sans-serif"}}>
        <div className="row">
            <div className="col-sm-12   d-flex justify-content-center align-items-center" style={{height:"100px"}}>
                <h2 style={{color:"#333333",fontSize:"2.4rem",fontWeight:"600"}}>My Exams</h2>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12 " style={{width:"90%",margin:"auto",padding:"20px",marginTop:"30px",backgroundColor:"#f9fafb",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.16)"}}>
                <table className='table table-hover table-bordered mt-3 mb-1' style={{width:"100%",margin:"auto",backgroundColor:"#f9fafb",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.16)"}}>
                    <thead>
                        <tr style={{textAlign:"center"}}>
                            <th style={{padding:"20px",backgroundColor:"#29dae7ff"}}>S.no</th>
                            <th style={{padding:"20px",backgroundColor:"#29dae7ff"}}>Exam Name</th>
                            <th style={{padding:"20px",backgroundColor:"#29dae7ff"}}>Date</th>
                            <th style={{padding:"20px",backgroundColor:"#29dae7ff"}}>Duration</th>
                            <th style={{padding:"20px",backgroundColor:"#29dae7ff"}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item,i)=>(
                            <tr style={{textAlign:"center"}} key={item._id}>
                                <td style={{padding:"17px"}}>{i+1}</td>
                                <td style={{padding:"17px"}}>{item.title}</td>
                                <td style={{padding:"17px"}}>{item.date}</td>
                                <td style={{padding:"17px"}}>{item.duration}</td>
                                <td style={{padding:"17px",}}><Link className='btn btn-primary' to={`/userDashboard/getexam/`+item._id}>Start</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default MyExams
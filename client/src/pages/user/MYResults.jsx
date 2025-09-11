import axios from 'axios'
import React, { useEffect, useState } from 'react'

const MYResults = () => {
    const [data, setData] = useState([])
    const userId = localStorage.getItem('userid')
    const handlefetch = async () => {
        const res = await axios.get(`http://localhost:5000/api/exams/examinee-result/${userId}`);
        console.log(res)
        setData(Array.isArray(res.data.message) ? res.data.message : [res.data.message]);

    }
    useEffect(() => {
        handlefetch()
    }, [])
    console.log(data)
    return (
        <div className="container-fluid p-4" style={{height:"100%",backgroundColor:"#f5f7ff", fontFamily:"Poppins, sans-serif"}}>
          <div className="row">
            <div className="col-sm-12   d-flex justify-content-center align-items-center" style={{height:"100px"}}>
                <h2 style={{color:"#333333",fontSize:"2.4rem",fontWeight:"600"}}>Examination Result</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12" style={{width:"90%",margin:"auto",padding:"20px",marginTop:"30px",backgroundColor:"#f9fafb",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.16)"}}>
              <table  className="table table-hover table-bordered mt-3" style={{width:"100%",margin:"auto",backgroundColor:"#f9fafb",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.16)"}}>
                <thead >
                    <tr style={{textAlign:"center"}}>
                        <td style={{padding:"13px",backgroundColor:"#29dae7ff"}}>S.N</td>
                        <td style={{padding:"13px",backgroundColor:"#29dae7ff"}}>Exam name</td>
                        <td style={{padding:"13px",backgroundColor:"#29dae7ff"}}>Your Name</td>
                        <td style={{padding:"13px",backgroundColor:"#29dae7ff"}}>Total Marks</td>
                        <td style={{padding:"13px",backgroundColor:"#29dae7ff"}}>Score</td>
                        <td style={{padding:"13px",backgroundColor:"#29dae7ff"}}>Passing Marks</td>
                        <td style={{padding:"13px",backgroundColor:"#29dae7ff"}}>Status</td>
                        <td style={{padding:"13px",backgroundColor:"#29dae7ff"}}>Date</td>
                    </tr>
                </thead>
                <tbody>

                    {data.map((item, i) => (
                        <tr style={{textAlign:"center"}} key={item._id}>
                            <td>{i + 1}</td>
                            <td>{item.examId?.title}</td>
                            <td>{item.examineeId?.name || item.examineeId}</td>

                            <td>{item.totalMarks}</td>
                            <td>{item.score}</td>
                            <td>{item.passingMarks}</td>
                            <td>{item.status}</td>
                            <td>{new Date(item.createdAt).toLocaleString()}</td>
                        </tr>
                    ))}


                </tbody>
            </table>
            </div>
          </div>
        </div>
    
  )
}

export default MYResults
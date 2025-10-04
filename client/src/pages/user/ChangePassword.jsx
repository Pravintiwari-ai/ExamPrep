import axios from 'axios';
import React from 'react'
import { useState } from 'react';

const ChangePassword = () => {
    const id = localStorage.getItem('userid');
    const [form, setForm] = useState({
        op:'',
        np:'',
        cnp:''
    })
    const handleChange = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const res = await axios.put(`http://localhost:5000/api/examinee/change/${id}`,form)
            alert( res.data.message)
        }
        catch(er){
            console.log(er)
            alert("Password not updated")
        }
    }
  return (
    <div className="container-fluid" style={{height:"100%",backgroundColor:"#f5f7ff", fontFamily:"Poppins, sans-serif"}}>
        <div className="row ">
            <div className="col-sm-12 d-flex justify-content-center align-items-center" style={{height:"100px"}}>
                <h3 style={{color:"#333333",fontSize:"2.4rem",fontWeight:"600"}}>Change Password</h3>
                
                </div>
        </div>
        <div className="row mt-3">
            <div className="col-sm-12">
                <form method='post' onSubmit={handleSubmit}>
                        <table className='table table-hover table-bordered' style={{width:"90%",margin:"auto",backgroundColor:"#f9fafb",boxShadow:"0 2px 8px rgba(0,0,0,0.1)"}}>
                           <tbody>
                            <tr>
                                <td style={{color:"#212529",padding:"15px"}}>Enter Your Current Password</td>
                                <td style={{padding:"15px"}}><input type='text' value={form.op} onChange={handleChange} name='op' className='form-control' required placeholder='Enter current password' style={{boxShadow:"0 1px 3px rgba(0,0,0,0.1)", borderRadius:"8px"}}/></td>
                            </tr>
                            <tr>
                                <td style={{color:"#212529",padding:"15px"}}>Enter Your New Password</td>
                                <td style={{padding:"15px"}}><input type='text' value={form.np} onChange={handleChange} name='np' className='form-control' required placeholder='Enter current password' style={{boxShadow:"0 1px 3px rgba(0,0,0,0.1)", borderRadius:"8px"}}/></td>
                            </tr>
                            <tr>
                                <td style={{color:"#212529",padding:"15px"}}>Enter Your Confirm Password</td>
                                <td style={{padding:"15px"}}><input type='text' value={form.cnp} onChange={handleChange} name='cnp' className='form-control' required placeholder='Enter current password' style={{boxShadow:"0 1px 3px rgba(0,0,0,0.1)", borderRadius:"8px"}}/></td>
                            </tr>
                            <tr>
                                <td colSpan={2} style={{padding:"15px"}}><button type='submit' className='btn ' style={{width:"100%",color:"#212529",backgroundColor:"#007bff",color:"white"}}>update</button></td>
                            </tr>
                            </tbody> 
                        </table>
                        
                    </form>
            </div>
        </div>
    </div>
  )
};
const styles = {
  container: {
  fontFamily: "Poppins, Arial, sans-serif",
  height:"100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor:"#f5f7ff",   
  padding: "40px 20px", 
  position: "relative",
},

  formBox: {
  background: "white",
  padding: "20px 50px",
  borderRadius: "16px",
  boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
  width: "300px",
  maxWidth: "90%",        
  backdropFilter: "blur(12px)",
  textAlign: "center",
  animation: "fadeIn 1.2s ease-in-out",
  margin: "20px",       
},

  title: {
    marginBottom: "15px",
    fontSize: "28px",
    fontWeight: "600",
    color: "#fff",
  },

  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    fontSize: "15px",
    background: "rgba(255,255,255,0.2)",
    color: "#706d6dff",
    transition: "0.3s ease",
  },

  button: {
    width: "100%",
    padding: "12px",
    marginTop: "15px",
    border: "none",
    borderRadius: "8px",
    background: "linear-gradient(135deg, #43e97b, #38f9d7)",
    color: "#fff",
    fontSize: "18px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  },

};

export default ChangePassword;
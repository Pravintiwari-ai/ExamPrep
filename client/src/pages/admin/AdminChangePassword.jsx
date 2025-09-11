import React,{useState} from 'react'
import axios from 'axios'

const AdminChangePassword = () => {
  const id= localStorage.getItem('id')
    const [form,setForm]=useState({
        op:'',
        np:'',
        cnp:''
    })
    const handleChange=(e)=>{
      setForm({...form,[e.target.name]:e.target.value})
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const res = await axios.put(`http://localhost:5000/api/admin/change/${id}`,form)
            alert(res.data.message)
        }
        catch(er){
            console.log(er);  
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
}

export default AdminChangePassword
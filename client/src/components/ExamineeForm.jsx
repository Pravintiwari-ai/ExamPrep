import React from 'react'

const ExamineeForm = () => {
  return (
    <div className="container-fluid" style={{height:"100%",backgroundColor:"#f5f7ff", fontFamily:"Poppins, sans-serif"}}>
        <div className="row ">
            <div className="col-sm-12 d-flex justify-content-center align-items-center" style={{height:"100px"}}>
                <h3 style={{color:"#333333",fontSize:"2.4rem",fontWeight:"600"}}>Examinee</h3>
                
                </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                <form >
                    <table className='table table-bordered' style={{width:"90%",margin:"auto",backgroundColor:"#f9fafb",boxShadow:"0 2px 8px rgba(0,0,0,0.1)"}}>
                        <tbody>
                            <tr>
                                <td style={{color:"#212529",padding:"15px"}}>S.No</td>
                                <td style={{padding:"15px"}}><input type='text'className='form-control' placeholder='S.no' style={{boxShadow:"0 1px 3px rgba(0,0,0,0.1)", borderRadius:"8px"}}/></td>
                            </tr>
                            <tr>
                                <td style={{color:"#212529",padding:"15px"}}>Name</td>
                                <td style={{padding:"15px"}}><input type='text' className='form-control' placeholder='Name'  style={{boxShadow:"0 1px 3px rgba(0,0,0,0.1)", borderRadius:"8px"}}/> </td>
                            </tr>
                            <tr>
                                <td style={{color:"#212529",padding:"15px"}}>Email</td>
                                <td style={{padding:"15px"}}><input type='email'className='form-control' placeholder='Email' style={{boxShadow:"0 1px 3px rgba(0,0,0,0.1)", borderRadius:"8px"}}/></td>
                            </tr>
                            <tr>
                                <td style={{color:"#212529",padding:"15px"}}>Collage</td>
                                <td style={{padding:"15px"}}><input type='text'className='form-control' placeholder='Collage' style={{boxShadow:"0 1px 3px rgba(0,0,0,0.1)", borderRadius:"8px"}}/></td>
                            </tr>
                            <tr>
                                <td style={{color:"#212529",padding:"15px"}}>Qualification</td>
                                <td style={{padding:"15px"}}><input type='text'className='form-control' placeholder='Qualification' style={{boxShadow:"0 1px 3px rgba(0,0,0,0.1)", borderRadius:"8px"}}/></td>
                            </tr>
                            <tr>
                                <td style={{color:"#212529",padding:"15px"}}>Address</td>
                                <td style={{padding:"15px"}}><input type='text'className='form-control' placeholder='Address' style={{boxShadow:"0 1px 3px rgba(0,0,0,0.1)", borderRadius:"8px"}}/></td>
                            </tr>
                            <tr>
                                <td style={{color:"#212529",padding:"15px"}}>Number</td>
                                <td style={{padding:"15px"}}><input type='number'className='form-control' placeholder='Number' style={{boxShadow:"0 1px 3px rgba(0,0,0,0.1)", borderRadius:"8px"}}/></td>
                            </tr>
                            <tr>
                                <td colSpan={2} style={{padding:"15px"}}><button className='btn' style={{width:"100%",color:"#212529",backgroundColor:"#007bff"}}>Add Session</button></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                <table className='table table-bordered' style={{width:"90%",margin:"20px auto",backgroundColor:"#f9fafb",boxShadow:"0 2px 8px rgba(0,0,0,0.1)"}}>
                    <thead>
                        <tr style={{textAlign:"center"}}>
                            <th colSpan={7} style={{color:"#333333",padding:"15px",fontSize:"1.5rem"}}>Examinees</th>
                        </tr>
                        <tr style={{textAlign:"center"}} >
                            <th style={{color:"#212529",padding:"15px"}}>S.No</th>
                            <th style={{color:"#212529",padding:"15px"}}>Name</th>
                            <th style={{color:"#212529",padding:"15px"}}>Email</th>
                            <th style={{color:"#212529",padding:"15px"}}>Collage</th>
                            <th style={{color:"#212529",padding:"15px"}}>Qualification</th>
                            <th style={{color:"#212529",padding:"15px"}}>Address</th>
                            <th style={{color:"#212529",padding:"15px"}}>Number</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    </div>
  )
}

export default ExamineeForm
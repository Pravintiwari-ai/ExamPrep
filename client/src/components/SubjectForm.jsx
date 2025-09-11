import React,{useState,useEffect} from 'react'
import axios from 'axios';

const SubjectForm = () => {
    const [form, setForm] = useState({
        name: "",
        description: "",
      });
    
      const [data, setData] = useState([]);
      const [edit, setEdit] = useState(false);
      const [id, setId] = useState(null);
    
      const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          if (edit) {
            await axios.put(`http://localhost:5000/api/subject/${id}`, form);
            alert("Updated Successfully");
          } else {
            await axios.post("http://localhost:5000/api/subject", form);
            alert("Added Successfully");
          }
          setForm({ name: "", description: "" });
          setEdit(false);
          handleFetch();
        } catch (er) {
          alert("Subject not added");
          console.log(er);
        }
      };
    
      const handleFetch = async () => {
        const res = await axios.get("http://localhost:5000/api/subject");
        setData(res.data);
      };
    
      useEffect(() => {
        handleFetch();
      }, []);
    
      const handleDelete = async (id) => {
        try {
          await axios.delete(`http://localhost:5000/api/subject/${id}`);
          alert("Subject Deleted Successfully");
          handleFetch();
        } catch (er) {
          alert("Sorry Try Again Later");
          console.log(er);
        }
      };
    
      const handleEdit = (item) => {
        setForm({
          name: item.name,
          description: item.description,
        });
        setEdit(true);
        setId(item._id);
      };
  return (
    <div className="container-fluid" style={{height:"100%",backgroundColor:"#f5f7ff", fontFamily:"Poppins, sans-serif"}}>
        <div className="row ">
            <div className="col-sm-12 d-flex justify-content-center align-items-center" style={{height:"100px"}}>
                <h3 style={{color:"#333333",fontSize:"2.4rem",fontWeight:"600"}}>Subject</h3>
                
                </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                <form method='post' onSubmit={handleSubmit} >
                    <table className='table table-bordered' style={{width:"90%",margin:"auto",backgroundColor:"#f9fafb",boxShadow:"0 2px 8px rgba(0,0,0,0.1)"}}>
                        <tbody>
                            <tr>
                                <td style={{color:"#212529",padding:"15px"}}>Enter Subject Name</td>
                                <td style={{padding:"15px"}}><input type='text' name='name' value={form.name}  onChange={handleChange}  className='form-control' placeholder='Subject Name' style={{boxShadow:"0 1px 3px rgba(0,0,0,0.1)", borderRadius:"8px"}}/></td>
                            </tr>
                            <tr>
                                <td style={{color:"#212529", padding:"15px"}}>Enter Description</td>
                                <td style={{padding:"15px"}}><textarea name='description' value={form.description} onChange={handleChange}   className='form-control' placeholder='Enter Description' style={{boxShadow:"0 1px 3px rgba(0,0,0,0.1)", borderRadius:"8px",height:"20px"}}/></td>
                            </tr>
                            
                            <tr>
                                <td colSpan={2} style={{padding:"15px"}}><button type='submit' className='btn' style={{width:"100%",color:"#212529",backgroundColor:"#007bff",}}>{edit?"Update":"Submit"}</button></td>
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
                            <th colSpan={5} style={{color:"#333333",padding:"15px",fontSize:"1.5rem"}}>Subjects</th>
                        </tr>
                        <tr style={{textAlign:"center"}} >
                            <th style={{color:"#212529",padding:"15px"}}>S.No</th>
                            <th style={{color:"#212529",padding:"15px"}}>Name</th>
                            <th style={{color:"#212529",padding:"15px"}}>Description</th>
                            
                            <th style={{color:"#212529",padding:"15px"}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length === 0 ? (
              <tr>
                <td colSpan="5"  >
                  Please Add a subject
                </td>
              </tr>
            ) : (
              data.map((item, i) => (
                <tr style={{textAlign:"center"}} key={item._id}>
                  <td className='p-3'>{i + 1}</td>
                  <td className='p-3' >{item.name}</td>
                  <td className='p-3' >{item.description}</td>
                  <td className='p-3' >
                    <button
                      className="btn btn-danger me-2"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={() => handleEdit(item)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
                </table>
            </div>
        </div>
    </div>
  
  )
}

export default SubjectForm
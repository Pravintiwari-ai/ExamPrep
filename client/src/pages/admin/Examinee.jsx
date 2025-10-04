import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Examinee = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
        name: '',
        email: '',
        college: '',
        course: '',
        branch: '',
        phone: ''
  });
  const [editingId, setEditingId] = useState(null);
  const [editFormVisible, setEditFormVisible] = useState(false);

  useEffect(() => {
    handlefetch();
  }, []);

  const handlefetch = async () => {
    const res = await axios.get('http://localhost:5000/api/examinee');
    setData(res.data);
  };

  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:5000/api/examinee/${id}`);
    if (res) {
      alert("Deleted Successfully");
    } else {
      alert("Try Again Later");
    }
    handlefetch();
  };

  const handleEdit = (item) => {
    setForm({
       name: item.name,
      email: item.email,
      college: item.college,      
      course: item.course,      
      branch: item.branch,
      phone: item.phone,

    });
    setEditingId(item._id);
    setEditFormVisible(true);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // scroll to form
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!editingId) return;
    try {
      console.log(editingId);
      await axios.put(`http://localhost:5000/api/examinee/${editingId}`, form);
      alert('Examinee Updated Successfully');
      setForm({
       name: '',
        email: '',
        college: '',
        course: '',
        branch: '',
        phone: ''

      });
      setEditingId(null);
      setEditFormVisible(false);
      handlefetch();
    } catch (error) {
      console.error("Error updating examinee:", error);
      alert("Error updating examinee");
    }
  };

  return (
    
     <div className='container-fluid' style={{height:"100%",backgroundColor:"#f5f7ff", fontFamily:"Poppins, sans-serif"}}>
       {editFormVisible && (
       <div className="card" style={{ width: "100%",marginTop:"38px" }}>
          <div className="card-body">
            <h3 className="fw-bold" style={{ color: "lightblue", }}>Edit Examinee</h3>
            <form className="border p-2 rounded" onSubmit={handleSubmit}>
              <div className="row mb-2">
                <div className="col-sm-4">
                  <input className="form-control" name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
                </div>
                <div className="col-sm-4">
                  <input className="form-control" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
                </div>
                <div className="col-sm-4">
                  <input className="form-control" name="college" value={form.college} onChange={handleChange} placeholder="Collage" required />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-sm-4">
                  <input className="form-control" name="course" value={form.course} onChange={handleChange} placeholder="Course" />
                </div>
                <div className="col-sm-4">
                  <input className="form-control" name="branch" value={form.branch} onChange={handleChange} placeholder="Branch" />
                </div>
                <div className="col-sm-4">
                  <input className="form-control" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" />
                </div>
              </div>
              <button type="submit" className="btn btn-light text-white mb-1 me-2" style={{ background: "#39064fff " }}>Update</button>
              <button type="button" className=" btn btn-primary btn-edit" onClick={() => setEditFormVisible(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
      <div className="row ">
            <div className="col-sm-12 d-flex justify-content-center align-items-center" style={{height:"100px"}}>
                <h3 style={{color:"#333333",fontSize:"2.4rem",fontWeight:"600"}}>Examinee</h3>
                
                </div>
        </div>
      <div className="row">
        <div className="col-sm-12" >
          <table className="table table-bordered text-center"style={{width:"95%",margin:" 20px auto",backgroundColor:"#f9fafb",boxShadow:"0 2px 8px rgba(0,0,0,0.1)"}}>
                <thead className="thead-light-purple">
                  <tr style={{textAlign:"center"}}>
                    <th className='p-2'>S.No.</th>
                    <th className='p-2'>Name</th>
                    <th className='p-2'>Email</th>
                    <th className='p-2'>College</th>
                    <th className='p-2'>Course</th>
                    <th className='p-2'>Branch</th>
                    <th className='p-2'>Phone</th>
                    <th className='p-2'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, i) => (
                    <tr style={{textAlign:"center"}} key={item._id }>
                      <td className='p-2'>{i + 1}</td>
                      <td className='p-2'>{item.name}</td>
                      <td className='p-2'>{item.email}</td>
                      <td className='p-2'>{item.college}</td>
                      <td className='p-2'>{item.course}</td>
                      <td className='p-2'>{item.branch}</td>
                      <td className='p-2'>{item.phone}</td>
                      <td>
                        <button className=" btn btn-success btn-edit me-2" onClick={() => handleEdit(item)}>Edit</button>
                        <button  className="btn btn-danger btn-delete" onClick={() => handleDelete(item._id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
        </div>
      </div>
  
     </div>
    
  );
};

export default Examinee;
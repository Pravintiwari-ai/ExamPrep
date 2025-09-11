// src/components/ContactA.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Message = () => {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([]);

  const userId = localStorage.getItem('userid');
  const userName = localStorage.getItem('userName') || '';
  const userEmail = localStorage.getItem('userEmail') || '';

  const fetchUserMessages = async () => {
    if (!userId) return;
    try {
      const res = await axios.get(`http://localhost:5000/api/message/user/${userId}`);
      setMessages(res.data.message || []);
    } catch (err) {
      console.error('Error fetching user messages:', err);
    }
  };

  useEffect(() => { fetchUserMessages(); }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!question.trim()) return alert('Enter a message');
    try {
      await axios.post('http://localhost:5000/api/message', { question, examineeId: userId });
      setQuestion('');
      fetchUserMessages();
    } catch (err) {
      console.error('Error sending message:', err);
    }
  };

  const editMyMessage = async (id, currentText) => {
    const newText = prompt('Edit your message:', currentText);
    if (newText === null) return;
    try {
      await axios.put(`http://localhost:5000/api/message/edit/${id}`, {
        question: newText,
        role: 'user',
        userId
      });
      fetchUserMessages();
    } catch (err) {
      console.error('Error editing message:', err);
    }
  };

  const deleteByUser = async (id) => {
    if (!window.confirm('Delete this message?')) return;
    try {
      await axios.put(`http://localhost:5000/api/message/delete/${id}`, {
        role: 'user',
        userId
      });
      fetchUserMessages();
    } catch (err) {
      console.error('Error deleting message:', err);
    }
  };

  return (
    <div className="container-fluid p-3" style={{height:"100%",backgroundColor:"#f5f7ff", fontFamily:"Poppins, sans-serif"}}>
      <div className="row">
        <div className="col-sm-12   d-flex justify-content-center align-items-center" style={{height:"100px"}}>
                <h2 style={{color:"#333333",fontSize:"2.4rem",fontWeight:"600"}}>Message</h2>
            </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
      <form onSubmit={sendMessage}>
        <table className='table table-bordered' style={{width:"90%",margin:"auto",backgroundColor:"#f9fafb",boxShadow:"0 2px 8px rgba(0,0,0,0.1)"}}>
          <tbody>
            <tr>
              <td className='mt-1' style={{color:"#212529",padding:"15px",fontSize:"18px"}}>Send Feedback To Admin</td>
              <td style={{padding:"15px"}}><textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="form-control"
          placeholder="Type your feedback..."
          rows="3"
          style={{boxShadow:"0 1px 3px rgba(0,0,0,0.1)", borderRadius:"8px",height:"25px"}}
        /></td>
            </tr>
            <tr style={{textAlign:"center"}}>
              <td colSpan={2} ><button style={{width:"50%"}} type="submit" className="btn btn-primary">Submit</button></td>
            </tr>
          </tbody>
        </table>
        
      </form>
      </div>
      </div>


      
      <div style={{width:"90%",margin:"auto", padding:"20px",marginTop:"40px",backgroundColor:"#f9fafb",boxShadow:"0 2px 8px rgba(0,0,0,0.1)"}} >
        <h2>Messages</h2>
      <table className="table table-bordered text-center mb-3 mt-3" style={{width:"100%",margin:"auto",backgroundColor:"#f9fafb",boxShadow:"0 2px 8px rgba(0,0,0,0.1)"}}>
        <thead>
          <tr>
            
            <th style={{padding:"13px",backgroundColor:"#29dae7ff"}}>S.No.</th>
            <th style={{padding:"13px",backgroundColor:"#29dae7ff"}}>Feedback</th>
            <th style={{padding:"13px",backgroundColor:"#29dae7ff"}}>Admin Reply</th>
            <th style={{padding:"13px",backgroundColor:"#29dae7ff"}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {messages.length === 0 ? (
            <tr><td colSpan="4">No feedback submitted</td></tr>
          ) : (
            messages.map((msg, idx) => (
              <tr key={msg._id}>
                <td>{idx + 1}</td>
                <td>{msg.question}</td>
                <td>{msg.answer || 'No reply yet'}</td>
                <td>
                  <button className="btn btn-sm btn-warning me-1 " onClick={() => editMyMessage(msg._id, msg.question)}>Edit</button>
                  <button className="btn btn-sm btn-danger" onClick={() => deleteByUser(msg._id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Message;
import React,{useState,useEffect} from 'react'
import axios from 'axios';

const MessageReply = () => {
  const [messages, setMessages] = useState([]);
  const [replyInputs, setReplyInputs] = useState({});

  const fetchAll = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/message/all');
      setMessages(res.data.message || []);
    } catch (err) {
      console.error('Error fetching messages for admin:', err);
    }
  };

  useEffect(() => { fetchAll(); }, []);

  const handleReplyChange = (id, value) => {
    setReplyInputs((prev) => ({ ...prev, [id]: value }));
  };

  const sendReply = async (id) => {
    const answer = (replyInputs[id] || '').trim();
    if (!answer) return alert('Please type a reply.');
    try {
      await axios.put(`http://localhost:5000/api/message/reply/${id}`, {
        answer,
        role: 'admin'
      });
      setReplyInputs((prev) => ({ ...prev, [id]: '' }));
      fetchAll();
    } catch (err) {
      console.error('Error sending reply:', err);
    }
  };

  const editReply = async (id, currentReply) => {
    const newReply = prompt('Edit reply:', currentReply || '');
    if (newReply === null) return;
    try {
      await axios.put(`http://localhost:5000/api/message/reply/${id}`, {
        answer: newReply,
        role: 'admin'
      });
      fetchAll();
    } catch (err) {
      console.error('Error editing reply:', err);
    }
  };

  const deleteByAdmin = async (id) => {
    if (!window.confirm('Delete this reply?')) return;
    try {
      await axios.put(`http://localhost:5000/api/message/delete/${id}`, {
        role: 'admin'
      });
      fetchAll();
    } catch (err) {
      console.error('Error deleting reply:', err);
    }
  };

  return (
    <div className="container-fluid" style={{height:"100%",backgroundColor:"#f5f7ff", fontFamily:"Poppins, sans-serif"}}>
      <div className="row ">
            <div className="col-sm-12 d-flex justify-content-center align-items-center" style={{height:"100px"}}>
                <h3 style={{color:"#333333",fontSize:"2.4rem",fontWeight:"600"}}>Admin - User Message</h3>
                
                </div>
                </div>
      <div className="row">
        <div className="col-sm-12">
          <table className="table table-bordered text-center" style={{width:"90%",margin:"auto",backgroundColor:"#f9fafb",boxShadow:"0 2px 8px rgba(0,0,0,0.1)"}}>
        <thead className='thead-light-purple'>
          <tr>
            <th>S.No.</th>
            <th>Examinee</th>
            <th>Feedback</th>
            <th>Admin Reply</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {messages.length === 0 ? (
            <tr><td colSpan="5">No messages found</td></tr>
          ) : (
            messages.map((msg, idx) => (
              <tr key={msg._id}>
                <td>{idx + 1}</td>
                <td>
                  {msg.examineeId?.name || 'N/A'}
                  <div style={{ fontSize: '0.85em', color: '#555' }}>
                    {msg.examineeId?.email || ''}
                  </div>
                </td>
                <td>{msg.question}</td>
                <td>{msg.answer || 'No reply yet'}</td>
                <td className='p-3' style={{ minWidth: 250 }}>
                  <input
                    type="text"
                    placeholder="Type reply..."
                    value={replyInputs[msg._id] || ''}
                    onChange={(e) => handleReplyChange(msg._id, e.target.value)}
                    className="form-control mb-1"
                  />
                  <div className="d-flex gap-1 d-flex justify-content-center mt-3">
                    <button className="btn btn-primary b btn-sm btn-secondary" onClick={() => sendReply(msg._id)}>Send Reply</button>
                    <button className=" btn btn-success btn-sm btn-edit" onClick={() => editReply(msg._id, msg.answer)}>Edit Reply</button>
                    <button className=" btn btn-danger btn-sm btn-delete" onClick={() => deleteByAdmin(msg._id)}>Delete</button>
                  </div>
                </td> 
              </tr>
            ))
          )}
        </tbody>
      </table>
        </div>
      </div>
      
    </div>
  );
}

export default MessageReply
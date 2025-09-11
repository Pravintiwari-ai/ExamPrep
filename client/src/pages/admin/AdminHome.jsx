import axios from "axios";
import React, { useEffect , useState} from "react";


export default function AdminHome() {
    const [data,setData] = useState([]);
    const handlefetch = async()=>{
        const res = await axios.get('http://localhost:5000/api/admindashboard/') 
        setData(res.data);
    }
    useEffect(()=>{
        handlefetch()
    })
    
  return (
    <div style={styles.container}>
      {/* Cards Section */}
      <div style={styles.cardContainer}>
        <div style={styles.card}>
       <h3 style={styles.cardTitle}>Total Examinee</h3>
          <p style={styles.cardValue}>{data.totalExaminees}</p>
         
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}> Total Question</h3>
          <p style={styles.cardValue}>{data.totalQuestions}</p>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Total Exams </h3>
          <p style={styles.cardValue}>{data.totalExams}</p>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Total Subjects</h3>
          <p style={styles.cardValue}>{data.totalSubject}</p>
        </div>
      </div>

      {/* Content Area */}
      {/* <div style={styles.contentCard}>
        <h3>Dashboard Content</h3>
        <p>
          Details Section
        </p>
      </div> */}
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "30px",
    fontFamily: "Arial, sans-serif",
    backgroundColor:"#f5f7ff",
    color: "#fff",
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    marginBottom: "20px",
  },
  card: {
    borderRadius: "16px",
    padding: "20px",
    textAlign: "center",
    background: "rgba(34, 190, 211, 0.6)",
    backdropFilter: "blur(12px)",
    boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  cardTitle: {
    fontSize: "18px",
    marginBottom: "10px",
  },
  cardValue: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  // contentCard: {
  //   padding: "25px",
  //   borderRadius: "16px",
  //   background: "rgba(91, 45, 183, 0.73)",
  //   backdropFilter: "blur(15px)",
  //   boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
  // },
};
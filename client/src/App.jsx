import './App.css'
import React from 'react'
import {BrowserRouter as Router , Routes ,Route} from 'react-router';
import Login from './pages/Login';
import Registration from './pages/Registration';
import AdminDashboard from './pages/admin/AdminDashboard';
import Examination from './pages/admin/Examination';
import QuestionBank from './pages/admin/QuestionBank';
import Examinee from './pages/admin/Examinee';
import LogOut from './pages/admin/LogOut';
import Session from './pages/admin/Session';
import Subject from './pages/admin/Subject';
import ReportGeneration from './pages/admin/ReportGeneration';
import AdminLogin from './pages/admin/AdminLogin';
import SessionFrom from './components/SessionFrom';
import SubjectForm from './components/SubjectForm';
import ExamineeForm from './components/ExamineeForm';
import UserDashboard from './pages/user/UserDashboard';
import MyExams from './pages/user/MyExams';
import MYResults from './pages/user/MYResults';
import Getexams from './pages/user/Getexams';
import Message from './pages/user/Message';
import UserDashboardHome from './pages/user/UserDashboardHome';
import ChangePassword from './pages/user/ChangePassword';
import AdminChangePassword from './pages/admin/AdminChangePassword';
import MessageReply from './pages/admin/MessageReply';
import AdminHome from './pages/admin/AdminHome';

function App() {

  return (
    <>
    <Router>
      <Routes>
        {/* admin dashboard route start */}
        <Route path='/adminDashboard' element={<AdminDashboard/>}>
        <Route index element={<AdminHome/>}></Route>
        <Route path='session' element={<SessionFrom/>}></Route>
        <Route path='examinee' element={<Examinee/>}></Route>
        <Route path='subject' element={<SubjectForm/>}></Route>
        <Route path='examination' element={<Examination/>}></Route>
        <Route path='questionbank' element={<QuestionBank/>}></Route>
        <Route path='examinee' element={<Examinee/>}></Route>
        <Route path='reportgeneration' element={<ReportGeneration/>}></Route>
        <Route path='changepassword' element={<AdminChangePassword/>}></Route>
        <Route path='messagereply' element={<MessageReply/>}></Route>
        </Route>
        {/* admin dashboard route end */}
        {/* user dashboard route start */}
         <Route path='/userDashboard' element={<UserDashboard/>}>
         <Route index element={<UserDashboardHome/>}></Route>
         <Route path='myexams' element={<MyExams/>}></Route>
         <Route path='myresult' element={<MYResults/>}></Route>
         <Route path='getexam/:id' element={<Getexams/>}></Route>
         <Route path='message' element={<Message/>}></Route>
         <Route path='changepassword' element={<ChangePassword/>}></Route>
         </Route>
        {/* user dashboard route end */}
        
        
        <Route path='/adlogin' element={<AdminLogin/>}></Route>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/registration' element={<Registration/>}></Route>
        
        
        


        
      </Routes>
    </Router>
      
    </>
  )
}

export default App

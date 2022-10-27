import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './assign7/Home';
import Students from './assign7/Students';
import ContactUs from './assign7/Contactus';
import AddStd from './assign7/AddStd';
import EditStd from './assign7/EditStd';
import Link from './assign7/Link';
import { useState } from 'react';



function App() {
  const [users,setUsers] = useState([]);
  return (
    <div>
     <BrowserRouter>
     <Link/>
     <Routes>
      <Route path ="/" element = {<Home/>}/>
      <Route path ="/contactus" element = {<ContactUs/>}/>
      <Route path ='/students' element = {<Students users={users}/>}/>
      <Route path ='/students/addstudents' element={<AddStd users={users} updateUsers={setUsers}/>}/>
      <Route path='/students/editstudent/:index' element={<EditStd users={users} updateUsers={setUsers} />}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
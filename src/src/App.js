import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Students from './Components/Students';
import ContactUs from './Components/Contactus';
import AddStd from './Components/AddStd';
import EditStd from './Components/EditStd';
import Link from './Components/Link';
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
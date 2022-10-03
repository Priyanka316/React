// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './assign4/Home';
import ContactUs from './assign4/ContactUs';
import Students from './assign4/Students';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home/>} ></Route>
          <Route path='/Students' element = {<Students/>} ></Route>
          <Route path='/ContactUs' element = {<ContactUs/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Router, Route} from 'react-router-dom';
import Home from './assign4/Home';
import ContactUs from './assign4/ContactUs';
import Students from './assign4/Students';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Router>
          <Route path='/' element = {<Home/>} ></Route>
          <Route path='/ContactUs' element = {<ContactUs/>} ></Route>
          <Route path='/Students' element = {<Students/>} ></Route>
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;

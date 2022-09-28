import './App.css';
import ClassComponent from './Assignment1/ClassComponent';
import FunctionalComponent from './Assignment1/FunctionalComponent';

function App() {  
  return(
    <div>
    <h1>Styling using Functional and Class Components</h1>
      <div className='boxes'>
        <FunctionalComponent/>
        <ClassComponent/>
      </div>
    </div>
  )
}

export default App;

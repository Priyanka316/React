import './App.css';
import ClassComponent from './reactAssignment/ClassComponent';
import FunctionalComponent from './reactAssignment/FunctionalComponent';

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

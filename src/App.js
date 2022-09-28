import './App.css';
import ClassComponent from './reactAssignment/ClassComponent';
import FunctionalComponent, {SubHeading} from './reactAssignment/FunctionalComponent';

function App() {  
  const heading = getHeading();
  return(
    <div className="App">
      Hi EveryOne 
      <FunctionalComponent SubHeading={firstName} lname={lastName}/>
      <ClassComponent fname={firstName} lname={lastName}/>
    </div>
  )
}

export default App;

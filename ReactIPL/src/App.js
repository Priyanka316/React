import './App.css';
import Cleanup from './components/Cleanup';
import Higher from './components/HOC/Higher';
import Order from './components/HOC/Order';

function App() {
  return (
    <div>
     <h3 style={{textAlign:"center"}}>Interview Preparation Day5</h3>
     <h4>1.High Order Component in react js ?</h4>
     <p>A Higher Order Component (HOC) is an advanced technique in React for reusing component logic.HOCs are common in third party React libraries</p>
     <p>when same component logic writting every time in different component to avoid this creating HOC component.It is function which takes one EnhancedComponent  and return new component</p>
     <p>A higher-order component is a function that takes a component and returns a new component.</p>
     <p>syntax: const EnhancedComponent = higherOrderComponent(WrappedComponent)</p>
     <Higher/>
     <Order/>
     <hr />

     <h4>2.Do you know about SEO ? Is it true that react js supports SEO support</h4>
     <p>React is a JavaScript framework developed to build interactive and modular UIs. SEO is not a design goal of React but content websites built with React can be optimized to achieve better indexing and ranking.</p>
     <p>SEO, search engine optimization, is a big and complex area. </p>
     <p>React is often a very good choice to build an SEO-friendly website as long as you set it up correctly. At Proxify we have many skilled React developers that can help you and make sure that your React site is optimized for both the user and SEO</p>
     <hr />

     <h4>3.clean up in useEffect</h4>
     <p>the useEffect cleanup is a function in the useEffect Hook that allows us to tidy up our code before our component unmounts. When our code runs and reruns for every render, useEffect also cleans up after itself using the cleanup function.The useEffect Hook is built in a way that we can return a function inside it and this return function is where the cleanup happens. The cleanup function prevents memory leaks and removes some unnecessary and unwanted behaviors.</p>
     <p style={{textAlign:"center"}}>CleanUp</p>
     <Cleanup/>
     <hr />

     <h4>4.What is the use of useCallback and useMemo</h4>
     <p> to use useCallback is to prevent a component from re-rendering unless its props have changed.</p>
     <p>useMemo Hook returns a memoized value. Think of memoization as caching a value so that it does not need to be recalculated. The useMemo Hook only runs when one of its dependencies update.</p>
     <p>useCallback and useMemo both expect a function and an array of dependencies. The difference is that useCallback returns its function when the dependencies change while useMemo calls its function and returns the result</p>
     <hr />

     <h4>5.Why do we need keys in react</h4>
     <p>To provide a unique identity to each list element from lists. To remove the warning or error that react throw if the key is not used. It is used to identify which items have changed, updated, or deleted from the Lists. It is useful when a user alters the list</p>
     <p>A “key” is a special string attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted</p>
     <p>To provide a unique identity to each list element from lists.</p>
     <p>To remove the warning or error that react throw if the key is not used.</p>
     <p>It is used to identify which items have changed, updated, or deleted from the Lists.</p>
      <p>It is useful when a user alters the list.</p>
      <p>It helps react to determine which component to be re-rendered.</p>
     <hr />

     <h4>6.Do you know about redux</h4>
     <p>Redux can be used as a data store for any UI layer</p>
     <p>This is the root file which is responsible for the creation of store and rendering our react app component. </p>
     <p>With Redux, the state of your application is kept in a store, and each component can access any state that it needs from the store.</p>
     <p>Redux allows you to manage your app's state in a single place and keep changes in your app more predictable and traceable. </p>
     <p> Redux is used to maintain and update data across your applications for multiple components to share, all while remaining independent of the components.</p>
     </div>
  );
}

export default App;

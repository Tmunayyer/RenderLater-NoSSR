import logo from './logo.svg';
import './App.css';

import BigHeavyComponent from "./BigHeavyComponent/BigHeavyComponent"
import RenderLater from "./RenderLater/RenderLater"

function App() {
   const someListOfComponents = [
      "one",
      "two",
      "three",
      "four"
   ]

  return (
    <div className="App">

      {someListOfComponents.map((data, index) => {
         return <RenderLater>
            <BigHeavyComponent 
               key={index}
               data={data} 
            />
         </RenderLater>
      })}

      <div className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;

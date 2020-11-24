import {useState} from 'react';
import './App.css';
import Img from './Img';

function App() {
  const [schwarzenegger, setSchwarzenegger] = useState("Commando");
  
  return (
    <div className="App">
      <header className="App-header">

        <Img label="Predator"/>

    <div onClick={() => setSchwarzenegger("Predator")}>
      cliccami e deve funzionare</div>

        <Img label={schwarzenegger}/>

          
        </header>
    </div>
  );
}

export default App;

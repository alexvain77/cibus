import {useState} from 'react';
import './App.css';
import Img from './Img';

function App() {
  const [schwarzenegger, setSchwarzenegger] = useState("Commando");
  const [showImg, setShowImg] = useState(false);
  
  const handleClick = () =>
  {
    console.log('cliccato!');
    setShowImg(true);
    setSchwarzenegger('Predator');

  }
  
  return (
    <div className="App">
      <header className="App-header">

        <Img label="Predator"/>

    <div onClick={handleClick}>
      cliccami e deve funzionare</div>

      {showImg && (
        <Img
        label={schwarzenegger}/>
        )}
          
        </header>
    </div>
  );
}

export default App;

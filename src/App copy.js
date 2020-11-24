import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import Img from './Img';


function App() {
  const [currentLabel, setCurrentLabel] = useState ("Pinco Pallino");
  const [showImg, setShowImg] = useState (false);
  
  const handleClick = () => {
    console.log('CLICCATO!');
    setShowImg(true);
    setCurrentLabel("Pluto");
  }
  
  return (
    <div className="App">
      <div className="App-header">
        {showImg && (
      <Img
        label={currentLabel}
      />
      )} 
        <div onClick={handleClick}>
          CLICCAMI
        </div>
 
      </div>
    </div>
  );
}

export default App;

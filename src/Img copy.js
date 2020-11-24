import logo from './logo.svg';
import './App.css';


function Img(props) {
  
  return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <div>{props.label}</div>
        </div>          
  
  );
}

export default Img;

import logo from './logo.svg';

function Img(props) {
  
  return (
    <div className="App">   
 
        
        <img src={logo} className="App-logo" alt="logo" />
        <div>{props.label}</div>

 
     
    </div>
  );
}

export default Img;

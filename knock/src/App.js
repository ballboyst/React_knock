import './App.css';
import {useState} from "react";



const App = () => {
  const [number, setNumber] = useState(0);
  const onClickIncrement =  () => {
    setNumber(number + 1);
  };
  const onClickDecrement = () => {
    setNumber(number - 1);
  };
  return(
    <div class='origin'>
      <p>{number} </p>
      <button onClick={onClickIncrement}>"+"</button>
      <button onClick={onClickDecrement}>"-"</button>
    </div>
  )
};

export default App;

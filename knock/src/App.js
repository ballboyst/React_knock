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
    <div>
      <h2 class="center">React Counter</h2>
      <div class="origin"> 
      <p>{number} </p>
      <button class="button" onClick={onClickIncrement}>"+"</button>
      <button class="button" onClick={onClickDecrement}>"-"</button>
      </div>
    </div>
  )
};

export default App;

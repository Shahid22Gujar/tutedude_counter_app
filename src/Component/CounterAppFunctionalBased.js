import React,{useState} from 'react';

function CounterAppFunctionalBased(){
    const [count,setCount]=useState(0);
    const handleIncrement=()=>{
        setCount(count=>count+1)
        }
    const   handleDecrement=()=>{
          if(count<=0)return;
          setCount(count=>count-1)
        }
    return(
        <div>
         <h1>Counter App (Functional Based)</h1>
        <h3>Counter: {count}</h3>
        <button onClick={handleIncrement}>Increment</button><br>
        </br>
        <button onClick={handleDecrement}>Decrement</button>
     </div>
       

    )
}
export default CounterAppFunctionalBased;
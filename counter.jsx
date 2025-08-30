import React from "react";
import {useState} from "react";
const Counter=()=>{
    const [count,setcount]=useState(0);
   
    function count1(){
        setcount(count+1);  
    }
    function decreasecount()
    {
        if(count>0)
        {
        setcount(count-1);
        }
    }
  
return (
    
    <>
  <div className="container">
      <h2>Count:<span>{count}</span></h2>
      <div className="buttons">
        <button onClick={count1}>Increase Count</button>
        <button onClick={decreasecount}>Decrease Count</button>
      </div>
    </div>  
    
    </>
    
)
}
export default Counter;
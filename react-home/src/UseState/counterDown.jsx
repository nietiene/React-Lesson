import React, {useState, useEffect} from "react";

const CounterDown = () => {
    const [counter, setCounter] = useState(20);
   useEffect(() => {
    const timeOut = setTimeout(() => {
        if (counter === 0) return;
        setCounter(counter - 1);
    },1000);
 
   return () => clearTimeout(timeOut);

   }, [counter]);

   return (
      <p>Count Down: {counter}</p>
   )
}

export default CounterDown;
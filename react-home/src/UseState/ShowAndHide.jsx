import React, {useState} from "react";

const Show = () => {
    const [answer, setAnswer] = useState(false);
  
    return (
        <div>
            <p>What is react</p>
            <button onClick={() => setAnswer(!answer)}>{answer ? "Hide" : "Show"}</button>
            {answer && (
                <p>React is dd</p>
            )}
        </div>
    )
}
export default Show;
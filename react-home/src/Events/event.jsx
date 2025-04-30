import React, { useState } from "react";

const Event = () => {
    const [query, setQuery] = useState("");
    const [result, setResult] = useState("");
   
 const handleKey = (event) => {
    if (event.key === "Enter") {
         setResult(query);
    } else {
        setResult(event.key);
    }
}

    return (
        <div>
            <input type="text" value={query} 
            onChange={(e) => setQuery(e.target.value)} 
            onKeyDown={handleKey} 
            placeholder="Search Something"/><br />
             {result && (
                <p>Your search for {result}</p>
             )}
       </div>
    )
}

export default Event;
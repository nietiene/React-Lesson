import React, {useState} from "react";

const Mouse = () => {
    const [hover, setHover] = useState(false);

    return (
     <div>
        <button onMouseOver={() => setHover(true)}
                onMouseOut={() =>setHover(false)}>
            Hover
        </button>
        {hover && (
            <p>Hello Brother</p>
        )}
   </div>
      )
  
}
export default Mouse;
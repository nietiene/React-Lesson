import { UuseState, useEffect, useState } from "react";

const Oclock = () => {
    const [time, setTime] = useState(new Date().toLocaleDateString());

    useEffect(() => {
        document.title = "Dates || Page";
        const intervsl = setInterval(() => {
            setTime(new Date().toLocaleDateString());
        }, 1000);

        clearInterval(intervsl);
    }, []);

    return (
        <h2>To day is: {time}</h2>
    )
}

export default Oclock;
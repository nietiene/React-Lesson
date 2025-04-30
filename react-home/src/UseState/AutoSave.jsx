import React ,{ useState, useEffect } from "react";

const Auto = () => {
    const [notes, setNotes] = useState("");

    useEffect(() => {
        const savedNote = localStorage.getItem("note");
        if(savedNote) setNotes(savedNote);
    }, []);

    useEffect(() => {
        localStorage.setItem("note", notes);
    }), [notes];


    return (
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)}/>
    )
}

export default Auto;
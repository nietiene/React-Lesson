import axios from "axios";
import { useState } from "react";

const AddNew = ({ fetchUser, onClose }) => {
    const [formData, setFormData ] = useState({id:"", name:"", password:""});

  const PerformAdd  = () => {
    if (!formData.name || !formData.password) {
        alert ("Both name and password required");
        return;
    }

    axios.post(`http://localhost:3000/user/add`, {
        id: formData.id,
        name: formData.name,
        password: formData.password
    })
    .tnen(() => {
        fetchUser();
        setFormData({id:"", name:"", password:""});
        onClose();
    }).catch ((err) => {
        console.error("ERROR", err);
    })
  } 


    return(
        <div>
            <label htmlFor="">Id</label>
            <input type="text" value={formData.id} onChange={(e) => setFormData({...formData, id: e.target.value})}/> <br />
            <label htmlFor="">Name</label>
            <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}/> <br />
            <label htmlFor="">Password</label>
            <input type="text" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}/> <br />
          <button onClick={PerformAdd}>Add</button>
          <button onClick={onClose}>Cancel</button>
        </div>
    );
}


export default AddNew;
import React, { useState } from "react";
import { use } from "react";

const Validation = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
   }

   const validatePassword = (password) => {
       return password.length > 8;
   }

   const handleEmail = (e) => {
      const emailValue = e.target.value;
      setEmail(emailValue);

      if (!validateEmail(email)) {
          setEmailError("Please Enter valid email");
      } else {
        setEmailError("");
      }
   }

   const handlePassword =(e) => {
     const paswordValue = e.target.value;
      setPassword(paswordValue)
     if (!validatePassword(password)) {
        setPasswordError("Please enter valid password");
   } else {
    setPasswordError("");
   }
   }

   const handleSubmit = (e) => {
    e.preventDefault();

    if (!passwordError && !emailError && password && email) {
        alert("You logged in")
    } else {
        alert("please correct some mistakes");
    }
   }

   return (
     <div>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">Email</label>
          <input type="text" onChange={handleEmail} /><br />
          {emailError && (
            <p>{emailError}</p>
          )}
          <label htmlFor="">Password</label>
          <input type="text" onChange={handlePassword} /><br />
          {passwordError && (
            <p>{passwordError}</p>
          )}
          <button>Submit</button>
        </form>
     </div>
   )
}
export default Validation;
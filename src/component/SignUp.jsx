import React from "react";
import { Button, Card } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import {Link} from "react-router-dom";
import {  useNavigate } from "react-router-dom";
import './formStyle.css'
const Form = () => {
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    console.log(e.target[0].value);
     
    createUserWithEmailAndPassword(auth, email, password)
    navigate("/home")
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
  };

  return (
    <div>
      
      <Card sx={{ borderRadius: 2, padding: 6 }}>
      <div className="heading-container">
        
        <h1>Sign Up Form</h1>
      </div>
      <form onSubmit={handleSubmit}>
      <div className="form-field">
        <div className="field">
        <label>Email</label>
        <input 
          placeholder="email"
          required
          type="email"
          name="email"
          
        />
        </div>
        <div className="field">
          <label>Password</label>
        <input
          placeholder="Password"
          name="password"
          type="password"
          
        />
        </div>
        <Button sx={{ marginTop:2, float: "right" }} variant="contained" type="submit">
          Log in
        </Button>
        </div>
      </form>
      <p className="text--center">
            Already have an account <Link to="/">Sign In</Link>
          </p>
      </Card>
      
    </div>
  );
};
export default Form;

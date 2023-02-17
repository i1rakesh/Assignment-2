import React,{useState} from "react";
import {  useNavigate } from "react-router-dom";
import { Button,Card} from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import {Link} from 'react-router-dom'
import './formStyle.css'
const Form = () => {
        const [err, setErr] = useState(false);
        const navigate = useNavigate();
      
        const handleSubmit = async (e) => {
          e.preventDefault();
          const email = e.target[0].value;
          const password = e.target[1].value;
         
        
          try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/home")
          } catch (err) {
            setErr(true);
          }
        };
          
        

  return (
    <div>
      
      <Card sx={{ borderRadius: 2, padding: 6 }}>
        <div className="heading-container">
        <h1>Login Form</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
        <div className="field">
        <label>Email</label>
        <input
          
          placeholder="email"
          required
          label="Enter the Email"
          variant="outlined"
        />
        </div>
        <div className="field">
            <label>Email</label>
        <input
          placeholder="password"
          type="password"
          name="password"
        />
        </div>
        <Button sx={{ marginTop:2, float: "right" }} variant="contained" type="submit">
          Log in
        </Button>
        </div>
      </form>
      <p className="text--center">
            Don't have an account <Link to="/Register">Sign up now</Link>
          </p>
      </Card>
      {err && <span>Something went wrong</span>}
      
    </div>
  );
};
export default Form;

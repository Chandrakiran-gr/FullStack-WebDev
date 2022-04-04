import React, {useState} from "react"
import "./App.css"
import Nav from "./Navbar"
import Axios from "axios"
import Admin_dash from "./Admin_dash"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Navigate
} from "react-router-dom";
import Home from "./Home";
import Footer from "./footer"

function Admin(){
const [dept, setDept]= useState("")
const [userId, setUserId]= useState("")
const [password, setPassword]= useState("")
const [count, setCount]= useState();
const [msg, setMsg]= useState("")
function login(){
 Axios.post('http://localhost:3001/login',{
   dept:dept,
   userId:userId,
   password:password
 }).then((response)=>{
  console.log(response);
 if(response.data.message){
  setMsg(response.data.message)
 }  
   else{
     localStorage.setItem('token', response.user)
    window.location.href = '/Admin_dash'
    
    // console.log(response.data);
  }

   
 })
 
 
 
  // console.log(dept, userId, password);
}


    return <div>
      <Nav />
<div className="studForm">
 <h4 className="admn">Admin Login</h4>
        <label for="department">Choose a department:</label>
<select onChange={(event)=>{setDept(event.target.value)}} className="dept" name="department" id="department">
   <option value="SELECT">SELECT</option>
   <option value="CSE">CSE</option>
  {/* <option value="ISE">ISE</option>
  <option value="ECE">ECE</option>
  <option value="ME">ME</option>
  <option value="EE">EE</option> */}
  <option value="PHY">PHY</option>
  <option value="CHEM">CHEM</option>
  <option value="MATH">MATH</option>
</select>
<label className="lbl">Enter User Id</label>
       <input onChange={(event)=>{setUserId(event.target.value)}} type="text"></input>
       <label className="lbl">Enter Password</label>
       <input onChange={(event)=>{setPassword(event.target.value)}} type="password"></input>

       <button onClick={login} className="btn btn-primary">Login</button>

       <h4>{msg}</h4>
    </div>
    <Footer />
    </div>
    
}

export default Admin
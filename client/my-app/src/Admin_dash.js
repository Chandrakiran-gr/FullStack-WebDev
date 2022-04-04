import React, {useEffect, useState} from "react"
import jwt from "jsonwebtoken"
import Navbar from "./Navbar"
import {useNavigate} from "react-router-dom"
import Axios from "axios"
import Footer from "./footer"

function Admin_dash(){
    const [sem, setSem] = useState("")
    const [subCode, setSubCode] = useState("")
    const [link, setLink] = useState("")
    const [msg, setMsg] = useState("")
    const [datas, setData] = useState([])
    const [id, setId] = useState("")
    const [delMsg, setDelMsg] = useState("")
    const [subName, setSubName] = useState("")
    

    function handleSubmit(){
      Axios.post('http://localhost:3001/add',{
          sem : sem,
          subCode : subCode,
          link: link,
          subName : subName
      }).then(setMsg("success"))
    }
    function handleClick(){
        Axios.get('http://localhost:3001/getalldata').then((response)=>{
        
         setData(response.data)
        console.log(response.data);
         
        
       })
     }


return <div>
 <Navbar />
    <input className="submit"
     onChange={(event)=>{
        setSem(event.target.value)
     }}  placeholder="Enter Semester"></input>
    <input
    onChange={(event)=>{
        setSubCode(event.target.value)}} placeholder="Enter Subject Code"></input>
    <input
    onChange={(event)=>{
        setLink(event.target.value)}} placeholder="Enter Resource Link"></input>
        <input
    onChange={(event)=>{
        setSubName(event.target.value)}} placeholder="Enter Subject Name"></input>
    <button onClick={handleSubmit} >Submit</button>
   <h1>{msg}</h1>

   <button onClick={handleClick} className="btn btn-primary">Search Data</button>
    <br></br>
    <br></br>
    <br></br>
   {datas.map((data)=>{
       return(
        <div key={data.id}>
        <div className="row">
          <div className="col-lg-4">
          <div class="card">
  
        <div class="card-body bg-secondary">
       <h5 class="card-title">Subject Code: {data.course_id}</h5>
       <p class="card-text">Name: {data.subname}</p>
       <a href={data.link} class="btn btn-primary">Open</a>
       <button className="btn btn-danger" value={data.id} onClick={(event)=>{
            setId(event.target.value)
            Axios.post('http://localhost:3001/delete',{
              id:id
            }).then((response)=>{
              const status = response.status
              if(status===200){
                setDelMsg("Success, Refresh page to see changes")
              }else{
                window.alert("error")
              }
            })
            
          }}>Delete</button>
      </div>
     </div>
          </div>
        </div>
        
        </div>  
          
          
         
         
       )
     })}
 <Footer />
</div>

}

export default Admin_dash
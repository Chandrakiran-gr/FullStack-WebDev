import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react"
import './App.css'
import Navbar from "./Navbar"
import Axios from "axios"
import Footer from "./footer"
function Home(){
const [subCode, setSubCode] = useState(["SELECT"])
const [semNum, setSemNum] = useState("select")
const [depart, setDepart] = useState("select")
const [key, setKey] = useState()
const [datas, setData] = useState([])
function handleSelect(){
if(semNum ==="SELECT" || depart==="SELECT"){
  alert("error")
} else if (depart==="CSE"){
    if(semNum==="1" || semNum==="2"){
      setSubCode([{key:0, code:"SELECT"},{ key:1,code:"18MAT11"},{key:2,code:"18PHY12/22"},{key:3, code:"18CIV14/24"},{key:4, code:"18ELE13/23"},{key:5, code:"18EGDL15/25"}, {key:6, code:"18MAT21"}, {key:7,code:"18CHE12/22"}, {key:8,code:"18CPS13/23"}, {key:9, code:"PHY12/22"}, {key:10, code:"PHY12/22"}, {key:11, code:"PHY12/22"}])
    }else if(semNum==="3"){
      setSubCode([{key:"SELECT", code:"SELECT"},{ key:"MAT31",code:"MAT31"},{key:"CS32",code:"CS32"},{key:"CS33", code:"CS33"},{key:"CS34", code:"CS34"},{key:"CS35", code:"CS35"}, {key:"CS36", code:"CS36"}, {key:"CSL37",code:"CSL37"}, {key:"CSL38",code:"CSL38"}, {key:"CPC39", code:"CPC39"}])
    } else if (semNum==="4"){
      setSubCode([{key:"SELECT", code:"SELECT"},{ key:"CS41",code:"CS41"},{key:"CS42",code:"CS42"},{key:"CS43", code:"CS43"},{key:"CS44", code:"CS44"},{key:"CS45", code:"CS45"}, {key:"CS46", code:"CS46"}, {key:"CSL47",code:"CSL47"}, {key:"CSL48",code:"CSL48"},  {key:"KVK39", code:"KVK39"}, {key:"KAK39", code:"KAK39"}])
    }else if (semNum==="5"){
      setSubCode([{key:"SELECT", code:"SELECT"},{ key:"CS51",code:"CS51"},{key:"CS52",code:"CS52"},{key:"CS53", code:"CS53"},{key:"CS54", code:"CS54"},{key:"CS55", code:"CS55"}, {key:"CS56", code:"CS56"}, {key:"CSL57",code:"CSL57"}, {key:"CSL58",code:"CSL58"},  {key:"CIV59", code:"CIV59"}])
    }else if (semNum==="6"){
      setSubCode([{key:"SELECT", code:"SELECT"},{ key:"CS61",code:"CS61"},{key:"CS62",code:"CS62"},{key:"CS63", code:"CS63"},{key:"CS641", code:"CS641"},{key:"CS642", code:"CS642"},{key:"CS643", code:"CS643"},{key:"CS644", code:"CS644"},{key:"CS645", code:"CS645"},{key:"CSL66",code:"CSL66"}, {key:"CSL67",code:"CSL67"},  {key:"CSMP68", code:"CSMP68"}])
    } else if (semNum==="7"){
      setSubCode([{key:"SELECT", code:"SELECT"},{ key:"CS71",code:"CS71"},{key:"CS72",code:"CS72"},{key:"CS731", code:"CS731"},{key:"CS732", code:"CS732"},{key:"CS733", code:"CS733"},{key:"CS734", code:"CS734"},{key:"CS741", code:"CS741"},{key:"CS742", code:"CS742"},{key:"CS743", code:"CS743"},{key:"CS744", code:"CS744"},{key:"CS745", code:"CS645"},{key:"CSL76",code:"CSL76"}, {key:"CSP77",code:"CSP77"}])
    } else if (semNum==="8"){
      setSubCode([{key:"SELECT", code:"SELECT"},{ key:"CS81",code:"CS81"},{key:"CS821",code:"CS821"},{key:"CS822",code:"CS822"},{key:"CS823",code:"CS823"},{key:"CS824",code:"CS824"},{key:"CSP83", code:"CSP83"},{key:"CSS84",code:"CSS84"}])
    }
    else{
      alert("error")
    }

} else {
  alert("error")
}
}
function handleClick(){
   Axios.post('http://localhost:3001/getdata',{
       semNum:semNum,
       key:key
   }).then((response)=>{
     setData(response.data);
   })
  // console.log(semNum, key);
}
return <div classname="box">
     <Navbar />
  <div className="studForm">
  <label for="department">Choose Branch:</label>
<select onChange={(event) =>{
         setDepart(event.target.value)}} className="dept" name="department" id="department">
   <option value="SELECT">SELECT</option>
  <option value="CSE">CSE</option>
  </select> 
<label className="lbl">Enter semester number</label>
  <select onChange={(event) =>{
          setSemNum(event.target.value)
          setSubCode(["Select"])  }} className="dept" name="department" id="department">
   <option value="SELECT">SELECT</option>
  <option value="3">3RD</option>
  <option value="4">4TH</option>
  <option value="5">5TH</option>
  <option value="6">6TH</option>
  <option value="7">7TH</option>
  <option value="8">8TH</option>
  </select> 
  <button onClick={handleSelect} className="btn btn-primary">Get subjects</button>
   <label className="lbl">Enter Subject Code</label>
       <select onChange={(event)=>{setKey(event.target.value)}}  className="dept" name="department" id="department">
         {subCode.map((subCode,key)=>{
           return <option id={subCode.code}  value={subCode.code}>{subCode.code}</option>
         })}
       </select>
 <button onClick={handleClick} className="btn btn-primary">Search Data</button>
     </div>
     <br></br>
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


export default Home;
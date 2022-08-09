//import axios from "axios";
import { Button } from "@mui/material";
import {Paper} from "@mui/material";
import Flight from "../images/Flight.jpg"
import { useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';

function Booking(props){
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [gender,setGender]=useState('')
    const [flightId,setFlightId]=useState('')
    const [status,setStatus]=useState('')
    
    
    console.log(props)
    return(<>
        <div  className='full-Page-Image' style={{top:0,position:'fixed',backgroundImage:`url(${Flight})`
        ,height:"100vh",width:"100vw",backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}>
            
        
       <div>
        <Paper elevation={0} style={{position:'relative',backgroundColor:'transparent',width:500,height:400,left:550}}>
        <div style={{position:"relative",left:130}}>
        <h1>Booking Details</h1>
        </div>
        <div style={{position:'relative',left:150}}>
            <h4>FirstName</h4>
            </div>
            <input style={{position:'relative',width:200,height:20,textAlign:'center',left:140,
            top:-20
            ,borderRadius:'10px',fontSize:'17x'}}
             type='text'placeholder='FirstName'  onChange={(e)=>{setFirstName(e.target.value)}}></input>
             
             <div style={{position:'relative',left:150,top:-40}}>
            <h4>LastName</h4>
            </div>

            <input style={{position:"relative",textAlign:'center',left:140,top:-60,width:200,height:20,
            borderRadius:'10px',fontSize:'17x'
        }} placeholder="LastName"  type='text' onChange={(e)=>{setLastName(e.target.value)}}/>
        <div style={{position:'relative',left:150,top:-35}}>
            <h4>Gender</h4>
        </div>
        <select style={{position:"relative",top:-60,left:195,height:20,width:100}} onChange={(e)=>{setGender(e.target.value)}} >
            
            <option >Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select><br/>

          <div style={{position:'relative',left:150,top:-170}}>
            <h4> Enter Your Flight Id</h4>
            </div>
            <input style={{position:'relative',width:200,height:20,textAlign:'center',left:140,
            top:-190
            ,borderRadius:'10px',fontSize:'17x'}}
             type='text'placeholder='Flight Id'  onChange={(e)=>{setFlightId(e.target.value)}}></input>
                    
        <Button type='submit' style={{position:"relative",backgroundColor:'green',color:'black',top:-110,left:-60,height:30,fontSize:12}} onClick={()=>{
var booking={

    "firstName":firstName,
    "lastName":lastName,
    "gender":gender,
    "flightId":flightId

}
axios.post(`http://localhost:8084/book/addBooking/${flightId}`,booking).then((res)=>{
setStatus(res.data)

})

 }
}>Book Now</Button>
<Link to='/checkin'>
    <Button type='submit' style={{position:"relative",backgroundColor:'green',color:'black',top:-110,left:-20,height:30,fontSize:12}} onClick={()=>{}}>CHECK-IN</Button>
</Link>
<div style={{position:"relative",left:177,top:-80,backgroundColor:'white',width:150,textAlign:'center',borderRadius:'10px',fontWeight:'bolder'}}>
    {status}
</div>
        </Paper>
       </div>
            
        </div>
        
        </>
    )
}

export default Booking
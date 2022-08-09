import { Paper } from "@mui/material"
import { Button } from "@mui/material";
import { useState } from 'react'
import axios from 'axios'
import FlightImage from '../images/AirportFlights.jpg';
import Admin from "./Admin";

function AddFlight(props){
    const[flightName,setFlightName]=useState('')
    const[startFrom,setStartFrom]=useState('')
    const[destination,setDestination]=useState('')
    const[flightDate,setFlightDate]=useState('')
    const[status,setStatus]=useState('')
    return (<>
       
       <div  className='full-Page-Image' style={{top:0,position:'relative',backgroundImage:`url(${FlightImage})`
        ,height:"100vh",width:"100vw",backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}>
        <Paper elevation={0} style={{position:'fixed',backgroundColor:'transparent',width:500,height:400,left:500,top:70}}>
            
        <div style={{position:"relative",left:130,color:'black'}}>
        <h1>Add Flight Details</h1>
        </div>
        <div style={{position:'relative',left:150}}>
            <h4>Flight Name</h4>
            </div>
            <input style={{position:'relative',backgroundColor:'transparent',width:200,height:-20,textAlign:'center',left:140,
            top:-20
            ,borderRadius:'10px',fontSize:'17x'}}
             type='text'placeholder='Enter Flight Name'id="Enter Flight Name" data-testid="Enter Flight Name"  onChange={(e)=>{setFlightName(e.target.value)}}></input>
             
             <div style={{position:'relative',left:150,top:-42}}>
            <h4>Flight StartFrom</h4>
            </div>

            <input style={{position:"relative",backgroundColor:'transparent',textAlign:'center',left:140,top:-60,width:200,height:20,
            borderRadius:'10px',fontSize:'17x'
        }} placeholder="Flight Start From" id="Flight Start From" data-testid="Flight Start From"  type='text'  onChange={(e)=>{setStartFrom(e.target.value)}}/>
        
       

          <div style={{position:'relative',left:150,top:-80}}>
            <h4> Enter Flight Destination</h4>
            </div>
            <input style={{position:'relative',backgroundColor:'transparent',width:200,height:20,textAlign:'center',left:140,
            top:-100
            ,borderRadius:'10px',fontSize:'17x'}}
             type='text'placeholder='Enter Flight Destination' id="Enter Flight Destination" data-testid="Enter Flight Destination" onChange={(e)=>{setDestination(e.target.value)}}></input>

<div style={{position:'relative',left:150,top:-125}}>
            <h4> Enter Flight Date</h4>
            </div>
            <input style={{position:'relative',backgroundColor:'transparent',width:200,height:20,textAlign:'center',left:140,
            top:-145
            ,borderRadius:'10px',fontSize:'17x'}}
             type='Date'placeholder='Enter Flight Date' id="Enter Flight Date" data-testid="Enter Flight Date"  onChange={(e)=>{setFlightDate(e.target.value)}}></input>
                    
        <Button type='submit' style={{position:"relative",backgroundColor:'green',color:'black',top:-110,left:-10,height:30,fontSize:12}}  data-testid="submit" onClick={()=>{
var addFlight={
    "flightName":flightName,
    "startFrom":startFrom,
    "destination":destination,
    "flightDate":flightDate

   

}
axios.post(`http://localhost:8081/flights/addFlight`,addFlight).then((res)=>{

    setStatus(res.data)
})
            
 }
}>Add Flight</Button>

<div style={{position:"relative",left:145,top:-80,backgroundColor:'white',width:190,textAlign:'center',borderRadius:'10px',fontWeight:'bolder'}}>
            {status}
            </div> 
        </Paper>
       </div>
       <Admin/>
        </>
    )
}

export default AddFlight
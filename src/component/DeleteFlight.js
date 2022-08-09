import { Paper } from "@mui/material"
import { Button } from "@mui/material";
import { useState } from 'react'
import axios from 'axios'
import FlightImage from '../images/AirportFlights.jpg';
import Admin from "./Admin";

function DeleteFlight(props){
    const[flightId,setFlightId]=useState('')
    const[status,setStatus]=useState('')
    return (<>
       
       <div  className='full-Page-Image' style={{top:0,position:'relative',backgroundImage:`url(${FlightImage})`
        ,height:"100vh",width:"100vw",backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}>
        <Paper elevation={0} style={{position:'fixed',backgroundColor:'transparent',width:500,height:400,left:500,top:70}}>
            
        <div style={{position:"relative",left:150,color:'black'}}>
        <h1>Delete Flight</h1>
        </div>
        <div style={{position:'relative',left:150}}>
            <h4>Flight Id</h4>
            </div>
            <input style={{position:'relative',backgroundColor:'transparent',width:200,height:20,textAlign:'center',left:140,
            top:-20
            ,borderRadius:'10px',fontSize:'17x'}}
             type='text'placeholder='Enter Flight Id'id="Enter Flight Id" data-testid="Enter Flight Id"  onChange={(e)=>{setFlightId(e.target.value)}}></input>
             
            

           

                    
        <Button type='submit' style={{position:"relative",backgroundColor:'green',color:'black',top:30,left:-20,height:30,fontSize:12}}  data-testid="submit" onClick={()=>{

                    axios.delete(`http://localhost:8081/flights/deleteFlight/${flightId}`).then((res)=>{


                    setStatus(res.data)
                    })
            
 }
}>Delete Flight</Button>

<div style={{position:"relative",left:145,top:40,backgroundColor:'transparent',width:190,textAlign:'center',borderRadius:'10px',fontWeight:'bolder'}}>
            {status}
            </div> 
        </Paper>
       </div>
       <Admin/>
        </>
    )
}

export default DeleteFlight
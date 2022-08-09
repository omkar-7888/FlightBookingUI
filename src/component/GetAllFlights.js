import { Paper } from "@mui/material"
import { Button } from "@mui/material";
import { useState } from 'react'
import axios from 'axios'
import "../SearchTableCss.css";
import {Link, NavLink} from 'react-router-dom';

import FlightImage from '../images/AirportFlights.jpg';
import Admin from "./Admin";

function GetAllFlights(props){
    const[getAllFlights,setGetAllFlights]=useState([]);
const[flightId,setFlightId]=useState('')
    return (<>
       
       <div  className='full-Page-Image' style={{top:0,position:'relative',backgroundImage:`url(${FlightImage})`
        ,height:"100vh",width:"100vw",backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}>
        <Paper elevation={0} style={{position:'fixed',backgroundColor:'transparent',width:500,height:400,left:500,top:70}}>
            
        <div style={{position:"relative",left:130,color:'black'}}>
        <h1>Show All Flights</h1>
        <Button type='submit' style={{position:"relative",backgroundColor:'green',color:'black',top:-55,left:260,height:30,fontSize:12,fontWeight:'bold'}}  data-testid="submit" onClick={()=>{ 

axios.get(`http://localhost:8081/flights/getAllFlights`).then((res)=>{
setGetAllFlights(res.data)
console.log(res)
})

}
    }>Show  Flights</Button> 
        </div>
       <div style={{position:'relative',width:600}}>
       <table style={{position:'relative',width:600}}>
        <thead>
            <tr>
                <th>Sr No</th>
                <th>Flight Id</th>
                <th>Start From</th>
                <th>Destination</th>
                <th>Flight Name</th>
                <th>Flight Date</th>
                {/* <th>Delete</th> */}
                
            </tr>
        </thead>
        <tbody>
            {getAllFlights.map((x,index)=>(
                <tr key={x.id}>
                    <th scope="row">{index+1}</th>
                    <td>{x.id}</td>
                    <td>{x.startFrom}</td>
                    <td>{x.destination}</td>
                    <td>{x.flightName}</td>
                    <td>{x.flightDate}</td>
                    {/* <td>
                        
                        <Button className="btn-btn-danger" onClick={(e)=>{
                            setFlightId(e.target.value)
                                var d ={
                                    "flightId":flightId
                                }
                                console.log(flightId)
                            axios.delete(`http://localhost:8081/flights/deleteFlight/${flightId}`).then((res)=>{


                        })
                        }}>Delete
                        </Button>
                    </td>
                     */}
                </tr>
            ))}
        </tbody>
       </table>
       </div>

         
            
                    
          



       

        </Paper>
       
       </div>
       <Admin/>
        </>
    )
}

export default GetAllFlights
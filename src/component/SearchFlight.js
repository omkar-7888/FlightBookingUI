import { Button, Paper } from "@mui/material";
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import Flight from "../images/Plane.mp4"
import { useEffect, useState } from "react";
import axios from 'axios'
import "../SearchTableCss.css";
import {Link} from 'react-router-dom';

function SearchFlight(props){
    const[from,setFrom] =useState('');
    const[to,setTo]=useState('');
    const[searchflight,setSearchFlight]=useState([]);
   const[flightId,setFlightId]=useState('');
   
    return(<>
        
        {/* <div className='full-page-image' style={{top:0,position:'fixed',backgroundImage:`url(${Flight})`,backgroundPosition:'center',backgroundSize:'cover'
        ,backgroundRepeat:'no-repeat',width:'100vw',height:'100vh'}}> */}
        <div style={{top:0,position:'fixed'}}>
           
        <video autoPlay loop muted>
                <source src={Flight} type="video/mp4"></source>
              </video>
    <Paper elevation={0} style={{position:"relative",backgroundColor:'transparent',top:-1000,left:500,width:550,color:'black'}}>
    
        <h1 style={{position:"relative",top:-30,left:20,margin:"auto",lineHeight:3.5,width:290,height:0}}></h1>
     
        
        <div>
            <h4 style={{position:"relative",top:22,left:60,top:43}}>From</h4>
        </div>
        <input style={{position:"relative",textAlign:'center',left:40,top:25,width:220,height:70,borderRadius:'10px',fontSize:'17x'
        }} placeholder="Enter City Name" id="Enter City Name" data-testid="Enter City Name" type='text' onChange={(e)=>{setFrom(e.target.value)}}/>

        <h1 style={{position:"relative",top:-30,left:70,margin:"auto",lineHeight:3.5,width:290,height:0}}></h1>
        <div>
            <h4 style={{position:"relative",top:22,left:310,top:-100,fontSize:'16x'}}>To</h4>
        </div>
        <input style={{position:"relative", textAlign:'center',width:220,height:70,left:290,top:-116,borderRadius:'10px',fontSize:'16x'
        }} placeholder="Enter City Name To" id="Enter City Name To" data-testid="Enter City Name To" type='text' onChange={(e)=>{setTo(e.target.value)}} ></input>

        <Button style={{position:"relative",backgroundColor:"orangered",color:'white',fontSize:'16px',borderRadius:'23px',left:-35,top:10}} variant='contained' data-testid="submit" onClick={()=>{
           
            
                axios.get(`http://localhost:8085/search/getAll/${from}/${to}`).then((res)=>{
                    setSearchFlight(res.data)
                    
                })

               
        }}>SEARCH FLIGHTS </Button>
       
           <div>
           <SwapHorizIcon style={{position:"relative",top:-175,left:260,fontSize:'35px',backgroundColor:'white'
           ,boxShadow:'1px 2px 2px #000000 ',borderRadius:'5px',color:'#03A9F4'}}/>

            </div> 
           
    </Paper>
    <div className="app-container" style={{position:'relative',left:290,top:-1000,backgroundColor:'transparent'}}>
    <table>
        <thead>
            <tr>
                <th>Flight Id</th>
                <th>FlightName</th>
                <th>From</th>
                <th>To</th>
                <th>Date</th>
                <th>Booking</th>
            </tr>
        </thead>
        <tbody>
            {searchflight.map((x) =>(
                <tr key={x.id}>
                    <td style={{}}>{x.id}</td>
                    <td>{x.flightName}</td>
                    <td>{x.startFrom}</td>
                    <td>{x.destination}</td>    
                    <td>{x.flightDate}</td>
                    <td>
                    <Link to="/login">
                       <Button style={{position:"relative",left:30,backgroundColor:"#F57F17",color:"white",fontSize:"13px"
                       ,width:80,height:26,borderRadius:"5px"}} variant="contained" onClick={()=>{
                        <div>
                            <booking data={x.id}/>
                        </div>
                       }}>BOOK</Button></Link>

                    </td>
                </tr>
            ))}
            
        
           
        </tbody>
    </table></div>
  
    </div>
    </>)
}
export default SearchFlight

//href="https://www.goibibo.com/flights/air-BOM-PNQ-20220814--1-0-0-E-D?exp=n"
import { Button, Paper } from "@mui/material";
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import Air from "../images/Air.mp4"
import { useEffect, useState } from "react";
import axios from 'axios'
import "../SearchTableCss.css";
import {Link} from 'react-router-dom';
import { fontWeight } from "@mui/system";

function Checkin(props){
    const[bookingId,setBookingId] =useState('');
    const[status,setStatus]=useState('');
    const[msg,setMsg]=useState('')
    return(<>
       
        <div style={{top:0,position:'fixed',backgroundPosition:"center",backgroundSize:'cover',backgroundRepeat:'no-repeat',width:'100vw',height:'100vh'}}>
           
        <video autoPlay loop muted style={{position:'relative', backgroundSize:'cover',backgroundPosition:'center',width:1540,height:1320,left:0,top:-310}}>
                <source src={Air} type="video/mp4"></source>
              </video>
    <Paper elevation={0} style={{position:"relative",backgroundColor:'transparent',top:-1200,left:660,width:550,color:'black'}}>
    
        <h1 style={{position:"relative",top:-30,left:20,margin:"auto",lineHeight:3.5,width:290,height:0}}></h1>
     
        
        <div>
            <h4 style={{position:"relative",top:22,left:60,top:43}}>Booking Id</h4>
        </div>
        <input style={{position:"relative",textAlign:'center',left:40,top:25,width:220,height:30,borderRadius:'10px',fontSize:'15px',fontWeight:"bold",backgroundColor:'transparent'
        }} placeholder="Enter Booking Id"  type='text' onChange={(e)=>{setBookingId(e.target.value)}}/>

        <h1 style={{position:"relative",top:-30,left:70,margin:"auto",lineHeight:3.5,width:290,height:0}}></h1>
      

        <Button style={{position:"relative",backgroundColor:"black",color:'white',fontSize:'11px',borderRadius:'23px',left:105,top:40,width:100,height:30}} variant='contained' onClick={()=>{
           
           
        
          
            var booking={

                
                "bookingId":bookingId
            }
                axios.post(`http://localhost:8014/checkin/add/${bookingId}`,booking).then((res)=>{
                    
             
             
               setStatus(res.data)
               setMsg("HAPPY JOURNY...")
             
                })  
                        
               
        }}>CHECK IN </Button>
       <Link to='/'>
        <Button style={{position:'relative',left:659,top:-200,backgroundColor:'black',color:'white',fontWeight:'bold'}} onClick={()=>{}}>LOGOUT</Button>
       </Link>
        <div style={{position:"relative",left:-77,top:80,backgroundColor:'transparent',width:480,textAlign:'center',borderRadius:'10px',fontWeight:'bolder'}}>
            {status}
            </div>  
            <div  style={{position:"relative",backgroundColor:'transparent',left:-147,top:80,color:"red",fontFamily:"fantasy" ,width:600,fontSize:'100px',textAlign:'center',borderRadius:'10px',fontWeight:'bolder'}}>
                {msg}
                </div> 
    </Paper>
   
                      
                  
            
        
           
        
  
    </div>
    </>)
}
export default Checkin

//href="https://www.goibibo.com/flights/air-BOM-PNQ-20220814--1-0-0-E-D?exp=n"
import { AppBar, Toolbar, Avatar, Button, Paper } from "@mui/material";
import oneJet from '../images/OneJet_logo.svg.png';
import FlightImage from '../images/AirportFlights.jpg';
import {Link} from 'react-router-dom';
import AddFlight from "./AddFlight";
import axios from 'axios'

function Admin(){
    return(<>
           
           <div  className='full-Page-Image' style={{top:0,position:'relative',backgroundImage:`url(${FlightImage})`
        ,height:"100vh",width:"100vw",backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}>

    <AppBar style={{backgroundColor:'black'}}>
      <Toolbar>
        <Avatar style={{position:"relative",backgroundColor:'orange',left:-20}}>
     
         
        </Avatar>
          
       
         <img src={oneJet} alt='Flight Logo'  style={{width:250,height:35,position:'relative',left:20,top:7}}/> 
         
         <Link to='/addFlight'>
         <Button style={{position:'relative',left:100,backgroundColor:'#03A9F4',color:'white',fontWeight:'bold'}} onClick={()=>{}}>ADD FLIGHT</Button></Link>

         <Link to='/UpdateFlight'>
         <Button style={{position:'relative',left:120,backgroundColor:'#03A9F4',color:'white',fontWeight:'bold'}} onClick={()=>{}}>UPDATE FLIGHT</Button></Link>

         <Link to='/DeleteFlight'>
         <Button style={{position:'relative',left:150,backgroundColor:'#03A9F4',color:'white',fontWeight:'bold'}} onClick={()=>{}}>DELETE FLIGHT</Button></Link>

         <Link to='/GetAllFlights'>
         <Button style={{position:'relative',left:180,backgroundColor:'#03A9F4',color:'white',fontWeight:'bold'}} onClick={()=>{
             axios.get(`http://localhost:8081/flights/getAllFlights`).then((res)=>{
                console.log(res.data)

             })
         }}>ALL FLIGHTS</Button></Link>

         

         <Link to='/'>
         <Button style={{position:'relative',left:599,backgroundColor:'#03A9F4',color:'white',fontWeight:'bold'}} onClick={()=>{}}>LOGOUT</Button></Link>
          

        
        
      </Toolbar>
     
    </AppBar> 
   
    </div>
    </>)
}

export default Admin;
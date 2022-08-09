import { useState } from "react"
import axios from 'axios'
import { Button, Card } from "@mui/material"
import { Paper } from "@mui/material"
import { Link } from "react-router-dom"
import bgimage from '../images/Flight.jpg'


function Register(){
    
    const [firstName,setfirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [cnfmPsw,setCnfmPsw]=useState('')
    const [dOF,setDOF]=useState('')
    const [status,setStatus]=useState('')
    const [mailerr,setMailerr]=useState('')
    const [uNameerr,setUnameerr]=useState('')
    const [pswderr,setPswderr]=useState('')
    const [mobileerr,setMobileerr]=useState('')
    const [utypeerr,setUtypeerr]=useState('')
    return(
    <div style={{position:"fixed",backgroundImage:`url(${bgimage})`,backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat',width:'100vw',height:'100vh'}}>
    {/* <div style={{backgroundColor:"teal",height:800}}> */}
    <div  style={{position:"relative",top:20,left:18,margin:"auto",lineHeight:3.5,width:290 }}>
        <Card elevation={0} style={{position:'relative',backgroundColor:'transparent' }}>
    <div style={{position:"relative",top:-5,left:22}}>
        <h1 > User Registration </h1>
        </div>
        <div style={{position:"relative",left:26}}>
        <input style={{position:"relative",width:230,height:30,top:-15,borderRadius:'10px',fontSize:'17px',boxShadow:'1px 2px 2px'}} type='text' data-testid="firstName" placeholder="firstName" id="firstName"  onChange={(e)=>{
            setfirstName(e.target.value)
        }}/> <br/>
        <span style={{color:'red'}}>{mailerr}</span>
        </div>

        <div style={{position:"relative",left:26}}>
        <input style={{position:"relative",width:230,height:30,top:-15,borderRadius:'10px',fontSize:'17px',boxShadow:'1px 2px 2px'}} type='text' placeholder="lastName" id="lastName" data-testid="lastName" onChange={(e)=>{

            setLastName(e.target.value)
            setMobileerr('')
          
        }}/> <br/>
        <span style={{color:'red'}}>{mobileerr}</span>
        </div>
       

        <div style={{position:"relative",left:26}}>
        <input style={{position:"relative",width:230,height:30,top:-15,borderRadius:'10px',fontSize:'17px',boxShadow:'1px 2px 2px'}} type='email' placeholder="email" id="email" data-testid="email" onChange={(e)=>{
           let mail=e.target.value
           var exp=String(mail).toLowerCase().match(/\S+@\S+\.\S+/)
           if(exp){
          setEmail(e.target.value)
          setMailerr('')
           }
           else{
               setMailerr("email id is not correct")
           }
        }}/> <br/>
        <span style={{color:'red'}}>{uNameerr}</span>
        </div>

     
        <div style={{position:"relative",left:26}}>
        <input style={{position:"relative",width:230,height:30,top:-15,borderRadius:'10px',fontSize:'17px',boxShadow:'1px 2px 2px'}} type='password' placeholder="Password" id="Password" data-testid="Password" onChange={(e)=>{
            var ps=e.target.value
            if(ps.length>6){
            setPassword(e.target.value)
            setPswderr('')
            }
            else{
                setPswderr("password must contain 6 characters")
            }
        }}/> <br/>
        <span style={{color:'red'}}>{pswderr}</span>
        </div>
        <div style={{position:"relative",left:26}}>
        <input style={{position:"relative",width:230,height:30,top:-15,borderRadius:'10px',fontSize:'17px',boxShadow:'1px 2px 2px'}} type='password' placeholder="confirmPassword" id="confirmPassword" data-testid="confirmPassword" onChange={(e)=>{
            var ps=e.target.value
            if(password===ps){
            setCnfmPsw(e.target.value)
            setPswderr('')
            }
            else{
                setPswderr("password must be same")
            }
        }}/> <br/>
        <span style={{color:'red'}}>{pswderr}</span>
        </div>
        <div style={{position:"relative",left:26}}>
        <input style={{position:"relative",width:230,height:30,top:-15,borderRadius:'10px',fontSize:'17px',boxShadow:'1px 2px 2px'}} type='date' placeholder="DateOfBirth" id="DateOfBirth" data-testid="DateOfBirth" onChange={(e)=>{
           setDOF(e.target.value)
        }}/> <br/>
        <span style={{color:'red'}}>{pswderr}</span>
        </div>


      <Button style={{position:"relative",left:65,top:-20,width:160,height:35}} variant="contained" data-testid="submit" onClick={()=>{
            var user={
               "firstName":firstName,
               "lastName":lastName,
               "email":email,
               "password":password,
               "confirmPassword":cnfmPsw,
               "dateOfBirth":dOF
            }
            
              
              
                axios.post('http://localhost:8088/user/addUser',user)
                .then((res)=>{
                    
                    console.log(res)
                })
               
              setStatus("Registration Successfull")
             
              
         
          
}}>


    REGISTER 
</Button>
<Link to="/login"><Button style={{position:"relative",left:65,top:-1,width:160,height:35}} variant="contained" onClick={()=>{

}}>BACK TO LOGIN </Button></Link> 

 <div style={{position:"relative",left:61,top:-153}} data-testid="status">
    {status}
    </div> 
        </Card> 
        </div>
        {/* </div>  */}
    </div>)
}
export default Register;
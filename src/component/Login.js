import Paper from '@mui/material/Paper'
import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { Button, Card } from '@mui/material'
import { Link } from 'react-router-dom'
import bgimage from '../images/Flight.jpg'
import bcrypt from 'bcryptjs'
function Login(props) {

    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const [status,setStatus]=useState('')
    const [mailerr,setMailerr]=useState('')
    const [pswderr,setPswderr]=useState('')
    const navigate=useNavigate()
    return (
        <div  style={{position:"fixed",backgroundImage:`url(${bgimage})`,backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat',width:'100vw',height:'100vh'}}>
    {/* <div style={{backgroundColor:"teal",height:700}}> */}
    <div  style={{position:"relative",top:130,left:18,margin:"auto",lineHeight:3.5,width:290}}>
        <Card  elevation={0} style={{position:'relative',backgroundColor:'transparent'}}>
    <div style={{position:"relative",top:10,left:90 }}>
        <h1> Login</h1>
        </div>
   
 

        <div style={{position:"relative",left:26}}>
        <input style={{position:"relative",width:230,height:30,top:-15,borderRadius:'10px',fontSize:'17px',boxShadow:'1px 2px 2px'}} type='text' id="Email id" data-testid= "Email id" placeholder="Email id"  onChange={(e)=>{
            let mail=e.target.value
            var exp=String(mail).toLowerCase().match(/\S+@\S+\.\S+/)
            if(exp){
            setUserName(e.target.value)
            setMailerr('')
            }
            else{
                setMailerr('email id is not correct')
            }
        }}/> <br/>
        <span style={{color:'red'}}>{mailerr}</span>
        </div>
        <div style={{position:"relative",left:26}}>
        <input style={{position:"relative",width:230,height:30,top:-15,borderRadius:'10px',fontSize:'17px',boxShadow:'1px 2px 2px'}} 
        type='password' id="Password" data-testid="Password" placeholder="Password"  onChange={(e)=>{
           let psw=e.target.value
           if(psw.length>=6){
            setPassword(e.target.value)
            setPswderr('')
           }
           else{
               setPswderr("password must contain min 6 characters")
           }
        }}/> <br/>
        <span style={{color:'red'}}>{pswderr}</span>
        </div>
        <Button style={{position:"relative",left:66,top:-15,width:160,height:35}} variant="contained" data-testid="submit" onClick={()=>{

       axios.get(`http://localhost:8088/user/findUser/${userName}`)
            .then((res)=>{
                var data=res.data
                var stat=bcrypt.compare(password,data.password);
                stat.then(value=>{
                    if(value===true){
                        if(data.role==="user")
                        {
                                if(data.email===userName && data.password===password)
                                {
                                  console.log("welcome")
                                  navigate("/booking")
                                }
                                else
                                {
                                    console.log("no")
                                }
                        }
                        else if(data.role==="admin")
                        {
                                if(data.email===userName && data.password===password)
                                {
                                         navigate("/admin")
                                }
                                else
                                {
                                    setStatus("Invalid Details")
                                }
                        }
                        else
                        {
                            setStatus("please enter correct details")
                        }
                    }
                }).catch(err=>console.log("check Credentials"))
                {

                }
              
            })

        }}>LOGIN</Button>

         <div style={{position:"relative",left:73,top:-25}}>
            <h5> Don't have an account?</h5></div>
        <div style={{position:"relative",left:75,top:-15,width:190,height:35}}>
            <Link to="/register">
        <Button style={{position:"relative",left:-10,top:-40,width:160,height:35}} variant="contained" onClick={()=>{

        }}>

        
            Register Here
        </Button></Link>
        </div>
        <div style={{position:"relative",left:65,top:-190}} data-testid="status">
        {status}
    </div>  
    
 
 
    </Card> </div>
    </div>
    // </div>
    )
}

export default Login;
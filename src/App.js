import logo from './logo.svg';
import './App.css';
import oneJet from './images/OneJet_logo.svg.png';
import {AppBar,Avatar,Button,Paper,Toolbar,Typography} from '@mui/material'
import SearchFlight from './component/SearchFlight';
import { NavLink } from 'react-router-dom';


function App() {
  return (<>
    <AppBar style={{backgroundColor:'black'}}>
      <Toolbar>
        <Avatar style={{position:"relative",backgroundColor:'orange',left:-20}}>
        
         
         
        </Avatar>
          
       
         <img src={oneJet} alt='Flight Logo'  style={{width:250,height:35,position:'relative',left:20,top:7}}/> 
         
          
          

        <div style={{position:"relative",left:850}}>

        </div>
        
      </Toolbar>
     
    </AppBar>
    
    <Paper>
      <SearchFlight/>
      
    </Paper>
    </>
    
  );
}

export default App;

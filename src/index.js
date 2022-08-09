import React from 'react';
import ReactDOM from 'react-dom/client';
import {Routes,Route} from  'react-router-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Booking from './component/booking';
import SearchFlight from './component/SearchFlight';
import SearchFlightt from './component/CheckIn';
import AddFlight from './component/AddFlight';
import Admin from './component/Admin';
import Login from './component/Login';
import Register from './component/Register';
import DeleteFlight from './component/DeleteFlight';
import UpdateFlight from './component/UpdateFlight';
import GetAllFlights from './component/GetAllFlights';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/" element={<App/>}>
      <Route path="/" element={<SearchFlight/>}/>
      </Route>
      <Route path='/booking' element={<Booking/>}/>
      <Route path='/checkin' element={<SearchFlightt/>}/>

      <Route path='/admin' element={<Admin/>}/>
      <Route path='/addFlight' element={<AddFlight/>}/>
      <Route path='/UpdateFlight' element={<UpdateFlight/>}/>
      <Route path='/DeleteFlight' element={<DeleteFlight/>}/>
      <Route path='/GetAllFlights' element={<GetAllFlights/>}/>



   
      
      

    
    
     

    </Routes>
  </Router>

  
  // <React.StrictMode>
  //   <App />
  //   <SearchFlight/>
  //</React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

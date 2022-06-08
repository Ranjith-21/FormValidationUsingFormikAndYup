import './App.css';
import Signup from './Components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Batch from './Batch';
import Employee from './Employee';
import { useEffect } from 'react';

function App() {
  const data=[
        {
            username:'Ranjith',
            Password:'reddy@123',
            role:'Admin'
        },
        {
            username:'Hemanth',
            Password:'hema@123',
            role:'Employee'
        }
    ]

    useEffect(()=>{
        localStorage.setItem("data",JSON.stringify(data))
    },[])


  return (
    <BrowserRouter>
     {/* <Signup/> */}
     <Routes>
       <Route path='/' element={<Signup/>}/>
                   <Route path='/Batch' element={<Batch/>} />
                    <Route path='/Employee' element={<Employee/>} />
                   </Routes>
    </BrowserRouter>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import {Register} from './Routings/Register'
import { Home } from './Routings/Home';
import { About } from './Routings/About';

import { Kids } from './Routings/Kids';
import { Women } from './Routings/Women';
import { Men } from './Routings/Men';
import {Order} from './Routings/Order'
import { Navbar } from './Routings/Navbar';
import { Footer } from './Footer';














function App() {
  return (
    <div className="App">
      {/* <h1>React JS</h1> */}




    

      <Navbar/>

      <Routes>
      


        {/* <Route path='/' element={<Register />}  ></Route> */}

        <Route path='*' element= {<h2>Page Not Found</h2>}></Route>

        <Route path='/home' element={<Home />}></Route>

        <Route path='/about' element={<About />}></Route>

        <Route path='/kids' element={<Kids />}></Route>

        <Route path='/women' element={<Women />}></Route>

        <Route path='/men' element={<Men />}></Route>

        <Route path='/1' element={<Order/>}></Route> 

     </Routes>
     <Footer/>

    </div>
  );
}

export default App;

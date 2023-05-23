
import './App.css';
import Header from './Components/Header/Index3';
// import Footer from './Components/Footer';
import DetailsList from './Components/DetailsList/Index1';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
   <Header />
   <Routes>
   <Route path='/' element={<DetailsList />}/> 
 
    
   </Routes> 
   {/* <Footer /> */}
    </div>
    </BrowserRouter>
  );
}

export default App;

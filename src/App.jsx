import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Red from './components/Red';
import Blue from './components/Blue';
import Home from './components/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <div id="container">
  
      <div id="navbar">
       <nav>
       <link to="/">Home</link>
       <link to="/red">Red</link>
       <link to="/blue">Blue</link>" 
        </nav>
        </div>
       
        
      <div id="main-section"> 
      <Routes>
      <Routes>
     <Route path="/blue" element={<h1>Blue</h1>} />
     <Route path="/red" element={<h1>Red</h1>} />
   </Routes>
  </Routes>
  </div>
    </div>
      </div>
 
      
    </>
  )
}

export default App

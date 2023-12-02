import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Form from './Form';
import Posts from './Posts';
function App() {

  return (
    <>
     <Router>
      <Navigation/>
      <Routes>
      <Route path ="/" element={<Home/>} />
      <Route path ="/form" element={<Form/>} />
      <Route path ="/posts" element={<Posts/>} />
      </Routes>
     </Router>
       
    </>
  )
}

export default App

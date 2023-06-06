import React from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import BusketPage from "./components/BusketPage/BusketPage.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<MainPage />}/>
        <Route path='/busket' element={<BusketPage />}/>
      </Routes>
    </>
  )
}

export default App

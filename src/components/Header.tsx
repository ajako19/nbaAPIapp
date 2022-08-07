import "./Header.css"
import axios from "axios";
import { useEffect, useState } from "react";
import MainPage from "./MainPage";



export default function Header() { 
  const [inputData, setInputData] = useState("")
  return (
    <div className='header'>
      <div className='header-wrap'>
        <input onChange={(e) => {
          setInputData(e.target.value);
        }} className="header-input" placeholder="Enter Player"></input>
      </div>
      <MainPage inputData={inputData} key={inputData}/>
    </div>
  )
}

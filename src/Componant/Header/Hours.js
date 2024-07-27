import React from 'react'
import { useState,useEffect } from "react";
const Hours = () => {
    const [time, setTime] = useState("");

    useEffect(()=> {

      setInterval(() => {
        const hours = new Date();
        const interval = setTime(hours.toLocaleTimeString())
        console.log(time);
        return () => clearInterval(interval);
      },1000);
    },[time])
  return (
    <span style={{color:"black" }} >{time}</span>
  )
}

export default Hours
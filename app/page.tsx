
"use client";

import { use, useState } from "react";
import axios from "axios";
import { TbBasketSearch } from "react-icons/tb";

const url = `https://api.openweathermap.org/data/2.5/weather?q=dubai&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`


export default function Home() {

  const [city ,setCity] = useState('')
  const [weather , setWeather] = useState({})
  const [loading , setLoading] = useState (false)

  const fetchWeather = (e) => {
    e.preventDefault()
    setLoading(true)
    axios.get(url).then((response)=>{
      setWeather(response.data)
      console.log(response.data)
    })
    setCity('')
    setLoading(false)
  }
  return (
    <div>
    <img src="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="object-cover"  />
    </div>
  );
   
   
 

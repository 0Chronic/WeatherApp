
"use client";

import { use, useState } from "react";
import axios from "axios";
import { BsSearch } from "react-icons/bs";

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
   {/*overlay*/}
  <div className="absolute top-0 left-0 bottom-0 bg-black/40 z-[1]" />
  <img src='https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' layout='fill' className='object-cover' />
  
  <div className="relative flex justify-between items-center max-w-[500px] w-full m-ato">
    <form>
     <div>
     <input type="text" placeholder="Searchcity" />
     </div>
     <button onClick={fetchWeather}><BsSearch></BsSearch></button>
    </form>
  </div>

  </div>



)
   
}

 

   
 

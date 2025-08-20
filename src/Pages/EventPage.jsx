import React from 'react'
import Events from '../Component/Events'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


function EventPage() {
      const [Event,setEvents] = useState([])

  useEffect(()=>{
    const fetchEvents = async()=>{
      try{
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/events`)
        setEvents(res.data)
        console.log("Fetched Events:",res.data)
      }
      catch(err){
        console.log("Error in Fetching Data")
      }
    }
    fetchEvents()
  },[]);

  return (
    <Events data={Event}/>
  )
}

export default EventPage
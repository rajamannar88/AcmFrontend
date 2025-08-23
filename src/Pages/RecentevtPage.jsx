import React from 'react'
import axios from 'axios';
import {useState, useEffect } from 'react';
import Recentevents from '../Component/Recentevents'
import Navbar from '../Component/Navbar';

function RecentevtPage() {
    const [REvent,setREvents] = useState([])
  
    useEffect(()=>{
      const fetchEvents = async()=>{
        try{
          const res = await axios.get(`${import.meta.env.VITE_API_URL}/recent-events`)
          setREvents(res.data)
          console.log("Fetched REvents:",res.data)
        }
        catch(err){
          console.log("Error in Fetching Data")
        }
      }
      fetchEvents()
    },[]);
  
  return (
    <>
    <Navbar/>

    <br />
    <br />
    <Recentevents data={REvent}/>
    </>
  )
}

export default RecentevtPage
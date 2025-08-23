import React from 'react'
import Events from '../Component/Events'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import OutreachNew from '../Component/OutreachNew'
import Navbar from '../Component/Navbar';

function Outreachpage() {
  const [Outreach,setOutreach] = useState([])

  useEffect(()=>{
    const fetchEvents = async()=>{
      try{
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/outreach`)
        setOutreach(res.data)
        console.log("Fetched Outreach:",res.data)
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
        <OutreachNew data={Outreach}/>
    </>

  )
}

export default Outreachpage
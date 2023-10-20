import React from 'react'
import Articles from "../Articles/Articles";
import Filter from "../Filter/Filter";
import "./Explore.css";


function Explore() {
  return (
    <div className='main'>
    <div><Filter /></div>
    <div><Articles /></div>
    </div>
  )
}

export default Explore
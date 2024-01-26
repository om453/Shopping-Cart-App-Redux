import React from 'react'
import './Spinner.css'

function Spinner() {
  return (
    <div style={{ position: "absolute", left: "50%", top: "50%", margin: "0 auto" }}>
      <div className='loader' ></div>
    </div>
    
  )
}

export default Spinner
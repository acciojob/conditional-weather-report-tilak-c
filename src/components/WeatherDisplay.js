import React from 'react'

const WeatherDisplay = (data) => {
    const {temperature,conditions}=data;
    return (
    <>
    {temperature>20?<p><span style={{color:"red"}}>temperature</span></p>:<p><span style={{color:"blue"}}>temperature</span></p>}
    <p>{conditions}</p>
    </>
  )
}

export default WeatherDisplay
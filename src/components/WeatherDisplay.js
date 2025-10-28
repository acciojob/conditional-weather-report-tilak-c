import React from 'react'

const WeatherDisplay = (data) => {
    const {temperature,conditions}=data;
    return (
    <>
    {temperature>20?<p style={{color:"red"}}>temperature</p>:<p style={{color:"blue"}}>temperature</p>}
    <p>{conditions}</p>
    </>
  )
}

export default WeatherDisplay
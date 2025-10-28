import React from 'react'

const WeatherDisplay = ({data}) => {
    const {temperature,conditions}=data;
    return (
    <>
    {temperature>20?<p><span style={{color:"red"}}>Temperature: {temperature}</span></p>:<p><span style={{color:"blue"}}>Temperature: {temperature}</span></p>}
    <p>Conditions: {conditions}</p>
    </>
  )
}

export default WeatherDisplay
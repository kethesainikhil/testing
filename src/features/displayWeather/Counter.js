import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  fetchcitydetails,
  fetchWeatherAsync,
} from './counterSlice';
import { fetchWeather } from './counterAPI';
export function DisplayWeather() {
  const[city,setCity] = useState(null);
  const[onecity,setoneCity] = useState(null);
  const handleCity = (e) =>{
    setCity(e.target.value)
  }

  const dispatch = useDispatch();
  const handleSubmit = () =>{
    setoneCity(city);
  }
  useEffect(()=>{
    dispatch(fetchWeatherAsync("bangalore"))
  },[dispatch,onecity])
  const details = useSelector(fetchcitydetails)
  console.log(details)
  return (
    <div>
      <input type="text" value={city} onChange={(e)=>handleCity(e)} />
      <button type="submit" onClick={handleSubmit}>findme</button>
    </div>
  );
}

import { useState,useEffect} from 'react';
import './Athan.css'
import axios from 'axios';
import Hours from "./Hours"

const Athan = () => {
  const [date,setDate] = useState()
  const [timing,setTiming] = useState()
  const[city,setCity] = useState("Cairo")
  const[country,setCountry] = useState("Egypte")
  
  useEffect(() => {
    axios.get(`http://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}`)
    .then( response => {
        const x = response.data.data.date
        const y = response.data.data.timings
        const dateOpj = Object.entries(x);
        const timeOpj = Object.entries(y);
        setDate(dateOpj)
        setTiming(timeOpj)
      })
      .catch(function (error) {
        console.log(error);
      });
    },[city]);
    // handel func   
    const handleClick = (e)=> {
      const count = e.target.value
      switch (count) {
        case "Egypte":
          setCity("Cairo");
          setCountry("Egypte")
          break;
        case "United Arab Emirates":
          setCity("Abu Dhabi");
          setCountry("United Arab Emirates")
          break;
        case "Saudi Arabia":
          setCity("Riyadh");
          setCountry("Saudi Arabia")
          break;
        case "Kuwait":
          setCity("Kuwait");
          setCountry("Kuwait")
          break;
        case "United Kingdom":
          setCity("London");
          setCountry("United Kingdom")
          break;
        }
      }

      if(timing){
          return (
            <div className='container'>
              {/* <Hours/> */}
              {/* <GetHours/> */}
                <p className='info'>Prayer times in {city}, {country}</p>
                <div className='date' >
                {/* Hijri Date */}
                <div className='parent parent-hijriDate' >
                  <span className='tex-hover' >Hijri Date :</span>
                 {date[2].map((x,index)=> <p key={index}>{x.date} </p>)}
                </div>
                {/* Gregorian Date */}
                <div className='parent parent-gregorianDate' >
                  <span className='tex-hover'>Gregorian Date :</span>
                 {date[3].map((x,index)=> <p key={index}> {x.date} </p>)}
                </div>
                </div>
                <div className="option-parent">
                {/* options country */}
                <div className="option-Country">
                  <span className='tex-hover'>Select an City : </span>
                  <select onChange={ handleClick } >
                    <option value="Egypte">Egypte</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="United Kingdom">United Kingdom</option>
                  </select>
                </div>
                 {/* {getHours} */}
                 <div className='time-now'>
                  <span className='tex-hover'>Time Now : </span>
                  <Hours/>
                 </div>
                {/* timing-div */}
                </div>
                <div className='parent-timing' >
                <div className="timing-list">
                    <li>
                      <p className='payer' >Payer</p>
                      <p className='time' >Time</p>
                    </li>
                  {timing.map((x,index) => { 
                return <li key={index}> 
                      <p className='payer' >{x[0]}</p>
                      <p className='time' >{x[1]}</p>
                </li> 
                })} 
  
                  </div>
                  </div>
            </div>
    )
        }
}

export default Athan
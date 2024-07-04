import { useState } from 'react'
import info from "./images/info-solid.svg"
import aus from "./images/Flag_of_Australia.svg"
import hotels from './data'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
         <div className='info-flex'>
          <div className='info'>  
            <img src={info} alt="" />
          </div>
            <h4>Get the advice you need. Check the latest COVID-19 restrictions before you travel. <a href="">Learn more</a></h4>
         </div>
         <h1>Most Popular Landmarks</h1>

         {/* HOTEL IN DIFFERENT COUNTRIES */}
         <div className='grid'>
       {
        hotels.map(ele => (
          <div className='flag-grid'>
          <img src={ele.flag} alt="" />
          <div>
           <h3><a href="#">Hotels near Ocean City Broadwalk</a></h3>
           <p>Popular By Areas</p> 
           <h4><a href="#">Hotels in Ocean City, United States of America</a></h4>
           <h4><a href="#">Hotels in the United States</a></h4>
        </div>
        </div>
        ))
       }
                     
         </div>
      </div>
    </>
  )
}

export default App

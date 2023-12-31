import React from 'react'
import reactDance from './assets/reactdance.jpg'
import jsClothRental from './assets/jsclothrental.jpg'
import reactCalculator from './assets/reactcalculator.jpg'
import jsStopWatch from './assets/jsstopwatch.jpg'
import reactWeather from './assets/reactweather.png'
import foodApp from './assets/foodapp.jpg'

const Portfolio = () => {

    const portfolios =[
      {
        id:1,
        src:reactDance
      },
      {
        id:2,
        src:jsClothRental
      },
      {
        id:3,
        src:reactCalculator
      },
      {
        id:4,
        src:jsStopWatch
      },
      {
        id:5,
        src:reactWeather
      },
      {
        id:6,
        src:foodApp
      },
    ]
  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
       <div className='max-w-screen-lg p-14 mx-auto flex flex-col justify-center w-full h-full'>
        <div className=''>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-6'>check out some of my work right here</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-12 px-12 sm:px-0'>
          {
          portfolios.map(({id, src}) =>(
            <div key={id} className='shadow-md shadow-gray-400 rounded-lg'>

                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />

                <div className='flex items-center justify-center'>
                  
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 '>Demo</button>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                </div>
            </div>
          ))
}
          
           
        </div>
          
        

        
       </div>
    </div>
  )
}

export default Portfolio

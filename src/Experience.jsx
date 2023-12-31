import React from 'react'
import html from './assets/html.jpg'
import css from './assets/css.jpg'
import javascript from './assets/javascript.jpg'
import react from './assets/react.jpg'
import java from './assets/java.jpg'
import sql from './assets/sql.jpg'
import tailwind from './assets/tailwind.jpg'
import mysql from './assets/mysql.jpg'

const Experience = () => {

  const techs=[
    {
      id:1,
      src:html,
      title:'HTML',
      style:'shadow-orange-500'
    },
    {
      id:2,
      src:css,
      title:'CSS',
      style:'shadow-blue-500'
    },
    {
      id:3,
      src:javascript,
      title:'JAVASCRIPT',
      style:'shadow-yellow-500'
    },
    {
      id:4,
      src:react,
      title:'REACT.JS',
      style:'shadow-blue-600'
    },
    {
      id:5,
      src:java,
      title:'JAVA',
      style:'shadow-white'
    },
    {
      id:6,
      src:sql,
      title:'SQL',
      style:'shadow-blue-500'
    },
    {
      id:7,
      src:tailwind, 
      title:'TAILWIND',
      style:'shadow-sky-400'
    },
    {
      id:8,
      src:mysql,
      title:'MYSQL',
      style:'shadow-blue-500'
    },
    
  ]
  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-8 flex flex-col justify-center w-full h-full text-white'>
       
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
          <p className='py-6'>These Are The Technologies I've Worked with </p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-4 px-12 sm:px-0'>

          {
            techs.map(({id,src,title,style}) =>(
              <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
          <img src={src} alt="" className='w-20 mx-auto' />
          <p className='mt-4'>{title}</p>
          </div>
            ))
          }
          
        </div>
      </div>
    </div>
  )
}

export default Experience

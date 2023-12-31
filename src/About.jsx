import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'> 
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

        <p className='text-xl mt-20'>
         Hello Myself Naveen M I have Completed My B-Tech in Presidency University Bangalore. and I am a Passionate Computer Science student with a strong foundation in programming languages such as Core Java and C. Through my coursework and personal projects, I have developed expertise in software development, database management, and web development.
         </p>

        <br />
         
         <p className='text-xl  '>
         I am eager to apply my skills to real-world challenges and am seeking opportunities to gain hands-on experience in the industry. I am particularly interested in exploring the areas of artificial intelligence and machine learning. I am a quick learner, a problem solver, and a team player.
        </p>
         
      </div>
    </div>
  )
}

export default About

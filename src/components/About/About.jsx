import React from 'react'
import { Card } from 'flowbite-react'

const About = () => {
  return (
    <div className='flex'>

      <div class='p-2'>
        <Card imgSrc="https://avatars.githubusercontent.com/u/114438461?s=400&u=f0289898edad1c24fae1effafc5e2ceae8fbd984&v=4">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            About Me.
          </h5>
        </Card>
      </div>

      <div className='about p-2'>
        <Card>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-5">
            Nikhil Prasad
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 mb-10">
          I am a software developer based in Houston, TX with experience in web development, JavaScript, and Python. I have a passion for creating dynamic and user-friendly websites and am skilled in both front-end and back-end development. I have experience working with a variety of technologies such as React, Node.js, and Django, and am always looking to stay up-to-date with the latest advancements in the industry. My experience in Python and JavaScript also allows me to work on a range of projects, from web applications to data analysis and automation tasks. I am a strong collaborator and able to work in a fast-paced environment, always focused on delivering high-quality work on-time and on-budget.
          </p>
        </Card>
      </div>

    </div>
  )
}

export default About
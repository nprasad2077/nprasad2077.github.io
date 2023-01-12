import React from 'react'

const About = () => {
  return (
    <div>
    <a href="#" class="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://avatars.githubusercontent.com/u/114438461?v=4" alt=""/>
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">About Me.</h5>
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Nikhil Prasad</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">"I am a software developer based in Houston, TX with experience in web development, JavaScript, and Python. I have a passion for creating dynamic and user-friendly websites and am skilled in both front-end and back-end development. I have experience working with a variety of technologies such as React, Node.js, and Django, and am always looking to stay up-to-date with the latest advancements in the industry. My experience in Python and JavaScript also allows me to work on a range of projects, from web applications to data analysis and automation tasks. I am a strong collaborator and able to work in a fast-paced environment, always focused on delivering high-quality work on-time and on-budget."</p>
        </div>
    </a>
    </div>
  )
}

export default About
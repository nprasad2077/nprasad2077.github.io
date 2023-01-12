import React from 'react'
import { Card } from 'flowbite-react'

const Welcome = () => {
  return (
    <div className='welcome'>
      <Card>
        <img src='src/assets/pics/mountains.jpg' class='w-5/6'></img>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Nikhil Prasad
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Full Stack Web Developer
        </p>
      </Card>
    </div>
  )
}

export default Welcome
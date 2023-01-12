import React from 'react'
import { Card } from 'flowbite-react'

const Projects = () => {
  return (
    <div class='flex'>
        <div>    <a href="#" class="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="src/assets/bob/bob.png" alt=""/>
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">My Projects</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the most recent projects I've been working on.</p>
        </div>
    </a></div>
<div class='flex-col'>
<div className="max-w-sm">
  <Card
    horizontal={false}
    imgSrc="src\assets\shot\planetarium.png"
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Planetarium
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
    Planetarium is an application used to display information about the planets in our Solar System.
    </p>
    <p className="font-normal text-gray-700 dark:text-gray-400">
    Planetarium is a React.js front-end application that pulls data from NASA APIs in addition to Django back-end for user and forum data.
    </p>
  </Card>
</div>
<div className="max-w-sm">
  <Card
    horizontal={false}
    imgSrc="src\assets\shot\travel.png"
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Travel Base
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
    Travel Base is an application used to view and create memories about travel destinations.
    </p>
    <p className="font-normal text-gray-700 dark:text-gray-400">
    Travel Base is deployed on a React.js front-end that uses data from a Node.js/MongoDB/Mongoose back-end.
    </p>
  </Card>
</div>
<div className="max-w-sm">
  <Card
    horizontal={false}
    imgSrc="src\assets\shot\nutri.png"
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Nutri-Scan
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
    Nutri-Scan is an application for researching nutritional and environmental facts about food products. It can quickly display helpful nutritional summaries and interpret package information.
    </p>
    <p className="font-normal text-gray-700 dark:text-gray-400">
    Nutri-Scan is a React.js front-end application that calls to the blank.com server for data.
    </p>
  </Card>
</div>
<div className="max-w-sm">
  <Card
    horizontal={false}
    imgSrc="src\assets\shot\pokemon.png"
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Pokemon Match!
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      Pokemon Match! is a fun memory match game. Players are to find a matching pokemon until all cards are turned over.
    </p>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      Pokemon Match! uses vanilla HTML/CSS/JavaScript to handle visuals and game logic.
    </p>
  </Card>
</div>

</div>

    </div>
  )
}

export default Projects
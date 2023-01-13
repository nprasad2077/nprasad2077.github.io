import React from 'react'
import { Card } from 'flowbite-react'
import './projects.css'

const Projects = () => {
  return (
    <div class='flex flex-row flex-wrap'>

      <div className="child-1">
        <Card
          horizontal={false}
          imgSrc="src/assets/bob/bob.png"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Projects
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are some of my projects.
          </p>
        </Card>
      </div>


      <a href='https://capstone-front-end-seven.vercel.app/' className='child-2'><div className="child-2">
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
      </div></a>


      <div className="child-2">
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

<div className="child-3">
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

<div className="child-4">
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
      Pokemon Match! uses simple HTML/CSS/JavaScript to handle visuals and game logic.
    </p>
  </Card>
</div>


    </div>
  )
}

export default Projects